// 2058499
let checkoutCart: any = JSON.parse(sessionStorage.getItem("cart"));
let itemsTable: any = document.getElementById("itemsTable");
let total: number = 0;
let idTotal: any = document.getElementById("total");
let rowBg: string[] = ["table-primary", "table-secondary"];
let itemCount: number = 0;

if (checkoutCart != null) {
    checkoutCart.forEach(item => {
        itemsTable.innerHTML +=
            `<tr class="${rowBg[itemCount%2]}">
                <td>${item["name"]}</td>
                <td>$${item["price"]}</td>
                <td>${item["amount"]}</td>
            </tr>`;
    
        total += parseInt(item["price"]);
        itemCount++;
    });
}

idTotal.innerText = "$" + total.toString();
