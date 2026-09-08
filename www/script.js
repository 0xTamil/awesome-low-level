(() => {
    const repo = getRepoFromQuery();
    const BLOB_BASE = readmeBlobBase(repo);
    const README_RAW_BASE = readmeRawBase(repo);

    const contentEl = document.getElementById("content");
    const tocEl = document.getElementById("toc");
    const sourceLinkEl = document.getElementById("sourceLink");

    const { closeMobileSidebar } = initPageChrome();

    document.title = repo.name;
    if (sourceLinkEl) sourceLinkEl.href = `https://github.com/${repo.owner}/${repo.repo}`;

    let observer = null;

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    function stripManualToc() {
        const headings = Array.from(contentEl.querySelectorAll("h1,h2,h3,h4"));
        const tocHeading = headings.find((h) => /^table of contents$/i.test(h.textContent.trim()));
        if (!tocHeading) return;

        const level = Number(tocHeading.tagName[1]);
        const toRemove = [tocHeading];
        let node = tocHeading.nextElementSibling;
        while (node) {
            const isHr = node.tagName === "HR";
            const isHeading = /^H[1-4]$/.test(node.tagName);
            if (isHeading && Number(node.tagName[1]) <= level) break;
            toRemove.push(node);
            if (isHr) break;
            node = node.nextElementSibling;
        }
        toRemove.forEach((n) => n.remove());
    }

    function resolveRelativeUrls() {
        contentEl.querySelectorAll("a[href]").forEach((a) => {
            const href = a.getAttribute("href");
            if (!href || /^(https?:)?\/\//i.test(href) || href.startsWith("#") || href.startsWith("mailto:")) return;
            a.href = new URL(href, BLOB_BASE).href;
        });
        contentEl.querySelectorAll("a[href^='http']").forEach((a) => {
            a.target = "_blank";
            a.rel = "noopener";
        });
        contentEl.querySelectorAll("img[src]").forEach((img) => {
            const src = img.getAttribute("src");
            if (!src || /^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return;
            img.src = new URL(src, README_RAW_BASE).href;
        });
    }

    function assignHeadingIds() {
        const seen = new Set();
        contentEl.querySelectorAll("h1,h2,h3,h4").forEach((h) => {
            h.id = slugifyHeading(h.textContent, seen);
        });
    }

    function highlightCodeBlocks() {
        if (typeof hljs === "undefined") return;
        contentEl.querySelectorAll("pre code").forEach((block) => hljs.highlightElement(block));
    }

    function buildToc() {
        const headings = Array.from(contentEl.querySelectorAll("h1,h2,h3,h4"));
        const tree = buildTocTree(headings);

        if (tree.length === 0) {
            tocEl.innerHTML = `<p class="status">No sections found.</p>`;
            return;
        }

        tocEl.innerHTML = "";
        tocEl.appendChild(renderTocTree(tree, { linkPrefix: "", onNavigate: closeMobileSidebar }));
    }

    function setupScrollSpy() {
        if (observer) observer.disconnect();

        const links = tocEl.querySelectorAll("a[data-target]");
        const targets = Array.from(links)
            .map((a) => document.getElementById(a.dataset.target))
            .filter(Boolean);

        if (targets.length === 0) return;

        const setActive = (id) => {
            links.forEach((a) => a.classList.toggle("active", a.dataset.target === id));
        };

        observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActive(visible[0].target.id);
            },
            { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
        );

        targets.forEach((t) => observer.observe(t));
    }

    function render(markdown) {
        contentEl.innerHTML = marked.parse(markdown, { gfm: true, breaks: false });
        stripManualToc();
        resolveRelativeUrls();
        assignHeadingIds();
        highlightCodeBlocks();
        buildToc();
        setupScrollSpy();
    }

    async function loadReadme() {
        try {
            const markdown = await fetchReadmeMarkdown(repo);
            render(markdown);
        } catch (err) {
            contentEl.innerHTML = `
        <p class="error">
          Couldn't load the README from GitHub right now.<br>
          <small>${escapeHtml(err.message)}</small><br>
          <button id="retry">Try again</button>
        </p>`;
            document.getElementById("retry").addEventListener("click", loadReadme);
        }
    }

    loadReadme();
})();