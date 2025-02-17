
let product = {originalPrice : 100, discountedPrice:80};

function percentageDiscount(product){
    let discountPercentage = ((product.originalPrice - product.discountedPrice)/product.originalPrice)*100;
    return discountPercentage;
}

console.log("Discount on product : " + percentageDiscount(product) + "%");