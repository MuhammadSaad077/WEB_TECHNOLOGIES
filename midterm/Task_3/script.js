/* =====================================================================
   TASK 3 - Cart badge + mini cart   (plain JavaScript, no libraries)
   N = 4  ->  max copies of one product = (4 mod 4) + 2 = 2
   ===================================================================== */

const MAX_PER_PRODUCT = 2;          // (N mod 4) + 2  -> change this if N changes

// ---- State: the cart is just an array of objects ----
let cart = [];                      // each item: { uid, name, price }
let nextUid = 1;                    // unique id so we can remove ONE specific row

// ---- DOM references (found once, reused) ----
const cartToggle = document.getElementById('cartToggle');   // the bag icon (link)
const miniCart   = document.getElementById('miniCart');     // the panel
const cartList   = document.getElementById('cartList');     // <ul> inside the panel
const cartTotal  = document.getElementById('cartTotal');    // total price text
const cartBadge  = document.getElementById('cartBadge');    // number on the icon
const addButtons = document.querySelectorAll('.product-card .btn-lego');

// ---- Helpers ----
function formatPrice(number) {
  return '€' + number.toFixed(2);
}

// Reads name and price from the card the button belongs to
function readProduct(button) {
  const card  = button.closest('.product-card');
  const name  = card.querySelector('.card-title').textContent.trim();
  const price = parseFloat(card.querySelector('.price').textContent.replace('€', ''));
  return { name, price };
}

function countOf(name) {
  return cart.filter(item => item.name === name).length;
}

// ---- Render everything from the cart array ----
function render() {
  // 1) badge
  cartBadge.textContent = cart.length;

  // 2) list
  cartList.innerHTML = '';
  if (cart.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'mini-cart-empty';
    empty.textContent = 'Your cart is empty.';
    cartList.appendChild(empty);
  } else {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'mini-cart-item';

      const info = document.createElement('span');
      info.className = 'mini-cart-info';
      info.textContent = item.name + ' – ' + formatPrice(item.price);

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'btn btn-sm btn-outline-dark remove-btn';
      remove.textContent = 'Remove';
      remove.dataset.uid = item.uid;

      li.appendChild(info);
      li.appendChild(remove);
      cartList.appendChild(li);
    });
  }

  // 3) total using reduce()
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = formatPrice(total);

  // 4) buttons: disable when the limit is reached
  addButtons.forEach(button => {
    const { name } = readProduct(button);
    const limitReached = countOf(name) >= MAX_PER_PRODUCT;
    button.disabled = limitReached;
    button.textContent = limitReached ? 'Limit reached' : 'Add to Cart';
  });
}

// ---- Events ----

// Add to Cart (one listener per button)
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = readProduct(button);
    if (countOf(product.name) >= MAX_PER_PRODUCT) return;   // safety check
    cart.push({ uid: nextUid++, name: product.name, price: product.price });
    render();
  });
});

// Remove (event delegation: ONE listener on the list handles all Remove buttons)
cartList.addEventListener('click', event => {
  const removeButton = event.target.closest('.remove-btn');
  if (!removeButton) return;
  const uid = Number(removeButton.dataset.uid);
  cart = cart.filter(item => item.uid !== uid);
  render();
});

// Cart icon opens / closes the mini cart (and stops the link from navigating)
cartToggle.addEventListener('click', event => {
  event.preventDefault();
  const isOpen = !miniCart.hidden;
  miniCart.hidden = isOpen;
  cartToggle.setAttribute('aria-expanded', String(!isOpen));
});

render();   // first draw: badge 0, empty message, buttons enabled