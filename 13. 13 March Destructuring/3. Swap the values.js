let x = 5, y = 10;

function swap(a,b) {

    ([x,y] = [b,a]);
    return [x,y];

}

console.log("After swapping : " , swap(x,y));