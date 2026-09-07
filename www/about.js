(() => {
    // GitHub's own auto-generated social-preview image for the repo — used
    // as a banner fallback if the README's Discord section has no image.
    const FALLBACK_BANNER = `https://opengraph.githubassets.com/1/${AWESOME_REPO.owner}/${AWESOME_REPO.repo}`;

    const bannerWrap = document.getElementById("aboutBanner");
    const tocEl = document.getElementById("toc");

    const { closeMobileSidebar } = initPageChrome();

    // ---------- Banner ----------
    function showBanner(src, alt) {
        bannerWrap.innerHTML = `<img class="about-banner" src="${src}" alt="${alt}" loading="eager">`;
    }

    function findDiscordBanner(scratch) {
        const headings = Array.from(scratch.querySelectorAll("h1,h2,h3,h4"));
        const discordHeading = headings.find((h) => /^discord$/i.test(h.textContent.trim()));
        if (!discordHeading) return { bannerSrc: null, discordHref: null };

        const level = Number(discordHeading.tagName[1]);
        let node = discordHeading.nextElementSibling;
        let bannerSrc = null;
        let discordHref = null;

        while (node && !(/^H[1-4]$/.test(node.tagName) && Number(node.tagName[1]) <= level)) {
            const img = node.querySelector ? node.querySelector("img") : null;
            if (img && !bannerSrc) bannerSrc = img.getAttribute("src");
            const link = node.querySelector
                ? node.querySelector("a[href*='discord.gg'], a[href*='discord.com']")
                : null;
            if (link && !discordHref) discordHref = link.getAttribute("href");
            node = node.nextElementSibling;
        }

        if (bannerSrc && !/^https?:\/\//i.test(bannerSrc)) {
            bannerSrc = new URL(bannerSrc, README_RAW_BASE).href;
        }

        return { bannerSrc, discordHref };
    }

    // ---------- Sidebar table of contents (nested, collapsible) ----------
    // Same tree/render helpers as index.html, but every link points back at
    // index.html#slug since the headings themselves only live on that page.
    function renderSidebarToc(headingEls) {
        const tree = buildTocTree(headingEls);
        tocEl.innerHTML = "";
        if (tree.length === 0) {
            tocEl.innerHTML = `<p class="status">No sections found.</p>`;
            return;
        }
        tocEl.appendChild(renderTocTree(tree, { linkPrefix: "index.html", onNavigate: closeMobileSidebar }));
    }

    // ---------- Load once, use for both the banner and the sidebar TOC ----------
    async function loadPage() {
        try {
            const markdown = await fetchReadmeMarkdown();
            const { scratch, headings } = parseReadme(markdown);

            const { bannerSrc, discordHref } = findDiscordBanner(scratch);
            showBanner(bannerSrc || FALLBACK_BANNER, "Awesome Low Level");
            if (discordHref) {
                document.querySelectorAll("[data-discord-link]").forEach((a) => {
                    a.href = discordHref;
                });
            }

            renderSidebarToc(headings);
        } catch (err) {
            showBanner(FALLBACK_BANNER, "Awesome Low Level");
            tocEl.innerHTML = `<p class="status">Couldn't load contents.</p>`;
        }
    }

    loadPage();
})();