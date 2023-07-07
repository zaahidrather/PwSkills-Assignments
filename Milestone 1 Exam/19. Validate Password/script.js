let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("click",validate);

function validate(event){
    if(email.value == "" || !email.value.includes("@") || password.value == "" || password.value.length<8){
        event.preventDefault();
        para.innerText = 'Invalid email or password';
        para.style.color = 'red';
    }
    else{
        para.innerText = 'Valid email and password!';
        para.style.color = 'green';
        }
}