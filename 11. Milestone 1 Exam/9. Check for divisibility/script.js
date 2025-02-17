//& - Bitwise and 
//&& - Logical and
let numbers = [1,2,3,4,5,6,7,8,9];

for(i of numbers){
    if(i%3 == 0 && i%2 != 0){
        console.log(i + " is divisible by 3 but not divisible by 2");
    }
    else continue;
}

