let img = document.querySelector("img");
let h2 = document.querySelector("h2");
img.addEventListener ("mouseover", mouseOver);
img.addEventListener ("mouseout", mouseOut);
console.log(title);

function mouseOut(){
    h2.innerText = "Mouse currently out of  the image.";
}
function mouseOver(){
    h2.innerText = "Mouse over the image";
    h2.style.color = "red";
}
