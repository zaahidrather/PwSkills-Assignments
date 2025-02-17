let img = document.querySelector("img");
document.documentElement.addEventListener("keydown",moveImg);

let x = 0;
let y = 0;

function moveImg(event){
    if(event.keyCode == '37'){
        x-=5;
        img.style.left = x + "px";

    }else if(event.keyCode == '38'){
        y-=5;
        img.style.top = y + "px";

    }else if(event.keyCode == '39'){
        x+=5;
        img.style.left = x + "px";
    }else if (event.keyCode == '40'){
        y+=5;
        img.style.top = y + "px";
    }
}