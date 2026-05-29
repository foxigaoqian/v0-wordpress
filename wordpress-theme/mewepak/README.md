# Mewepak WordPress Theme (Skeleton)

A WordPress theme skeleton ported from the Next.js Mewepak site. It reproduces
the visual design with Tailwind CSS, the brand teal (`#00cfca`) and navy
(`#0a1628`), the Inter font, the mega-menu navigation (including the top contact
utility bar) and a homepage with a working hero carousel.

## File structure

```
mewepak/
├── style.css          Theme metadata + WordPress core / rich-text styles + scroll-reveal
├── functions.php      Theme setup, asset loading, nav + footer data, contact details
├── header.php         Utility bar (contact info), logo, mega-menu nav, mobile menu
├── footer.php         Teal footer with link columns, locations, social, copyright
├── front-page.php     Homepage: hero carousel + explore-by-market + sustainability CTA + latest posts
├── page.php           Generic page template
├── single.php         Blog post with "Get a Quote" sidebar
├── index.php          Blog / archive listing (fallback)
└── assets/js/main.js  Mobile menu, mega-menu, hero carousel, scroll reveal
```

## Install

1. Zip the `mewepak` folder (the zip must contain `style.css` at its root).
2. In WordPress admin: **Appearance → Themes → Add New → Upload Theme**, choose the zip, **Install** then **Activate**.
   - Or copy the `mewepak` folder into `wp-content/themes/` via FTP/SSH.
3. **Settings → Reading → Your homepage displays → A static page** and pick a page,
   OR leave on "Latest posts" — `front-page.php` is used automatically when a
   static front page is set; otherwise `index.php` shows the blog.
4. **Settings → Permalinks → Post name** (so the `/products/...`, `/blog/...` URLs resolve).

## Editing content

- **Contact info** (top bar tagline, WhatsApp / Call / Email): edit `mewepak_contact()` in `functions.php`.
- **Navigation + mega menus**: edit `mewepak_nav_items()` in `functions.php`.
- **Footer columns / locations**: edit `mewepak_footer_links()` in `functions.php` and the arrays at the top of `footer.php`.
- **Logo**: upload via **Appearance → Customize → Site Identity → Logo** (falls back to the built-in SVG mark).
- **Blog posts** appear automatically on the homepage "From the Blog" section and the `/blog` archive.

## IMPORTANT — Tailwind in production

This skeleton loads Tailwind from the **Play CDN** (`cdn.tailwindcss.com`) so it
works with zero build step. The CDN is great for prototyping but **not
recommended for production** (large download, no purging, shows a console
warning). For a real site, compile Tailwind to a static file:

1. Install Node + Tailwind locally: `npm install -D tailwindcss`
2. Create `tailwind.config.js` scanning the theme PHP:
   ```js
   module.exports = {
     content: ['./**/*.php', './assets/js/**/*.js'],
     theme: { extend: { colors: { brand: { DEFAULT: '#00cfca', dark: '#00b8b3', navy: '#0a1628' } } } },
   }
   ```
3. Build: `npx tailwindcss -i ./assets/css/input.css -o ./assets/css/tailwind.css --minify`
4. In `functions.php`, replace the `mewepak-tailwind-cdn` enqueue with:
   ```php
   wp_enqueue_style( 'mewepak-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), MEWEPAK_VERSION );
   ```
   and remove `mewepak_tailwind_config()` (move the color/font config into `tailwind.config.js`).

## What was ported vs. simplified

- **Faithfully ported**: header utility bar, full mega-menu nav + mobile menu, footer, hero carousel (auto-play, prev/next, dots, progress bar).
- **Simplified placeholders** (good starting points to flesh out): the hero's animated floating pouches are shown as a single product graphic; the homepage product showcase / testimonials / visualize sections from the React app are not all reproduced — add them as you migrate real content, ideally backed by Custom Post Types + ACF.
- **Animations**: Framer Motion scroll animations are replaced by CSS `[data-reveal]` + IntersectionObserver in `main.js`.

## Suggested next steps

- Register a **Product** custom post type (and **Market** taxonomy) so Products/Markets pages are editable in wp-admin.
- Use **ACF** for the hero slides and featured blocks instead of the PHP arrays.
- Add a real contact form plugin (Contact Form 7 / WPForms / Fluent Forms) and point the quote forms at it.
