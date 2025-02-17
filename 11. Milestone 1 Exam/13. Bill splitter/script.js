let cost = [ 60,100,130,300], noOfPeople = 3;

function billSplitter(dishPrice,noOfPeople){
    let totalBill = 0;
    for(item of dishPrice){
        totalBill += item; 
    }
    let billPerHead = totalBill / noOfPeople;
    return {TotalBill: totalBill, BillPerHead: billPerHead};
}

console.log(billSplitter(cost,noOfPeople));
