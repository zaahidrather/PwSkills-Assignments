let arr = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
]

function filterByCategory(arr) {
    return function (str) {
        return arr.filter((arr) => arr.category === str)
    }
}


let filter = filterByCategory(arr);
console.log(filter("Clothing"));