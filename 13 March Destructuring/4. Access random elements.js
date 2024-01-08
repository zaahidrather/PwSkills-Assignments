let arr = [1, 2, 3, 4, 5];

function randomElements ( arr ) {
    let [a, b, ...rest] = arr;
    return [a, b, rest[rest.length - 1]];
}

// Alternative logic :

// function randomElements ( arr ) {
//     ([a, b,,,c] = arr);
//     return [a, b, c];
// }

console.log(randomElements(arr));