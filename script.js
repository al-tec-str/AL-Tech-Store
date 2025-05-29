let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById('cart-count').innerText = cart.length;
  updateCartDisplay();
}

function updateCartDisplay() {
  const list = document.getElementById('cart-list');
  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - R$ ${item.price},00`;
    list.appendChild(li);
  });

  document.getElementById('cart-total').innerText = total;
}
