let buttons = document.querySelector("button");
let input = document.querySelector("input");

function clearScreen(){
    input.value = " ";
}
function display(value){
    input.value += value;
}
function equals(){
    let result = input.value;
    input.value = eval(result);
}
function changeSign(){
    input.value = (input.value == "+"?"-":"+");
}
