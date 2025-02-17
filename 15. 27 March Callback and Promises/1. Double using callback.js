let num = [1, 2, 3, 4, 5];

function hof(arr,func) {
    return func(arr);
}

function double(arr) {
    let doubledArray = [];
    arr.forEach((item) => doubledArray.push(item*2));
    return doubledArray;
}

console.log(hof(num,double));
