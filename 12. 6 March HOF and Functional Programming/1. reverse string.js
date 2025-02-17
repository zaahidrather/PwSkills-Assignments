
function reverse() {
    let input = "Hello";
    let stringSplit = input.split('');
    stringSplit.reverse();
    let output= stringSplit.join('');
    console.log(output);

}

setTimeout(reverse, 2000);

