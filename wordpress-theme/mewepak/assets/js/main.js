/**
 * Mewepak theme interactions.
 * Replaces the React/Framer-Motion behaviour with vanilla JS:
 *  - Desktop mega-menu hover/focus
 *  - Mobile menu toggle + accordions
 *  - Hero carousel (auto-play, prev/next, dots, progress bar)
 *  - Scroll-reveal animations (IntersectionObserver)
 */
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {
		initMegaMenu();
		initMobileMenu();
		initHeroCarousel();
		initScrollReveal();
	});

	/* ---------- Desktop mega menu ---------- */
	function initMegaMenu() {
		var items = document.querySelectorAll('[data-nav-item]');
		items.forEach(function (item) {
			var panel = item.querySelector('[data-mega-panel]');
			if (!panel) return;

			var open = function () {
				panel.classList.remove('invisible', 'opacity-0');
				panel.classList.add('visible', 'opacity-100');
			};
			var close = function () {
				panel.classList.add('invisible', 'opacity-0');
				panel.classList.remove('visible', 'opacity-100');
			};

			item.addEventListener('mouseenter', open);
			item.addEventListener('mouseleave', close);
			item.addEventListener('focusin', open);
			item.addEventListener('focusout', function (e) {
				if (!item.contains(e.relatedTarget)) close();
			});
		});
	}

	/* ---------- Mobile menu ---------- */
	function initMobileMenu() {
		var toggle = document.querySelector('[data-mobile-toggle]');
		var panel = document.querySelector('[data-mobile-panel]');
		if (!toggle || !panel) return;

		var iconOpen = toggle.querySelector('[data-icon-open]');
		var iconClose = toggle.querySelector('[data-icon-close]');

		toggle.addEventListener('click', function () {
			var isHidden = panel.classList.toggle('hidden');
			toggle.setAttribute('aria-expanded', String(!isHidden));
			if (iconOpen && iconClose) {
				iconOpen.classList.toggle('hidden', !isHidden);
				iconClose.classList.toggle('hidden', isHidden);
			}
		});

		// Accordions inside mobile menu.
		panel.querySelectorAll('[data-acc-toggle]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var accPanel = btn.parentElement.querySelector('[data-acc-panel]');
				var icon = btn.querySelector('[data-acc-icon]');
				if (accPanel) accPanel.classList.toggle('hidden');
				if (icon) icon.classList.toggle('rotate-180');
			});
		});
	}

	/* ---------- Hero carousel ---------- */
	function initHeroCarousel() {
		var root = document.querySelector('[data-hero]');
		if (!root) return;

		var slides = root.querySelectorAll('[data-hero-slide]');
		var dots = root.querySelectorAll('[data-hero-dot]');
		var prev = root.querySelector('[data-hero-prev]');
		var next = root.querySelector('[data-hero-next]');
		var bar = root.querySelector('[data-hero-progress]');
		if (slides.length === 0) return;

		var current = 0;
		var timer = null;
		var DURATION = 5000;

		function show(index) {
			current = (index + slides.length) % slides.length;
			slides.forEach(function (s, i) {
				var active = i === current;
				s.classList.toggle('opacity-0', !active);
				s.classList.toggle('opacity-100', active);
				s.classList.toggle('pointer-events-none', !active);
				s.classList.toggle('z-10', active);
			});
			dots.forEach(function (d, i) {
				var active = i === current;
				d.classList.toggle('w-8', active);
				d.classList.toggle('bg-brand', active);
				d.classList.toggle('w-2', !active);
				d.classList.toggle('bg-gray-300', !active);
			});
			restartProgress();
		}

		function restartProgress() {
			if (!bar) return;
			bar.style.transition = 'none';
			bar.style.width = '0%';
			// force reflow
			void bar.offsetWidth;
			bar.style.transition = 'width ' + DURATION + 'ms linear';
			bar.style.width = '100%';
		}

		function start() {
			stop();
			timer = setInterval(function () { show(current + 1); }, DURATION);
			restartProgress();
		}
		function stop() {
			if (timer) clearInterval(timer);
			timer = null;
		}

		if (prev) prev.addEventListener('click', function () { show(current - 1); start(); });
		if (next) next.addEventListener('click', function () { show(current + 1); start(); });
		dots.forEach(function (d, i) {
			d.addEventListener('click', function () { show(i); start(); });
		});

		root.addEventListener('mouseenter', stop);
		root.addEventListener('mouseleave', start);

		show(0);
		start();
	}

	/* ---------- Scroll reveal ---------- */
	function initScrollReveal() {
		var els = document.querySelectorAll('[data-reveal]');
		if (!('IntersectionObserver' in window) || els.length === 0) {
			els.forEach(function (el) { el.classList.add('is-visible'); });
			return;
		}
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		els.forEach(function (el) { io.observe(el); });
	}
})();
