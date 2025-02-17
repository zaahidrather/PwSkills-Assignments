let economy = 4000, midSize = 10000,luxury = 20000 , noOfDays = 3;

function rentalCostCalculator(carType,daysRented){
    return(carType*daysRented);
}

console.log(rentalCostCalculator(midSize,noOfDays));