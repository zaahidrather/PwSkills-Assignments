let arr = [1, 2, 3, 4, 5];

function numberChecker (arr){
    return (num) => {
        console.log(arr.includes(num));
    }
}

let checkNum = numberChecker(arr);
checkNum(4); 
checkNum(8);