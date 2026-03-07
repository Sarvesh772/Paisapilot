const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const yearEl = document.getElementById("year");
const langButtons = document.querySelectorAll("[data-lang-btn]");
const langPanels = document.querySelectorAll("[data-lang-panel]");
const articleSearch = document.getElementById("articleSearch");
const listEn = document.querySelector('[data-article-list="en"]');
const listHi = document.querySelector('[data-article-list="hi"]');
const emptyEn = document.getElementById("noResultsEn");
const emptyHi = document.getElementById("noResultsHi");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function filterArticles() {
  if (!articleSearch) return;
  const q = articleSearch.value.trim().toLowerCase();

  const apply = (list, empty) => {
    if (!list) return;
    const cards = list.querySelectorAll(".post-card");
    let visible = 0;
    cards.forEach((card) => {
      const text = (card.textContent || "").toLowerCase();
      const show = q === "" || text.includes(q);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };

  apply(listEn, emptyEn);
  apply(listHi, emptyHi);
}

function applyLanguage(lang) {
  langPanels.forEach((panel) => {
    panel.hidden = panel.getAttribute("data-lang-panel") !== lang;
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang-btn") === lang);
  });

  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  localStorage.setItem("paisapilot_lang", lang);
  filterArticles();
}

if (langButtons.length > 0 && langPanels.length > 0) {
  const preferred = localStorage.getItem("paisapilot_lang");
  applyLanguage(preferred === "hi" ? "hi" : "en");

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang-btn") || "en");
    });
  });
}

if (articleSearch) {
  articleSearch.addEventListener("input", filterArticles);
  filterArticles();
}
