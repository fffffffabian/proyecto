/*
  Food Flow — lógica del carrito (D2).
  Guarda el pedido en localStorage para que persista entre el Menú y el Detalle.
  El carrito se dibuja dentro del panel lateral (offcanvas de Bootstrap) que cada
  página incluye con los ids: #ff-cart-count, #ff-cart-body, #ff-cart-foot.
*/
(function () {
  const CART_KEY = "ff_cart";
  const STORE_ID = 1; // Mr Sushi — la tienda cuyo menú se muestra

  let productos = [];
  let tienda = null;
  let ready = false; // true cuando ya cargaron los datos

  // --- estado en localStorage ---
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCount();
    renderCart();
  }
  function addToCart(id, qty) {
    qty = qty || 1;
    const cart = getCart();
    const encontrado = cart.find(function (i) { return i.id === id; });
    if (encontrado) { encontrado.qty += qty; }
    else { cart.push({ id: id, qty: qty }); }
    saveCart(cart);
  }
  function setQty(id, qty) {
    let cart = getCart();
    if (qty <= 0) {
      cart = cart.filter(function (i) { return i.id !== id; });
    } else {
      const it = cart.find(function (i) { return i.id === id; });
      if (it) { it.qty = qty; }
    }
    saveCart(cart);
  }
  function removeItem(id) {
    saveCart(getCart().filter(function (i) { return i.id !== id; }));
  }
  function clearCart() { saveCart([]); }
  function count() {
    return getCart().reduce(function (n, i) { return n + i.qty; }, 0);
  }

  // --- pintar ---
  function updateCount() {
    const el = document.getElementById("ff-cart-count");
    if (el) { el.textContent = count(); }
  }

  function renderCart() {
    const body = document.getElementById("ff-cart-body");
    const foot = document.getElementById("ff-cart-foot");
    if (!body || !foot || !ready) { return; }

    const cart = getCart();
    if (cart.length === 0) {
      body.innerHTML = '<p class="text-center text-muted my-5">Tu carrito está vacío</p>';
      foot.innerHTML = '<button class="btn ff-btn w-100" disabled>Continuar</button>';
      return;
    }

    let subtotal = 0;
    let filas = "";
    cart.forEach(function (item) {
      const p = productos.find(function (x) { return x.id === item.id; });
      if (!p) { return; }
      const linea = p.price * item.qty;
      subtotal += linea;
      filas +=
        '<div class="d-flex align-items-center gap-2 py-2 border-bottom">' +
          '<div class="flex-grow-1">' +
            '<div class="fw-semibold">' + p.name + '</div>' +
            '<div class="text-muted small">Q' + p.price + ' c/u</div>' +
          '</div>' +
          '<div class="btn-group btn-group-sm">' +
            '<button class="btn btn-outline-secondary ff-dec" data-id="' + p.id + '">−</button>' +
            '<span class="btn btn-light disabled">' + item.qty + '</span>' +
            '<button class="btn btn-outline-secondary ff-inc" data-id="' + p.id + '">+</button>' +
          '</div>' +
          '<div class="fw-bold ms-2" style="min-width:60px;text-align:right">Q' + linea + '</div>' +
          '<button class="btn btn-sm btn-link text-danger ff-rm" data-id="' + p.id + '" title="Quitar">✕</button>' +
        '</div>';
    });
    body.innerHTML = filas;

    const envio = tienda ? tienda.shipping_cost : 0;
    const total = subtotal + envio;
    foot.innerHTML =
      '<div class="d-flex justify-content-between mt-2"><span>Subtotal</span><span>Q' + subtotal + '</span></div>' +
      '<div class="d-flex justify-content-between"><span>Envío</span><span>Q' + envio + '</span></div>' +
      '<div class="d-flex justify-content-between fw-bold fs-5 mt-1 ff-total"><span>Total</span><span>Q' + total + '</span></div>' +
      '<div class="d-flex gap-2 mt-3">' +
        '<button class="btn btn-outline-secondary ff-clear">Vaciar</button>' +
        '<a class="btn ff-btn flex-grow-1" href="pedido.html">Continuar</a>' +
      '</div>';
  }

  // --- botones dentro del carrito (delegación de eventos) ---
  document.addEventListener("click", function (e) {
    const inc = e.target.closest(".ff-inc");
    const dec = e.target.closest(".ff-dec");
    const rm = e.target.closest(".ff-rm");
    const clr = e.target.closest(".ff-clear");
    if (inc) {
      const id = Number(inc.dataset.id);
      const it = getCart().find(function (x) { return x.id === id; });
      setQty(id, (it ? it.qty : 0) + 1);
    } else if (dec) {
      const id = Number(dec.dataset.id);
      const it = getCart().find(function (x) { return x.id === id; });
      setQty(id, (it ? it.qty : 0) - 1);
    } else if (rm) {
      removeItem(Number(rm.dataset.id));
    } else if (clr) {
      clearCart();
    }
  });

  // --- cargar datos y pintar por primera vez ---
  Promise.all([
    fetch("data/products.json").then(function (r) { return r.json(); }),
    fetch("data/businesses.json").then(function (r) { return r.json(); })
  ]).then(function (d) {
    productos = d[0];
    tienda = d[1].find(function (t) { return t.id === STORE_ID; });
    ready = true;
    updateCount();
    renderCart();
  }).catch(function () {
    ready = true;
    updateCount();
    renderCart();
  });

  // API pública para que el botón "Agregar al carrito" la use
  window.FoodFlowCart = { add: addToCart, count: count };

  document.addEventListener("DOMContentLoaded", updateCount);
})();
