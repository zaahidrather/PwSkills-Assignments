const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area. ",
        sector: "sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

function extract(obj) {
    const {
        name,
        address: { street },
    } = person;

    return { name, street };
}

const extractedData = extract(person);

console.log(extractedData);
