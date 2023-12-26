//Using inbuilt methods :

function reverse() {
    let input = "Hello";
    let splittedinput = input.split('');
    splittedinput.reverse();
    let output= splittedinput.join('');
    console.log(output);

}

setTimeout(reverse, 2000);

//Using loop : 

// function reverse() {
//     let input = "Hello";
//     let output = '';
//     for(let i= input.length-1; i>=0; i--) {
//         output += input[i]
//     }
//     console.log(output);
// }

// setTimeout(reverse,2000);