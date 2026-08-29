/**
 * navbar.js 
 */
import { monogramSVG } from "./monogram.js";

var NAV_LINKS = [
  { href: "/#project-1", label: "Projects" },
  { href: "/#details", label: "Details" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

function isActive(pathname, href) {
  if (href.indexOf("#") !== -1) return false;
  return pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
}

function navbarMarkup() {
  var pathname = window.location.pathname;
  var logoHref = pathname === "/" ? "/#intro" : "/";

  var linksHtml = NAV_LINKS.map(function (link) {
    var current = isActive(pathname, link.href) ? "page" : "";
    return (
      '<a data-navbar-item="true" class="navbar__link" aria-current="' + current + '" ' +
      'data-discover="true" href="' + link.href + '">' + link.label + "</a>"
    );
  }).join("");

  var mobileLinksHtml = NAV_LINKS.map(function (link, i) {
    var current = isActive(pathname, link.href) ? "page" : "";
    return (
      '<a data-navbar-item="true" class="navbar__mobile-nav-link" aria-current="' + current + '" ' +
      'data-discover="true" style="--transitionDelay: ' + i * 40 + 'ms" href="' + link.href + '">' + link.label + "</a>"
    );
  }).join("");

  return (
    '<a data-navbar-item="true" class="navbar__logo" aria-label="Shaima Alsharif, Full-Stack Developer" data-discover="true" href="' + logoHref + '">' +
      monogramSVG(100, "logo-monogram-clip") +
    "</a>" +
    '<button class="button menu-toggle" data-icon-only="true" aria-label="Menu" aria-expanded="false">' +
      '<span class="button__text">' +
        '<div class="menu-toggle__inner">' +
          '<svg aria-hidden="true" class="icon menu-toggle__icon" width="24" height="24" data-menu="true" data-open="false">' +
            '<use href="/assets/images/icons-placeholder.svg#menu"></use>' +
          "</svg>" +
          '<svg aria-hidden="true" class="icon menu-toggle__icon" width="24" height="24" data-close="true" data-open="false">' +
            '<use href="/assets/images/icons-placeholder.svg#close"></use>' +
          "</svg>" +
        "</div>" +
      "</span>" +
    "</button>" +
    '<nav class="navbar__nav">' +
      '<div class="navbar__list">' + linksHtml + "</div>" +
      '<div class="navbar__icons">' +
        '<a data-navbar-item="true" class="navbar__icon-link" aria-label="LinkedIn" href="https://www.linkedin.com/in/shaima-alsharif/" target="_blank" rel="noopener noreferrer">' +
          '<svg aria-hidden="true" class="icon navbar__icon" width="24" height="24">' +
            '<use href="/assets/images/icons-placeholder.svg#linkedin"></use>' +
          "</svg>" +
        "</a>" +
        '<a data-navbar-item="true" class="navbar__icon-link" aria-label="Github" href="https://github.com/ShaimaManami" target="_blank" rel="noopener noreferrer">' +
          '<svg aria-hidden="true" class="icon navbar__icon" width="24" height="24">' +
            '<use href="/assets/images/icons-placeholder.svg#github"></use>' +
          "</svg>" +
        "</a>" +
        '<a data-navbar-item="true" class="navbar__icon-link" aria-label="Email" href="mailto:shaimaa.alshariif@gmail.com">' +
          '<svg aria-hidden="true" class="icon navbar__icon" width="24" height="24" viewBox="0 0 512 512" fill="currentColor">' +
            '<path d="m502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7v204.5c0 26.5-21.5 48-48 48h-416c-26.5 0-48-21.5-48-48v-204.4c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zm-246.3 129.2c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48h-416c-26.5 0-48 21.5-48 48v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>' +
          "</svg>" +
        "</a>" +
      "</div>" +
    "</nav>" +
    '<button class="button theme-toggle" data-icon-only="true" aria-label="Toggle theme" data-navbar-item="true">' +
      '<span class="button__text">' +
        '<svg aria-hidden="true" width="38" height="38" viewBox="0 0 38 38">' +
          "<defs>" +
            '<mask id="theme-toggle-mask">' +
              '<circle class="theme-toggle__circle" data-mask="true" cx="19" cy="19" r="13"></circle>' +
              '<circle class="theme-toggle__mask" cx="25" cy="14" r="9"></circle>' +
            "</mask>" +
          "</defs>" +
          '<path class="theme-toggle__path" d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"></path>' +
          '<circle class="theme-toggle__circle" mask="url(#theme-toggle-mask)" cx="19" cy="19" r="12"></circle>' +
        "</svg>" +
      "</span>" +
    "</button>" +
    '<div class="navbar__mobile-nav" data-visible="false">' +
      mobileLinksHtml +
      '<button class="button theme-toggle" data-icon-only="true" data-mobile="true" aria-label="Toggle theme" data-navbar-item="true">' +
        '<span class="button__text">' +
          '<svg aria-hidden="true" width="38" height="38" viewBox="0 0 38 38">' +
            "<defs>" +
              '<mask id="theme-toggle-mask-mobile">' +
                '<circle class="theme-toggle__circle" data-mask="true" cx="19" cy="19" r="13"></circle>' +
                '<circle class="theme-toggle__mask" cx="25" cy="14" r="9"></circle>' +
              "</mask>" +
            "</defs>" +
            '<path class="theme-toggle__path" d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"></path>' +
            '<circle class="theme-toggle__circle" mask="url(#theme-toggle-mask-mobile)" cx="19" cy="19" r="12"></circle>' +
          "</svg>" +
        "</span>" +
      "</button>" +
    "</div>"
  );
}

export function renderNavbar() {
  var root = document.getElementById("navbar-root");
  if (!root) return;
  root.innerHTML = navbarMarkup();
}
