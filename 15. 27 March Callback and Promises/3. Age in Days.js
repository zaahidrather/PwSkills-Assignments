const person = {
    firstName: "Zahid",
    lastName: "Gulzar",
    age: 23
}

function ageInDays(obj,logResult) {
    const fullName = obj.firstName + " " + obj.lastName;
    const ageInDays = obj.age * 365;
    return logResult(fullName, ageInDays);
}

function logResult(fullName, ageInDays) {
    console.log( `The person"s full name is ${fullName} and their age in days is ${ageInDays}.`);
}

ageInDays(person,logResult);;