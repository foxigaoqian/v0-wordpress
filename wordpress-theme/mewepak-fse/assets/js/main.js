/**
 * Mewepak FSE — progressive enhancement.
 * No framework. Everything degrades gracefully if JS is off:
 *  - mega menus also work on CSS :hover / :focus-within
 *  - FAQ uses native <details>
 *  - reveal elements are visible by default if JS never runs
 */
(function () {
  "use strict";

  /* Sticky header shadow on scroll */
  var header = document.querySelector(".mewepak-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile nav toggle */
  var toggle = document.querySelector(".mewepak-mobile-toggle");
  var panel = document.querySelector(".mewepak-mobile-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    /* Collapsible groups inside the mobile panel */
    panel.querySelectorAll("[data-mobile-group]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sub = btn.nextElementSibling;
        if (sub) {
          sub.classList.toggle("is-open");
          btn.classList.toggle("is-open");
        }
      });
    });
  }

  /* Scroll-reveal (IntersectionObserver replaces Framer Motion) */
  var reveals = document.querySelectorAll(".mewepak-reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Optional hero slider: data-hero-slider with [data-slide] children */
  var slider = document.querySelector("[data-hero-slider]");
  if (slider) {
    var slides = slider.querySelectorAll("[data-slide]");
    var dots = slider.querySelectorAll("[data-dot]");
    var i = 0;
    var show = function (n) {
      slides.forEach(function (s, idx) {
        s.style.opacity = idx === n ? "1" : "0";
        s.style.zIndex = idx === n ? "2" : "1";
      });
      dots.forEach(function (d, idx) {
        d.classList.toggle("is-active", idx === n);
      });
      i = n;
    };
    if (slides.length > 1) {
      show(0);
      dots.forEach(function (d, idx) {
        d.addEventListener("click", function () {
          show(idx);
        });
      });
      setInterval(function () {
        show((i + 1) % slides.length);
      }, 6000);
    }
  }
})();
