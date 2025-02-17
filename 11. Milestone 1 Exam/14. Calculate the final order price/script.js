
let tomato = {unitPrice:50,quantity:3};
let potato = {unitPrice:30,quantity:4};
let fish = {unitPrice:300,quantity:2};
let cart = [tomato,potato,fish];

function price(arr){
    let totalBill = 0;
    for(i in cart){
        totalBill += cart[i].unitPrice* cart[i].quantity;
    }
    return totalBill;
}

console.log("Total bill : " +price(cart));