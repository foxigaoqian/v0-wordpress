# Mewepak FSE — WordPress Block Theme

A production-oriented **block theme (Full Site Editing)** for **Mewepak**, a B2B flexible-packaging
manufacturer. Catalog + lead-generation focused, export-oriented, premium/industrial aesthetic.
Built on WordPress **core blocks**, `theme.json`, `templates/`, `parts/` and `patterns/` — no page
builder, no React runtime, no Framer Motion.

- **Accent:** `#00cfca` · **Dark:** deep navy `#0a1628`
- **Type:** Inter (variable), large bold headlines, readable body
- **Style:** premium industrial, minimal-but-rich, large rounded cards, strong CTAs

---

## 1. File tree

```
mewepak-fse/
├── style.css                      # Theme header (metadata) — styling lives in theme.json
├── theme.json                     # Palette, type, spacing, layout widths, button styles, shadows
├── functions.php                  # Enqueue custom.css + main.js, register pattern categories
├── README.md
├── assets/
│   ├── css/
│   │   └── custom.css             # Minimal CSS: mega-menu hover, card lift, FAQ, scroll-reveal
│   ├── js/
│   │   └── main.js                # Progressive enhancement: mobile nav, sticky shadow, reveal
│   └── fonts/
│       └── inter-variable.woff2   # (add the font file here — referenced by theme.json)
├── parts/
│   ├── header.html                # Utility bar + logo + Navigation (full IA) + Quote CTA
│   └── footer.html                # Teal footer: 4 link columns + contact + bottom bar
├── templates/
│   ├── front-page.html            # Homepage (composed entirely from patterns)
│   ├── index.html                 # Blog archive fallback
│   ├── archive.html               # Category / tag archives
│   ├── search.html                # Search results
│   ├── single.html                # Blog single + sticky quote sidebar + related
│   ├── page.html                  # Default page
│   ├── page-products.html         # Products archive (custom template)
│   ├── page-markets.html          # Markets archive (custom template)
│   ├── page-solutions.html        # Solutions overview (custom template)
│   ├── page-contact.html          # Rich contact page (custom template)
│   ├── page-detail.html           # Reusable detail page: product/market/solution
│   ├── page-full.html             # Full-bleed page, no container
│   └── 404.html
└── patterns/
    ├── section-heading.php        # Eyebrow + title + intro
    ├── hero.php                   # Split hero (copy + image)
    ├── trust-stats.php            # 4-up stat row on navy
    ├── logo-cloud.php             # "Trusted by" logo row
    ├── cta-quote.php              # Accent CTA band — request a quote
    ├── consultation-booking.php   # Book-a-consultation split
    ├── quote-form.php             # Lead form area (drop in a form-plugin shortcode)
    ├── newsletter.php             # Newsletter signup band
    ├── contact-methods.php        # WhatsApp / phone / email cards
    ├── card-grid.php              # Category cards (products / markets)
    ├── process-steps.php          # Numbered industrial process
    ├── sustainability-teaser.php  # Sustainability split + CTA
    ├── testimonials.php           # 3 customer quotes
    ├── faq-accordion.php          # Native <details> FAQ (no JS)
    └── blog-cards.php             # Query Loop, latest 3 posts
```

## 2. Page → template mapping

| Site page | How to build it in WP |
|---|---|
| **Home** | A static front page using `front-page.html` |
| **Products** archive | Page using template **Products Archive** (`page-products`) |
| **Markets** archive | Page using template **Markets Archive** (`page-markets`) |
| **Solutions** overview | Page using template **Solutions Overview** (`page-solutions`) |
| **Single product / market / solution** | Child pages using template **Detail Page** (`page-detail`) |
| **Contact** | Page using template **Contact** (`page-contact`) |
| **Added Value, Sustainability, About, Help, Careers, FAQ** | Standard pages (`page.html`) or **Full Width** (`page-full`), composed from patterns |
| **Blog archive** | Posts page → `index.html` |
| **Blog single** | `single.html` |

> The full navigation IA (Products / Markets / Solutions / Added Value / Sustainability / About) is
> already authored in `parts/header.html` as a core **Navigation** block with submenus, fully editable
> in **Appearance → Editor → Patterns / Template Parts**.

## 3. theme.json highlights

- **Color palette:** `accent`, `accent-dark`, `navy`, `navy-soft`, `slate`, `muted`, `line`,
  `surface`, `surface-2`, `base`, `contrast` (defaults disabled — only brand colors appear).
- **Typography:** single Inter variable family, fluid font sizes from `small` → `display` (5rem).
- **Spacing:** named scale `20`→`80` used everywhere via `var:preset|spacing|XX`.
- **Layout:** `contentSize 768px`, `wideSize 1280px`, root-padding-aware alignments.
- **Buttons:** pill radius, accent fill, plus an `outline` variation (navy border).
- **Shadows:** `card`, `lift`, `accent` presets for the rounded-card system.

## 4. Reusable patterns (inserter categories)

Grouped under **Mewepak: Sections / CTA & Lead Gen / Cards & Grids / Trust & Proof**:

`section-heading`, `hero`, `trust-stats`, `logo-cloud`, `cta-quote`, `consultation-booking`,
`quote-form`, `newsletter`, `contact-methods`, `card-grid`, `process-steps`,
`sustainability-teaser`, `testimonials`, `faq-accordion`, `blog-cards`.

Templates reference them with `<!-- wp:pattern {"slug":"mewepak/..."} /-->`, so editing a pattern
updates every page that uses it.

## 5. WordPress-friendly simplifications

These are deliberate swaps from a React/Framer-Motion design to keep it portable and maintainable:

| React effect | Block-theme replacement |
|---|---|
| Framer-Motion `whileInView` reveals | `.mewepak-reveal` + IntersectionObserver in `main.js` (visible by default if JS is off) |
| JS animated mega-menu panels | Core Navigation submenus + CSS `:hover/:focus-within` panels in `custom.css` |
| Animated accordion components | Native `<details>/<summary>` (`faq-accordion`) — accessible, zero JS |
| Floating/parallax hero pouches | Static split hero (`hero.php`); optional `data-hero-slider` hook exists in `main.js` |
| Stateful contact / quote form | `quote-form` placeholder — **replace with a form plugin shortcode** (CF7 / WPForms / Fluent Forms) |
| Newsletter logic | `newsletter` placeholder — drop in Mailchimp / MailPoet shortcode |
| Interactive map | Map placeholder in `page-contact.html` — replace with a Google Maps iframe embed |

**Use custom CSS for:** card hover-lift, image cover-crop ratios, FAQ marker, mega-menu panels,
scroll-reveal, sticky-header shadow. **Everything else lives in `theme.json`.**

**Defer to later enhancement:** product filtering/search, a real CPT for products (currently pages),
form processing, multilingual (WPML/Polylang), and a mega-menu plugin if visual mega panels are
required beyond the CSS version.

## 6. Install

1. Zip the `mewepak-fse/` folder (or copy it to `wp-content/themes/mewepak-fse`).
2. Add a real `inter-variable.woff2` to `assets/fonts/` (or remove the `fontFace` block in
   `theme.json` to load Inter from Google Fonts instead).
3. **Appearance → Themes → Activate** "Mewepak FSE". Requires WordPress 6.5+.
4. **Settings → Reading:** set a static homepage and a Posts page.
5. **Appearance → Editor:** assign the custom templates to your Products/Markets/Solutions/Contact
   pages, then compose remaining pages with the Mewepak patterns.
6. Install a form plugin and replace the `quote-form` / `newsletter` placeholders with shortcodes.
```
```
