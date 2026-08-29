/**
 * vanilla-core.js — replaces all React/Remix-driven interactivity that is
 * shared across every page: theme toggle, mobile menu, scroll-reveal,
 * decoder-text letter-scramble, blur-up image loading, and the resume/uses
 * parallax background. Loaded on all 5 pages as a type="module" script so
 * it can share spring.js with hero-sphere.js / model-viewer.js.
 */
import { createSpring } from "./spring.js";
import { renderNavbar } from "./navbar.js";

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Applied synchronously here (not inside DOMContentLoaded) so the saved
// theme is on <body> before any other module-script effect — e.g.
// hero-sphere.js — reads it. That script runs immediately at module
// evaluation time (readyState is already past "loading" for a deferred
// module), which is before a DOMContentLoaded-wrapped theme init would
// otherwise have run, causing a one-load-in-a-while flash of the wrong
// theme in effects that read data-theme at startup.
(function applySavedTheme() {
  var saved = localStorage.getItem("theme-override");
  if (saved === "light" || saved === "dark") {
    document.body.setAttribute("data-theme", saved);
  }
})();

/* ---------- 1. Theme toggle ---------- */
function initTheme() {
  document.addEventListener(
    "click",
    function (e) {
      var btn = e.target.closest('button[aria-label="Toggle theme"]');
      if (!btn) return;
      e.preventDefault();

      var current = document.body.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", next);
      localStorage.setItem("theme-override", next);
      document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
    },
    true
  );
}

/* ---------- 2. Mobile menu toggle ---------- */
function initMobileMenu() {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest('button[aria-label="Menu"]');
    if (!btn) return;

    var expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));

    btn.querySelectorAll("[data-menu], [data-close]").forEach(function (icon) {
      icon.setAttribute("data-open", String(!expanded));
    });

    var mobileNav = document.querySelector(".navbar__mobile-nav");
    if (mobileNav) {
      mobileNav.setAttribute("data-visible", String(!expanded));
      mobileNav.querySelectorAll(".navbar__mobile-nav-link").forEach(function (link) {
        link.setAttribute("data-visible", String(!expanded));
      });
    }
  });

  document.addEventListener("click", function (e) {
    var link = e.target.closest(".navbar__mobile-nav-link");
    if (!link) return;

    var btn = document.querySelector('button[aria-label="Menu"]');
    if (btn && btn.getAttribute("aria-expanded") === "true") btn.click();
  });
}

/* ---------- 3. Decoder-text letter-scramble effect ---------- */
var GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>/\\?".split("");

function randomGlyph() {
  return GLYPHS[(Math.random() * GLYPHS.length) | 0];
}

function decodeText(el, finalText, delayMs) {
  if (el.dataset.decoderStarted === "true") return;
  el.dataset.decoderStarted = "true";

  var target = el.querySelector('[aria-hidden="true"]');
  if (!target) return;

  if (prefersReducedMotion) {
    target.textContent = finalText;
    return;
  }

  var chars = finalText.split("");
  var prevGlyphs = chars.map(function (c) {
    return /\s/.test(c) ? c : randomGlyph();
  });

  function render(progress) {
    target.innerHTML = "";
    var frag = document.createDocumentFragment();
    for (var i = 0; i < chars.length; i++) {
      var ch = chars[i];
      var span = document.createElement("span");
      if (/\s/.test(ch) || i < progress) {
        span.className = "decoder-text__value";
        span.textContent = ch;
      } else {
        var glyph = progress % 1 < 0.5 ? randomGlyph() : prevGlyphs[i];
        prevGlyphs[i] = glyph;
        span.className = "decoder-text__glyph";
        span.textContent = glyph;
      }
      frag.appendChild(span);
    }
    target.appendChild(frag);
  }

  render(0);

  setTimeout(function () {
    var spring = createSpring(0, {
      stiffness: 8,
      damping: 5,
      onUpdate: function (value) {
        render(Math.min(value, chars.length));
      }
    });
    spring.set(chars.length);
  }, delayMs || 0);
}

function initDecoderText() {
  var texts = document.querySelectorAll(".decoder-text");
  texts.forEach(function (el) {
    var hidden = el.querySelector(".visually-hidden");
    if (!hidden) return;
    var finalText = hidden.textContent;

    var gate = el.closest('[data-visible="false"], [data-status="exited"]');
    if (gate) {
      // Deferred: the scroll-reveal observer below will call decodeText()
      // once `gate` is actually revealed.
      el.__decoderFinalText = finalText;
      return;
    }

    var isContactForm = !!el.closest(".contact-page__form");
    decodeText(el, finalText, isContactForm ? 300 : 500);
  });
}

/* ---------- 4. Scroll-reveal animations ---------- */
function initScrollReveal() {
  var targets = document.querySelectorAll(
    '[data-visible="false"], [data-status="exited"], [data-collapsed="true"]'
  );

  function reveal(el) {
    if (el.hasAttribute("data-visible")) el.setAttribute("data-visible", "true");
    if (el.getAttribute("data-status") === "exited") el.setAttribute("data-status", "entered");
    if (el.hasAttribute("data-collapsed")) el.setAttribute("data-collapsed", "false");

    el.querySelectorAll(".decoder-text").forEach(function (textEl) {
      if (textEl.__decoderFinalText) {
        decodeText(textEl, textEl.__decoderFinalText, 100);
      }
    });
  }

  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach(reveal);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
}

/* ---------- 5. Smooth scroll for in-page nav links ---------- */
function initSmoothScroll() {
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="/#"], a[href^="#"]');
    if (!link) return;

    var hash = link.getAttribute("href").split("#")[1];
    var target = hash && document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", "#" + hash);
  });
}

/* ---------- 6. Blur-up image loading ---------- */
function initImageReveal() {
  document.querySelectorAll(".image__element").forEach(function (img) {
    var placeholder = img.parentElement
      ? img.parentElement.querySelector(".image__placeholder")
      : null;

    function markLoaded() {
      img.setAttribute("data-loaded", "true");
      if (placeholder) placeholder.setAttribute("data-loaded", "true");
    }

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener("load", markLoaded, { once: true });
    }
  });
}

/* ---------- 7. Resume / Uses hero parallax ---------- */
function initParallax() {
  if (prefersReducedMotion) return;

  var elements = document.querySelectorAll(".page-hero__background-image-element");
  if (elements.length === 0) return;

  var scheduled = false;

  function tick() {
    scheduled = false;
    var innerHeight = window.innerHeight;
    var raw = Math.max(0, window.scrollY) * 0.6;
    var clamped = Math.max(-innerHeight, Math.min(innerHeight, raw));
    elements.forEach(function (el) {
      el.style.setProperty("--offset", clamped + "px");
    });
  }

  function onScroll() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(tick);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  tick();
}

/* ---------- 8. Hero scroll indicator ---------- */
function initScrollIndicator() {
  var hero = document.getElementById("intro");
  var indicators = document.querySelectorAll(
    ".hero__scroll-indicator, .hero__mobile-scroll-indicator"
  );
  if (!hero || indicators.length === 0 || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      var hidden = !entries[0].isIntersecting;
      indicators.forEach(function (el) {
        el.setAttribute("data-hidden", String(hidden));
      });
    },
    { rootMargin: "-100% 0px 0px 0px" }
  );
  observer.observe(hero);
}

document.addEventListener("DOMContentLoaded", function () {
  renderNavbar();
  initTheme();
  initMobileMenu();
  initDecoderText();
  initScrollReveal();
  initSmoothScroll();
  initImageReveal();
  initParallax();
  initScrollIndicator();
});
