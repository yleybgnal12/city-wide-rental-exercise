(function () {
  const themeToggleBtnId = "theme-toggle-btn";
  const themeStorageKey = "siteTheme";

  function setTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem(themeStorageKey, theme);
    updateThemeButton(theme);
  }

  function updateThemeButton(theme) {
    const button = document.getElementById(themeToggleBtnId);
    if (!button) return;

    const currentTheme =
      theme ||
      (document.body.classList.contains("light-mode") ? "light" : "dark");
    if (currentTheme === "light") {
      button.innerHTML =
        '<i class="fas fa-sun"></i><span class="theme-label">Light</span>';
    } else {
      button.innerHTML =
        '<i class="fas fa-moon"></i><span class="theme-label">Dark</span>';
    }
  }

  function toggleTheme() {
    const isLight = document.body.classList.contains("light-mode");
    setTheme(isLight ? "dark" : "light");
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    const button = document.getElementById(themeToggleBtnId);
    if (button) {
      button.addEventListener("click", toggleTheme);
    }
  });
})();
