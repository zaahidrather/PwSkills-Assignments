let inputField = document.getElementById("inputField");

let number = 0;

// Increment function 
function increment(){
    if(number < 11){
        inputField.innerText= number;
        number += 1;
    }
    else
        alert("10+ values are not allowed");
}

// Decrement function
function decrement(){
    if(number >0){
        // number -= 1;
        inputField.innerText = --number;
    }
    else
        alert("Negative value not allowed");
}

// Reset function
function reset(){
    inputField.innerText = 0;
}