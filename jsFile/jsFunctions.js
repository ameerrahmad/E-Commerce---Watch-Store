/* =========================================================
   ChronoLux — jsFunctions.js
   Global interactive utilities
========================================================= */

/* ---------------------------------------------------------
   1. MOBILE HAMBURGER TOGGLE
--------------------------------------------------------- */
function initHamburger() {
  const toggle = document.querySelector('.menu-toggle');
  const navUl  = document.querySelector('nav ul');
  if (!toggle || !navUl) return;

  toggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    const isOpen = navUl.classList.contains('open');
    if (spans[0]) spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    if (spans[1]) spans[1].style.opacity   = isOpen ? '0' : '1';
    if (spans[2]) spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navUl.contains(e.target)) {
      navUl.classList.remove('open');
    }
  });
}

/* ---------------------------------------------------------
   2. DARK MODE TOGGLE
--------------------------------------------------------- */
function initDarkMode() {
  const btn = document.getElementById('dark-mode-btn');
  const root = document.documentElement;

  // Load saved preference
  const saved = localStorage.getItem('chronolux-theme');
  if (saved) {
    root.setAttribute('data-theme', saved);
    if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
  }

  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    if (current === 'dark') {
      root.removeAttribute('data-theme');
      btn.textContent = '🌙';
      localStorage.setItem('chronolux-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      btn.textContent = '☀️';
      localStorage.setItem('chronolux-theme', 'dark');
    }
  });
}

/* ---------------------------------------------------------
   3. MOBILE DROPDOWN (click-based)
--------------------------------------------------------- */
function initMobileDropdowns() {
  document.querySelectorAll('nav .dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const menu = link.nextElementSibling;
        if (menu) menu.classList.toggle('open');
      }
    });
  });
}

/* ---------------------------------------------------------
   4. CART BADGE COUNTER
--------------------------------------------------------- */
function getCart() {
  try { return JSON.parse(localStorage.getItem('chronolux-cart')) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('chronolux-cart', JSON.stringify(cart));
}
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const cart  = getCart();
  const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}
function addToCart(id, name, price, image) {
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty = (existing.qty || 1) + 1; }
  else { cart.push({ id, name, price, image, qty: 1 }); }
  saveCart(cart);
  updateCartBadge();
  showToast(name + ' added to cart');
}
function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartBadge();
}
function clearCart() {
  localStorage.removeItem('chronolux-cart');
  updateCartBadge();
}

/* ---------------------------------------------------------
   5. TOAST NOTIFICATION
--------------------------------------------------------- */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.style.cssText = `
      position:fixed; bottom:28px; right:28px; z-index:9999;
      background:#C9A84C; color:#07090F;
      padding:12px 22px; border-radius:8px;
      font-size:0.88rem; font-weight:600; letter-spacing:0.05em;
      box-shadow:0 8px 24px rgba(0,0,0,0.4);
      opacity:0; transform:translateY(10px);
      transition:all 0.3s ease; pointer-events:none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3000);
}

/* ---------------------------------------------------------
   6. FORM VALIDATION
--------------------------------------------------------- */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;
  let valid = true;

  form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
    const err = field.parentElement.querySelector('.field-error');
    if (!field.value.trim()) {
      field.style.borderColor = '#E05555';
      if (err) err.style.display = 'block';
      valid = false;
    } else {
      field.style.borderColor = '';
      if (err) err.style.display = 'none';
    }
  });

  // Email check
  form.querySelectorAll('input[type="email"]').forEach(field => {
    if (field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      field.style.borderColor = '#E05555';
      valid = false;
      showToast('Please enter a valid email address', 'error');
    }
  });

  // Password match
  const pw1 = form.querySelector('#password');
  const pw2 = form.querySelector('#confirm-password');
  if (pw1 && pw2 && pw1.value !== pw2.value) {
    pw2.style.borderColor = '#E05555';
    showToast('Passwords do not match', 'error');
    valid = false;
  }

  return valid;
}

/* ---------------------------------------------------------
   7. TABLE ROW SELECTION
--------------------------------------------------------- */
function initTableSelection() {
  document.querySelectorAll('table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      document.querySelectorAll('table tbody tr').forEach(r => r.classList.remove('table-row-selected'));
      row.classList.add('table-row-selected');
    });
  });
}

/* ---------------------------------------------------------
   8. QUANTITY CONTROLS (cart page)
--------------------------------------------------------- */
function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, (item.qty || 1) + delta);
  saveCart(cart);
  if (typeof renderCart === 'function') renderCart();
}

/* ---------------------------------------------------------
   INIT — run all on DOM ready
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initDarkMode();
  initMobileDropdowns();
  updateCartBadge();
  initTableSelection();
});
