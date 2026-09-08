const REPO = {
    owner: "0xTamil",
    repo: "awesome-low-level",
    branch: "main",
    name: "Awesome Low-Level"
};

const MAX_SIDEBAR_TOC_LEVEL = 3;

function getRepoFromQuery() {
    return REPO;
}

function readmeRawBase(repo = REPO) {
    return `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${repo.branch}/`;
}

function readmeBlobBase(repo = REPO) {
    return `https://github.com/${repo.owner}/${repo.repo}/blob/${repo.branch}/`;
}

async function fetchReadmeMarkdown(repo = REPO) {
    const res = await fetch(`${readmeRawBase(repo)}README.md?_=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);
    return res.text();
}

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

// Headings TOC tree
function buildTocTree(headingEls, maxLevel = MAX_SIDEBAR_TOC_LEVEL) {
    const filtered = headingEls.filter((h) => Number(h.tagName[1]) <= maxLevel);
    const items = filtered.length ? filtered.slice(1) : filtered;

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

function renderTocTree(nodes, { linkPrefix = "", onNavigate = null } = {}) {
    const ul = document.createElement("ul");

    nodes.forEach((node) => {
        const li = document.createElement("li");
        li.className = node.children.length ? "toc-node collapsed" : "toc-node";

        const row = document.createElement("div");
        row.className = "toc-row";

        if (node.children.length) {
            const twirl = document.createElement("button");
            twirl.type = "button";
            twirl.className = "toc-twirl";
            twirl.setAttribute("aria-label", "Toggle section");
            twirl.setAttribute("aria-expanded", "false");
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

// Mobile sidebar toggle
function initPageChrome() {
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