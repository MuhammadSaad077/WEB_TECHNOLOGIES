# Assignment 2 — BrickShop (Static, Responsive Pages)

**Name:** Your Name · **Course:** Your Course

## Reference site
- **Name:** LEGO Official Online Shop
- **URL:** https://www.lego.com/en-nl
- **Screenshot:** [LEGO reference](images/reference-screenshot.png)

## What I built
- `index.html` – header (logo, Bootstrap navbar, cart icon), hero, responsive grid of 8 product cards, footer
- `product.html` – product detail page (large image, name, price, description, quantity selector, Add to Cart), same header/footer
- `style.css` – custom styling and media queries

## Tech
- **Bootstrap 5.3** (CDN): navbar (collapses to hamburger on phones), grid (`row`, `col-*`, `row-cols-*`), cards, buttons, breadcrumb
- **Flexbox** utilities for alignment; **media queries** for custom tweaks at 576px, 768px, 992px
- No JavaScript written (only Bootstrap's bundle for the navbar toggle). Buttons are non-functional placeholders.

## Responsive behaviour
| Width | Product grid | Navbar |
|-------|--------------|--------|
| ~375px (phone) | 1 column | hamburger menu |
| ~768px (tablet) | 2 columns | hamburger menu |
| 992px+ (desktop) | 4 columns | full horizontal nav |

## Run
Open `index.html` in a browser (internet needed for Bootstrap CDN).