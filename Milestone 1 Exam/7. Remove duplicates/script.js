
function removeDuplicates(array){
    let arrWithoutDuplicates = [];
    for( item of array){
        if(!arrWithoutDuplicates.includes(item))
            arrWithoutDuplicates.push(item);
    }
    return arrWithoutDuplicates
}

let arrWithDuplicates = [9,8,7,6,4,4,5,5];
let arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);
console.log(arrWithoutDuplicates);