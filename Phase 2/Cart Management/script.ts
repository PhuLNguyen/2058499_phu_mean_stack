// 2058499 Cart Management
let cart: Object[] = [];

function addItem(name: string, price: number) {
    cart.push({
        "name": name,
        "price": price,
        "amount": 1
    });
}


function updateCartSize() {
    let cartSize: any = document.getElementById("cartSize");

    cartSize.innerText = cart.length;
}

function add(currentNode: any) {
    let nameIndex: number = 1; // child index, suppose to be 0, but because of the space is also a child
    let priceIndex: number = 3;
    let name: string = currentNode.parentNode.childNodes[nameIndex].innerText;
    let price: any = currentNode.parentNode.childNodes[priceIndex].innerText;

    price = price.substring(1); // remove the dollar sign at the front
    price = parseInt(price); // convert string to int

    addItem(name, price);

    updateCartSize();
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function listItem(name: string, price: number) {
    let itemsArea = document.getElementById("itemsArea");
    let newItem: string =
        `<div class="card" style="width: 10rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2">$${price}</h6>
                <input type="button" value="Add" class="btn btn-primary" onclick="add(this)">
            </div>
        </div>`;

    itemsArea.innerHTML += newItem;
}

function loadSavedCart() {
    let savedCart: any = JSON.parse(sessionStorage.getItem("cart"));
    if (savedCart != null) {
        savedCart.forEach(element => {
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


