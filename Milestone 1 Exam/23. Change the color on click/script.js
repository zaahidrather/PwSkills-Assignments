document.documentElement.addEventListener("click",changeColor,true);
let colors = ["red","blue","green","yellow","orange","aqua","aquamarine"];

function changeColor(){
    let i =  Math.floor(Math.random()*colors.length);
    let color = colors[i];
    document.body.style.backgroundColor = color;
}