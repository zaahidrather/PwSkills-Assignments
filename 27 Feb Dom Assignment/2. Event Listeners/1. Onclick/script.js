let btn = document.querySelector("button");
btn.addEventListener("click",toggle);
console.log(btn);

function toggle(){
    document.body.classList.toggle("dark-mode");
    console.log("Hello");
}
