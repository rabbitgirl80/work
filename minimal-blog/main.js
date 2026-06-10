const SITE = {
  siteName: "수시 Fit Lab",
  tagline: "체대와 물리치료학과 수시 지원 가능성을 빠르게 가늠하는 모의 분석 도구",
};

const NAV_ITEMS = [{ id: "admissions", label: "시뮬레이터", href: "index.html" }];

function renderHeader(currentPage) {
  const nav = NAV_ITEMS.map(
    (item) =>
      `<a href="${item.href}"${
        item.id === currentPage ? ' aria-current="page"' : ""
      }>${item.label}</a>`
  ).join("");

  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="logo" href="index.html">${SITE.siteName}</a>
        <nav class="nav" aria-label="Main">${nav}</nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <p>© ${year} ${SITE.siteName}</p>
        <span class="site-footer__tag">${SITE.tagline}</span>
      </div>
    </footer>
  `;
}

function initLayout() {
  const page = document.body.dataset.page;
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (!headerEl || !footerEl || !page) return;

  headerEl.innerHTML = renderHeader(page);
  footerEl.innerHTML = renderFooter();
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initLayout();
  } catch (err) {
    console.error(err);
    const main = document.querySelector("main .container");
    if (main) {
      main.innerHTML =
        '<p class="empty-state">페이지 레이아웃을 불러오지 못했습니다. 정적 서버를 다시 실행해 주세요.</p>';
    }
  }
});
