var cartInfo = JSON.parse(localStorage.getItem('Cart Items'));
var cartList = document.getElementById("cartList");
var removeCart = document.querySelector(".clearCart");

console.log(cartInfo);

function renderPage () {
    if (cartInfo !== null) {
        console.log("test1")
        for (let index = 0; index < cartInfo.length; index++) {
            console.log("test2")
            var listItem = document.createElement("li");
            listItem.textContent = cartInfo[index];
            cartList.append(listItem)
        }

    } else {
        cartList.textContent = "Your cart is empty!"
    }
}

renderPage();
removeCart.addEventListener("click", function() {
    localStorage.clear();
    alert ("Your storage has been cleared")
})