(function () {
  // Handle sidebar menu clicks: set active, update page title, toggle sections
  function initMenu() {
    const items = document.querySelectorAll(".sidebar .menu-item");
    items.forEach((it) => {
      it.addEventListener("click", function (e) {
        e.preventDefault();
        items.forEach((i) => i.classList.remove("active"));
        this.classList.add("active");
        const page = this.dataset.page || "";

        // Hide all content sections
        document.querySelectorAll(".page-section").forEach((s) => {
          s.classList.add("hidden");
        });

        // Show selected section
        if (page) {
          const section = document.getElementById("section-" + page);
          if (section) {
            section.classList.remove("hidden");
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }

        // Update page title
        const titleEl = document.querySelector(".page-title");
        if (titleEl && window.i18n) {
          const keyMap = {
            dashboard: "dashboard",
            assets: "assetManagement",
            "my-rentals": "myRentals",
            rentals: "browseAssets",
            users: "usersManagement",
            analytics: "analytics",
            profile: "profile",
            settings: "settings",
            finance: "financeReports",
            system: "systemManagement",
            orders: "rentalOrders",
            payments: "payments",
          };
          const key = keyMap[page] || page;
          titleEl.textContent = window.i18n.t(key);
        }

        // close sidebar on mobile after selection
        const sidebar = document.getElementById("sidebar");
        if (window.innerWidth <= 768 && sidebar)
          sidebar.classList.remove("active");
      });
    });
  }

  function initProfileDropdown() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".profile-btn");
      if (btn) {
        const dropdown = btn.parentElement.querySelector(".profile-dropdown");
        dropdown.classList.toggle("show");
        return;
      }
      // close if clicked outside
      document
        .querySelectorAll(".profile-dropdown")
        .forEach((dd) => dd.classList.remove("show"));
    });
  }

  function initNotification() {
    document.addEventListener("click", function (e) {
      const bell = e.target.closest(".notification-btn");
      if (bell) {
        const dropdown = bell.parentElement.querySelector(
          ".notification-dropdown",
        );
        dropdown.classList.toggle("show");
        return;
      }
      document
        .querySelectorAll(".notification-dropdown")
        .forEach((d) => d.classList.remove("show"));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMenu();
    initProfileDropdown();
    initNotification();

    // highlight initial menu based on data-page active marker
    const active = document.querySelector(".sidebar .menu-item.active");
    if (!active) {
      const first = document.querySelector(".sidebar .menu-item");
      if (first) first.classList.add("active");
    }
  });
})();
