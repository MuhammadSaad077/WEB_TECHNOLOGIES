# Web Technologies – Lab Mid Term (FA26 BCS B)

**Name:** <MUHAMMAD SAAD LODHI>
**Roll number:** <FA24-BCS-077>

## My personal numbers

| Value | Formula | Result |
|---|---|---|
| N | last two digits of roll number | **4** |
| BP | 600 + N | **604 px** |
| H | (N × 7) mod 360 | **28** → accent colour `hsl(28, 70%, 45%)` |
| K | (N mod 3) + 3 | **4** mega-menu columns |
| Cart limit | (N mod 4) + 2 | **2** copies per product |
| Exam date / delivery range | exam date, +N days | **2026-10-29** to **2026-11-02** |

## Files changed

| File | Status |
|---|---|
| `index.html` | changed (new header, cart badge and mini-cart markup, script link) |
| `product.html` | changed (new header only) |
| `checkout.html` | **new** |
| `style.css` | changed (Task 1, Task 2 and Task 3 blocks added at the end) |
| `script.js` | **new** |

## Task 1 – Mega-menu

- Added a "Shop by Category" item to the navbar with a full-width panel of 4 columns (one heading and 5 links per column). The panel is `position: absolute; top: 100%` under the navbar, so it does not push the page down, and it sits inside the sticky header so it stays above the product grid and card hover effects.
- It opens with `:hover` and `:focus-within` (works with Tab alone) and an invisible `::before` strip keeps it open while the pointer moves into the panel. No JavaScript was used.
- Below 604px the same 4 groups appear inside the hamburger menu as `<details>` / `<summary>` accordions, closed by default and independent of each other. I also made the navbar expand at 604px instead of Bootstrap's 992px so the mega-menu appears at BP.

## Task 2 – Checkout form

- Created `checkout.html`, linked from the cart icon, with two fieldsets ("Contact" and "Delivery"), every input joined to a label with `for`/`id`.
- Validation uses only HTML5 attributes: `required`, `type="email"`, `pattern="03[0-9]{2}-[0-9]{7}"` for the phone, and `min`/`max` on the date (2026-10-29 to 2026-11-02). Red borders and messages use `:user-invalid`, so nothing is red on page load.
- CSS Grid puts the two fieldsets side by side from 604px with labels in a left column; below 604px everything is one column with labels above the inputs. The submit button is full width at every size.

## Task 3 – JavaScript cart

- `script.js` keeps the cart in an array. "Add to Cart" reads the name and price from the card itself, pushes the item, and updates the badge on the cart icon.
- Clicking the cart icon toggles a mini-cart panel (list with a Remove button per item, total calculated with `reduce()`). Remove uses `filter()` and re-renders the list, total and badge immediately.
- Each product can be added at most 2 times; after that its button shows "Limit reached" and is disabled until one copy is removed. The icon still links to `checkout.html`, but on the listing page JavaScript prevents the navigation and opens the panel; the panel has a "Go to checkout" link.

## AI tools used

- Claude (Anthropic)