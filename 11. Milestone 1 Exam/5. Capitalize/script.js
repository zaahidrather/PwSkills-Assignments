let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    input.value = input.value.trim().charAt(0).toLowerCase() === input.value.trim().charAt(0)?input.value.trim().charAt(0).toUpperCase() + input.value.trim().slice(1):input.value;
});

