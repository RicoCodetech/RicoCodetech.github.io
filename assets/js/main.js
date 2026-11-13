(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var SUPPORTED = ["es", "en", "ru"];
  var LOCALES = { es: "es_ES", en: "en_US", ru: "ru_RU" };
  var translations = window.PORTFOLIO_I18N || {};
  var currentLang = "es";
  var cvAvailable = false;
  var toastTimer = null;

  var html = document.documentElement;
  var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var header = document.getElementById("site-header");
  var cvLink = document.getElementById("cv-link");
  var cvSrc = cvLink ? cvLink.getAttribute("data-cv-src") : null;
  var cvNote = cvLink ? cvLink.querySelector(".btn-note") : null;
  var toast = document.getElementById("toast");
  var year = document.getElementById("year");

  function readStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      return;
    }
  }

  function detectedLang() {
    var stored = readStoredLang();
    if (SUPPORTED.indexOf(stored) !== -1) {
      return stored;
    }
    var browserLang = (navigator.language || "es").toLowerCase();
    var shortLang = browserLang.slice(0, 2);
    return SUPPORTED.indexOf(shortLang) !== -1 ? shortLang : "es";
  }

  function setMeta(selector, value) {
    var element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", value);
    }
  }

  function updateNavToggleLabel(open) {
    if (!navToggle) {
      return;
    }
    var dict = translations[currentLang] || translations.es;
    var isOpen = typeof open === "boolean" ? open : navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", isOpen ? dict["nav.close"] : dict["nav.open"]);
  }

  function updateCvState() {
    if (!cvLink) {
      return;
    }
    var dict = translations[currentLang] || translations.es;
    if (cvAvailable && cvSrc) {
      cvLink.setAttribute("href", cvSrc);
      cvLink.setAttribute("download", "Oscar-Rico-CV.pdf");
      cvLink.removeAttribute("aria-disabled");
      cvLink.removeAttribute("title");
      if (cvNote) {
        cvNote.hidden = true;
      }
      return;
    }
    cvLink.setAttribute("href", "#contacto");
    cvLink.removeAttribute("download");
    cvLink.setAttribute("aria-disabled", "true");
    cvLink.setAttribute("title", dict["cv.pendingTitle"]);
    if (cvNote) {
      cvNote.hidden = false;
    }
  }

  function applyLang(lang, persist) {
    if (SUPPORTED.indexOf(lang) === -1) {
      lang = "es";
    }

    currentLang = lang;
    var dict = translations[lang] || translations.es;
    html.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (dict[key] != null) {
        element.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria");
      if (dict[key] != null) {
        element.setAttribute("aria-label", dict[key]);
      }
    });

    document.title = dict["meta.title"];
    setMeta('meta[name="description"]', dict["meta.description"]);
    setMeta('meta[property="og:title"]', dict["meta.title"]);
    setMeta('meta[property="og:description"]', dict["meta.description"]);
    setMeta('meta[name="twitter:title"]', dict["meta.title"]);
    setMeta('meta[name="twitter:description"]', dict["meta.description"]);
    setMeta('meta[property="og:locale"]', LOCALES[lang]);
    var alternateLocales = SUPPORTED.filter(function (code) {
      return code !== lang;
    });
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(function (element, index) {
      if (alternateLocales[index]) {
        element.setAttribute("content", LOCALES[alternateLocales[index]]);
      }
    });

    langButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });

    updateNavToggleLabel();
    updateCvState();

    if (persist !== false) {
      storeLang(lang);
    }
  }

  function showToast(message) {
    if (!toast) {
      return;
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3600);
  }

  function checkCv() {
    if (!cvLink || !cvSrc) {
      return;
    }
    fetch(cvSrc, { method: "HEAD", cache: "no-store" })
      .then(function (response) {
        cvAvailable = response.ok;
        updateCvState();
      })
      .catch(function () {
        cvAvailable = false;
        updateCvState();
      });
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLang(button.getAttribute("data-lang"));
    });
  });

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
      updateNavToggleLabel(open);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
        updateNavToggleLabel(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
        updateNavToggleLabel(false);
        navToggle.focus();
      }
    });

    var desktopMedia = window.matchMedia("(min-width: 761px)");
    var handleDesktop = function (event) {
      if (event.matches) {
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
        updateNavToggleLabel(false);
      }
    };
    if (desktopMedia.addEventListener) {
      desktopMedia.addEventListener("change", handleDesktop);
    } else if (desktopMedia.addListener) {
      desktopMedia.addListener(handleDesktop);
    }
  }

  if (cvLink) {
    cvLink.addEventListener("click", function (event) {
      if (cvLink.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        var dict = translations[currentLang] || translations.es;
        showToast(dict["toast.cv"]);
      }
    });
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var linkById = {};
  navLinks.forEach(function (link) {
    linkById[link.getAttribute("href").slice(1)] = link;
  });

  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          navLinks.forEach(function (link) {
            link.classList.remove("is-active");
            link.removeAttribute("aria-current");
          });
          var active = linkById[entry.target.id];
          if (active) {
            active.classList.add("is-active");
            active.setAttribute("aria-current", "location");
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  var revealElements = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && revealElements.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  applyLang(detectedLang(), false);
  checkCv();
})();