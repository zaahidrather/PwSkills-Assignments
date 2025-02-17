//Assuming 1$ = 80 inr
let list = [
    { name: "book" , priceIn$ :20},
    { name: "notebook" , priceIn$ :10},
    { name: "pen" , priceIn$ :5}
]


console.log(list.map((obj) => {
    return {name : obj.name , priceInR: obj.priceIn$ * 80};
}));













