class Car{

    constructor(company,model,year) {
        this.company = company;
        this.model = model;
        this.year = year;

    }
    
    getDescription(obj) {
        return `This is a ${this.year} ${this.company} ${this.model} `
    }
}

let car1 = new Car("Toyota","Hyryder",2024);

console.log(car1.getDescription());