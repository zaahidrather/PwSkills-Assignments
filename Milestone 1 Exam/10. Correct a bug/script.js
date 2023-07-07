let cart = [1,2,3,5];

function doubleCart(arr){
    let cart = [];
    for(i of arr){
        cart.push(i*2);
    }
    return cart;
}
console.log(doubleCart(cart));