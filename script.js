var cart = document.getElementById("cartNumber");
var array = [];
var selection1 = document.getElementById("items1");
var selection2 = document.getElementById("items2");
var selection3 = document.getElementById("items3");
var selection4 = document.getElementById("items4");
var selection5 = document.getElementById("items5");
var selection6 = document.getElementById("items6");
var selection7 = document.getElementById("items7");
var selection8 = document.getElementById("items8");
var selection9 = document.getElementById("items9");
var selection10 = document.getElementById("items10");
var selection11 = document.getElementById("items11");
var selection12 = document.getElementById("items12");
function renderCart() {
  var cartInfo = JSON.parse(localStorage.getItem('Cart Items'));
  var currentNum = cart.textContent;
  console.log(cartInfo);
  if (cartInfo !== null) {
    cart.textContent = " " + cartInfo.length;
  } else {
    cart.textContent = " " + 0
  }
  console.log(currentNum);
}
renderCart();


selection1.onclick = function () {
  array.unshift(selection1.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection2.onclick = function () {
  array.unshift(selection2.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection3.onclick = function () {
  array.unshift(selection3.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection4.onclick = function () {
  array.unshift(selection4.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection5.onclick = function () {
  array.unshift(selection5.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection6.onclick = function () {
  array.unshift(selection6.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection7.onclick = function () {
  array.unshift(selection7.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection8.onclick = function () {
  array.unshift(selection8.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection9.onclick = function () {
  array.unshift(selection9.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection10.onclick = function () {
  array.unshift(selection10.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection11.onclick = function () {
  array.unshift(selection11.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(array));
  alert("Item added to cart!");
}
selection12.onclick = function () {
  array.unshift(selection12.textContent);
  console.log(array);
  localStorage.setItem('Cart Items', JSON.stringify(selection12.textContent));
  alert("Item added to cart!");
  
}


