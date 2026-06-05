(function () {
  const messages = {
    en: {
      dashboard: "Dashboard",
      assetManagement: "Asset Management",
      myRentals: "My Rentals",
      browseAssets: "Browse Assets",
      usersManagement: "Users Management",
      analytics: "Analytics",
      profile: "Profile",
      settings: "Settings",
      financeReports: "Finance & Reports",
      systemManagement: "System Management",
      rentalOrders: "Rental Orders",
      payments: "Payments",
      logout: "Logout",
      myProfile: "My Profile",
      profileSettings: "Profile Settings",
      backToHome: "Back to Home",
      profileDescription: "Manage your account information and preferences.",
      settingsDescription:
        "Configure your account settings and security options.",
      language: "Language",
      english: "English",
      amharic: "አማርኛ",
    },
    am: {
      dashboard: "ዳሽቦርድ",
      assetManagement: "ንብረት ሥራ",
      myRentals: "የእኔ ኪራዮች",
      browseAssets: "ንብረቶች መሳሰሉ",
      usersManagement: "ተጠቃሚዎች ሥራ",
      analytics: "ትንተና",
      profile: "መገለጫ",
      settings: "ቅንብሮች",
      financeReports: "ገንዘብ & ሪፖርቶች",
      systemManagement: "ስርዓት ሥራ",
      rentalOrders: "የ ኪራይ ትዕዛዞች",
      payments: "ክፍያዎች",
      logout: "ውጣ",
      myProfile: "የእኔ መገለጫ",
      profileSettings: "መገለጫ ቅንብሮች",
      backToHome: "ወደ ቤት ተመለስ",
      profileDescription: "የሂሳብ መረጃ እና ምርጫዎችን ያስተዳድሩ።",
      settingsDescription: "ሂሳብዎን እና ደህንነት አማራጮችን ያዋቅሩ።",
      language: "ቋንቋ",
      english: "English",
      amharic: "አማርኛ",
    },
  };

  function getLang() {
    return localStorage.getItem("dashboardLang") || "en";
  }

  function setLang(lang) {
    localStorage.setItem("dashboardLang", lang);
    document.documentElement.lang = lang;
    updateLanguage();
  }

  function t(key) {
    const lang = getLang();
    return messages[lang] && messages[lang][key] ? messages[lang][key] : key;
  }

  function updateLanguage() {
    const lang = getLang();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  window.i18n = {
    t,
    getLang,
    setLang,
    updateLanguage,
  };

  // init on load
  document.addEventListener("DOMContentLoaded", function () {
    const lang = getLang();
    document.documentElement.lang = lang;
    updateLanguage();
  });
})();
