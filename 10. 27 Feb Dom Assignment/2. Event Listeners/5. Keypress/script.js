let input = document.querySelector("input");
input.addEventListener("keypress", bgc);

function bgc(){
    let colorName = input.value;
    input.style.backgroundColor = colorName;
}