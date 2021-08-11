// 2058499
var checkoutCart = JSON.parse(sessionStorage.getItem("cart"));
var itemsTable = document.getElementById("itemsTable");
var total = 0;
var idTotal = document.getElementById("total");
var rowBg = ["table-primary", "table-secondary"];
var itemCount = 0;
if (checkoutCart != null) {
    checkoutCart.forEach(function (item) {
        itemsTable.innerHTML +=
            "<tr class=\"" + rowBg[itemCount % 2] + "\">\n                <td>" + item["name"] + "</td>\n                <td>$" + item["price"] + "</td>\n                <td>" + item["amount"] + "</td>\n            </tr>";
        total += parseInt(item["price"]);
        itemCount++;
    });
}
idTotal.innerText = "$" + total.toString();
