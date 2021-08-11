// 2058499 Cart Management
var cart = [];
function addItem(name, price) {
    cart.push({
        "name": name,
        "price": price,
        "amount": 1
    });
}
function updateCartSize() {
    var cartSize = document.getElementById("cartSize");
    cartSize.innerText = cart.length;
}
function add(currentNode) {
    var nameIndex = 1; // child index, suppose to be 0, but because of the space is also a child
    var priceIndex = 3;
    var name = currentNode.parentNode.childNodes[nameIndex].innerText;
    var price = currentNode.parentNode.childNodes[priceIndex].innerText;
    price = price.substring(1); // remove the dollar sign at the front
    price = parseInt(price); // convert string to int
    addItem(name, price);
    updateCartSize();
    sessionStorage.setItem("cart", JSON.stringify(cart));
}
function listItem(name, price) {
    var itemsArea = document.getElementById("itemsArea");
    var newItem = "<div class=\"card\" style=\"width: 10rem;\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">" + name + "</h5>\n                <h6 class=\"card-subtitle mb-2\">$" + price + "</h6>\n                <input type=\"button\" value=\"Add\" class=\"btn btn-primary\" onclick=\"add(this)\">\n            </div>\n        </div>";
    itemsArea.innerHTML += newItem;
}
function loadSavedCart() {
    var savedCart = JSON.parse(sessionStorage.getItem("cart"));
    if (savedCart != null) {
        savedCart.forEach(function (element) {
            cart.push(element);
        });
    }
    updateCartSize();
}
function main() {
    listItem("CPU", 5000);
    listItem("GPU", 4000);
    listItem("RAM", 3000);
    listItem("SSD", 2000);
    loadSavedCart();
}
main();
