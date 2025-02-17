let input = document.querySelector("input");
input.addEventListener("keyup", keyUp);
input.addEventListener("keydown", keyDown);

function keyUp(){
    input.style.backgroundColor = "green";
}
function keyDown(){
    input.style.backgroundColor = "red";
}