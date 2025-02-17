function getPerson (obj) {
    try {
        if(typeof(obj) != "object" && obj.hasOwnProperty("name") && obj.hasOwnProperty("age")){
            return `${obj.name} , ${obj.age}`;
        } else{
            throw new Error ( "Invalid parameter type");
        }
    } catch(e){
        return e.message;
    }
}

console.log(getPerson({name: "Zahid",age:"26",residence:"nillow"})); 