const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area. " ,
        sector: "sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

function extract (obj) {
    let {name , address:{street}} = obj
    return {name , address:street}
}

console.log(extract(person));