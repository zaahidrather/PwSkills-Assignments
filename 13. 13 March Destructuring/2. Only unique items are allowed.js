let duplicates =  [ 1, 3, 4, 7, 3, 9, 7, 7];

function removeDuplicates ( array)  {
    let arrWithoutDuplicates = [];
    array.forEach((element) => {
        if(!arrWithoutDuplicates.includes(element)) {
            arrWithoutDuplicates.push(element);
        }
    });
    return arrWithoutDuplicates;
}

console.log(removeDuplicates(duplicates));

