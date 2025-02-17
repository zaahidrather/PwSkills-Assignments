let output = document.querySelector("input");
function display(e){
    output.value += e;
}

function clearAll(){
    output.value = '';
}

function changeSign(){
    if(output.value == "-")
        output.value = "+";
    else
        output.value = "-";
}

function equals(){
    output.value = eval(output.value);
}