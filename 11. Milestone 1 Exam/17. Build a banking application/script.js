let customer1 = {name : "Zahid", balance:3000};

function bank(customer,action,money){
    switch(action){
        case "deposit":
            deposit(customer,money);
            break;
        case "withdrawal":
            withdrawal(customer,money);
            break;
        case "checkBalance":
            checkBalance(customer);
            break;
        default :
            console.log("invalid action");
    }
}
function deposit(customer,money){
    customer.balance += money;
    console.log(`Depositing ${money} into account of ${customer.name}`);
}

function withdrawal(customer,money){
    console.log(`Withdrawing ${money} from account of ${customer.name}`)
    if(customer.balance >=money)
     customer.balance -= money;
    else
        console.log("Sorry insufficient balance");
}
function checkBalance(customer){
    console.log(`Your current balance is : ${customer.balance}`);
}
bank(customer1,"deposit",2000);
bank(customer1,"checkBalance");
bank(customer1,"withdrawal",10000);
bank(customer1,"checkBalance");