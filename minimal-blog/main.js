const NAV_ITEMS = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "admissions", label: "수시 가상지원", href: "admissions.html" },
  { id: "blog", label: "Blog", href: "blog.html" },
  { id: "about", label: "About", href: "about.html" },
];

let siteData = null;

async function loadSiteData() {
  if (siteData) return siteData;
  const res = await fetch("posts.json");
  if (!res.ok) throw new Error("Failed to load posts.json");
  siteData = await res.json();
  return siteData;
}

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function postUrl(slug) {
  return `post.html?slug=${encodeURIComponent(slug)}`;
}

function sortPosts(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  );
}

function renderHeader(site, currentPage) {
  const nav = NAV_ITEMS.map(
    (item) =>
      `<a href="${item.href}"${
        item.id === currentPage ? ' aria-current="page"' : ""
      }>${item.label}</a>`
  ).join("");

  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="logo" href="index.html">${site.siteName}</a>
        <nav class="nav" aria-label="Main">${nav}</nav>
      </div>
    </header>
  `;
}

function renderFooter(site) {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <p>© ${year} ${site.siteName}</p>
        <span class="site-footer__tag">수시 가상지원 데모</span>
      </div>
    </footer>
  `;
}

function renderChip(category, active, filterKey) {
  const activeClass = active ? " chip--active" : "";
  const data = filterKey ? ` data-filter="${filterKey}"` : "";
  return `<button type="button" class="chip${activeClass}"${data}>${category}</button>`;
}

function renderCard(post) {
  return `
    <li class="card">
      <a class="card__link" href="${postUrl(post.slug)}">
        <img class="card__media" src="${post.coverImage}" alt="" width="600" height="450" loading="lazy" />
        <div class="card__body">
          <div class="card__meta">
            <span class="chip">${post.category}</span>
            <time datetime="${post.publishDate}">${formatDate(post.publishDate)}</time>
          </div>
          <h2 class="card__title">${post.title}</h2>
          <p class="card__excerpt">${post.excerpt}</p>
        </div>
      </a>
    </li>
  `;
}

function renderHeroMag(post) {
  return `
    <article class="hero-mag">
      <a class="hero-mag__link" href="${postUrl(post.slug)}">
        <img class="hero-mag__media" src="${post.coverImage}" alt="" width="1400" height="600" />
        <div class="hero-mag__body">
          <p class="hero-mag__kicker">${post.category} · Featured post</p>
          <h2 class="hero-mag__title">${post.title}</h2>
          <p class="hero-mag__excerpt">${post.excerpt}</p>
        </div>
      </a>
    </article>
  `;
}

async function initLayout() {
  const page = document.body.dataset.page;
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (!headerEl || !footerEl || !page) return;

  const site = await loadSiteData();
  headerEl.innerHTML = renderHeader(site, page);
  footerEl.innerHTML = renderFooter(site);
}

async function initHome() {
  const introTitle = document.getElementById("intro-title");
  const introText = document.getElementById("intro-text");
  const heroEl = document.getElementById("hero-feature");
  const gridEl = document.getElementById("home-grid");
  if (!introTitle) return;

  const site = await loadSiteData();
  document.title = `${site.siteName} — Home`;
  introTitle.textContent = site.siteName;
  introText.textContent = site.tagline;

  const sorted = sortPosts(site.posts);
  const featured = sorted.find((p) => p.featured) || sorted[0];
  const rest = sorted.filter((p) => p.slug !== featured.slug).slice(0, 3);

  if (heroEl && featured) heroEl.innerHTML = renderHeroMag(featured);
  if (gridEl) gridEl.innerHTML = rest.map(renderCard).join("");
}

function bindCategoryFilters(container, posts, gridEl) {
  const buttons = container.querySelectorAll(".chip[data-filter]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("chip--active"));
      btn.classList.add("chip--active");
      const filter = btn.dataset.filter;
      const filtered =
        filter === "all"
          ? posts
          : posts.filter((p) => p.category === filter);
      gridEl.innerHTML = filtered.length
        ? filtered.map(renderCard).join("")
        : '<li class="empty-state">No posts in this category.</li>';
    });
  });
}

async function initBlog() {
  const gridEl = document.getElementById("blog-grid");
  const chipsEl = document.getElementById("category-chips");
  if (!gridEl) return;

  const site = await loadSiteData();
  const sorted = sortPosts(site.posts);
  gridEl.innerHTML = sorted.map(renderCard).join("");

  if (chipsEl && site.categories) {
    const chips = [
      renderChip("All", true, "all"),
      ...site.categories.map((c) => renderChip(c, false, c)),
    ].join("");
    chipsEl.innerHTML = chips;
    bindCategoryFilters(chipsEl, sorted, gridEl);
  }
}

async function initPost() {
  const root = document.getElementById("post-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const site = await loadSiteData();
  const sorted = sortPosts(site.posts);
  const index = sorted.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? sorted[index] : null;

  if (!post) {
    root.innerHTML =
      '<p class="empty-state">Post not found. <a href="blog.html">Back to Blog</a></p>';
    return;
  }

  const prev = index < sorted.length - 1 ? sorted[index + 1] : null;
  const next = index > 0 ? sorted[index - 1] : null;
  const related = sorted
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  document.title = `${post.title} — ${site.siteName}`;

  const relatedHtml = related.length
    ? `
    <section class="related" aria-labelledby="related-title">
      <div class="section-head">
        <h2 class="section-head__title" id="related-title">More posts in ${post.category}</h2>
      </div>
      <ul class="card-grid">${related.map(renderCard).join("")}</ul>
    </section>`
    : "";

  root.innerHTML = `
    <article class="post-article">
      <header class="post-article__header container container--narrow">
        <p class="post-article__kicker">${post.category}</p>
        <h1 class="post-article__title">${post.title}</h1>
        <p class="post-article__meta">
          <time datetime="${post.publishDate}">${formatDate(post.publishDate)}</time>
          · ${post.author}
        </p>
      </header>
      <div class="container container--narrow">
        <img class="post-article__cover" src="${post.coverImage}" alt="" width="1200" height="675" />
        <div class="post-article__body">${post.body}</div>
        <nav class="post-article__nav" aria-label="Article navigation">
          <span>${prev ? `<a href="${postUrl(prev.slug)}">← ${prev.title}</a>` : ""}</span>
          <a href="blog.html">All posts</a>
          <span>${next ? `<a href="${postUrl(next.slug)}">${next.title} →</a>` : ""}</span>
        </nav>
      </div>
    </article>
    <div class="container">${relatedHtml}</div>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await initLayout();
    const page = document.body.dataset.page;
    if (page === "home") await initHome();
    if (page === "blog") await initBlog();
    if (page === "post") await initPost();
  } catch (err) {
    console.error(err);
    const main = document.querySelector("main .container");
    if (main) {
      main.innerHTML =
        '<p class="empty-state">Could not load site data. Run <code>python3 -m http.server 3456</code> inside the <code>minimal-blog</code> folder.</p>';
    }
  }
});
