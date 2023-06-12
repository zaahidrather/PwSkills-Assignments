let btn = document.querySelector("button");
let text = document.querySelector("span");
btn.addEventListener("dblclick", changeColor);

function changeColor(){
    let values = "0123456789ABCDEF";
    let constant = "#";
    for(let i = 0; i < 6 ; ++i){  
        constant += values[Math.floor(Math.random()*16)];
        console.log(constant);
    }
    document.body.style.backgroundColor = constant;
    text.innerText = "Hex : " + constant;
}