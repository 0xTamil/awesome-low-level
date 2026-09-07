const AWESOME_REPO = { owner: "0xTamil", repo: "awesome-low-level", branch: "main" };
const README_RAW_URL = `https://raw.githubusercontent.com/${AWESOME_REPO.owner}/${AWESOME_REPO.repo}/${AWESOME_REPO.branch}/README.md`;
const README_RAW_BASE = `https://raw.githubusercontent.com/${AWESOME_REPO.owner}/${AWESOME_REPO.repo}/${AWESOME_REPO.branch}/`;

// How deep the TOC Level should go
const MAX_SIDEBAR_TOC_LEVEL = 3;

// Slugs
function slugifyHeading(text, seen) {
    let slug = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
    if (!slug) slug = "section";
    if (seen.has(slug)) {
        let i = 1;
        while (seen.has(`${slug}-${i}`)) i++;
        slug = `${slug}-${i}`;
    }
    seen.add(slug);
    return slug;
}

// Fetch readme
async function fetchReadmeMarkdown() {
    const res = await fetch(`${README_RAW_URL}?_=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);
    return res.text();
}

// Parse Readme
function parseReadme(markdown) {
    const scratch = document.createElement("div");
    scratch.innerHTML = marked.parse(markdown, { gfm: true, breaks: false });
    const seen = new Set();
    const headings = Array.from(scratch.querySelectorAll("h1,h2,h3,h4"));
    headings.forEach((h) => {
        h.id = slugifyHeading(h.textContent, seen);
    });
    return { scratch, headings };
}

// Build Tree
function buildTocTree(headingEls, maxLevel = MAX_SIDEBAR_TOC_LEVEL) {
    const filtered = headingEls.filter((h) => Number(h.tagName[1]) <= maxLevel);
    const items = filtered.length && filtered[0].tagName === "H1" ? filtered.slice(1) : filtered;

    const root = [];
    const stack = [{ level: 0, children: root }];

    items.forEach((h) => {
        const level = Number(h.tagName[1]);
        const node = { id: h.id, text: h.textContent.replace(/^\d+\.\s*/, ""), children: [] };
        while (stack.length > 1 && level <= stack[stack.length - 1].level) stack.pop();
        stack[stack.length - 1].children.push(node);
        stack.push({ level, children: node.children });
    });

    return root;
}

// Render TOC
function renderTocTree(nodes, { linkPrefix = "", onNavigate = null } = {}) {
    const ul = document.createElement("ul");

    nodes.forEach((node) => {
        const li = document.createElement("li");
        li.className = "toc-node";

        const row = document.createElement("div");
        row.className = "toc-row";

        if (node.children.length) {
            const twirl = document.createElement("button");
            twirl.type = "button";
            twirl.className = "toc-twirl";
            twirl.setAttribute("aria-label", "Toggle section");
            twirl.setAttribute("aria-expanded", "true");
            twirl.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 4l12 8-12 8z" fill="currentColor"/></svg>';
            twirl.addEventListener("click", () => {
                const collapsed = li.classList.toggle("collapsed");
                twirl.setAttribute("aria-expanded", String(!collapsed));
            });
            row.appendChild(twirl);
        } else {
            const spacer = document.createElement("span");
            spacer.className = "toc-spacer";
            row.appendChild(spacer);
        }

        const a = document.createElement("a");
        a.href = `${linkPrefix}#${node.id}`;
        a.textContent = node.text;
        a.dataset.target = node.id;
        if (onNavigate) a.addEventListener("click", onNavigate);
        row.appendChild(a);

        li.appendChild(row);

        if (node.children.length) {
            const childUl = renderTocTree(node.children, { linkPrefix, onNavigate });
            childUl.className = "toc-children";
            li.appendChild(childUl);
        }

        ul.appendChild(li);
    });

    return ul;
}

// Theme & mobile sidebar toggle
function initPageChrome() {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
        });
    }

    const sidebarEl = document.getElementById("sidebar");
    const navToggle = document.getElementById("navToggle");
    const scrim = document.getElementById("scrim");

    function closeMobileSidebar() {
        if (sidebarEl) sidebarEl.classList.remove("open");
        if (scrim) scrim.classList.remove("show");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }

    if (navToggle && sidebarEl) {
        navToggle.addEventListener("click", () => {
            const open = sidebarEl.classList.toggle("open");
            if (scrim) scrim.classList.toggle("show", open);
            navToggle.setAttribute("aria-expanded", String(open));
        });
    }
    if (scrim) scrim.addEventListener("click", closeMobileSidebar);

    return { closeMobileSidebar };
}