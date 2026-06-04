const NAV_ITEMS = [
  { id: "home", label: "Home", href: "index.html" },
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
    month: "short",
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
      <div class="container">
        <p>© ${year} ${site.siteName}</p>
      </div>
    </footer>
  `;
}

function renderPostListItem(post) {
  return `
    <li class="post-list__item">
      <a class="post-list__link" href="${postUrl(post.slug)}">
        <time class="post-list__date" datetime="${post.publishDate}">${formatDate(post.publishDate)}</time>
        <h2 class="post-list__title">${post.title}</h2>
        <p class="post-list__excerpt">${post.excerpt}</p>
      </a>
    </li>
  `;
}

function renderFeatured(post) {
  return `
    <a class="featured-card" href="${postUrl(post.slug)}">
      <img class="featured-card__media" src="${post.coverImage}" alt="" width="1200" height="675" loading="lazy" />
      <h2 class="featured-card__title">${post.title}</h2>
      <p class="featured-card__excerpt">${post.excerpt}</p>
    </a>
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
  document.title = document.title.replace("Quiet Notes", site.siteName);
}

async function initHome() {
  const heroTitle = document.getElementById("hero-title");
  const heroTagline = document.getElementById("hero-tagline");
  const featuredEl = document.getElementById("featured-post");
  const latestEl = document.getElementById("latest-posts");
  if (!heroTitle) return;

  const site = await loadSiteData();
  heroTitle.textContent = site.siteName;
  heroTagline.textContent = site.tagline;

  const sorted = sortPosts(site.posts);
  const featured = sorted.find((p) => p.featured) || sorted[0];
  const latest = sorted.filter((p) => p.slug !== featured.slug).slice(0, 4);

  if (featuredEl && featured) {
    featuredEl.innerHTML = renderFeatured(featured);
  }
  if (latestEl) {
    latestEl.innerHTML = latest.map(renderPostListItem).join("");
  }
}

async function initBlog() {
  const listEl = document.getElementById("blog-list");
  if (!listEl) return;

  const site = await loadSiteData();
  const sorted = sortPosts(site.posts);
  listEl.innerHTML = sorted.map(renderPostListItem).join("");
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
    document.title = `Not found — ${site.siteName}`;
    return;
  }

  const prev = index < sorted.length - 1 ? sorted[index + 1] : null;
  const next = index > 0 ? sorted[index - 1] : null;

  document.title = `${post.title} — ${site.siteName}`;

  root.innerHTML = `
    <article>
      <header class="post-header">
        <p class="post-header__meta">
          <time datetime="${post.publishDate}">${formatDate(post.publishDate)}</time>
          · ${post.author}
        </p>
        <h1 class="post-header__title">${post.title}</h1>
      </header>
      <img class="post-cover" src="${post.coverImage}" alt="" width="1200" height="675" />
      <div class="post-body">${post.body}</div>
      <nav class="post-nav" aria-label="Post navigation">
        <span>${prev ? `<a href="${postUrl(prev.slug)}">← ${prev.title}</a>` : ""}</span>
        <a href="blog.html">All posts</a>
        <span>${next ? `<a href="${postUrl(next.slug)}">${next.title} →</a>` : ""}</span>
      </nav>
    </article>
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
        '<p class="empty-state">Could not load site data. Serve this folder with a local server (e.g. <code>npx serve minimal-blog</code>).</p>';
    }
  }
});
