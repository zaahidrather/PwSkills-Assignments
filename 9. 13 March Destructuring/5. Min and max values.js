let numbers = [5, 2, 7, 1, 9];

function minAndMax(array) {
    let result = {};
    result.max = Math.max(...array);
    result.min = Math.min(...array);
    return result;
}

console.log(minAndMax(numbers));