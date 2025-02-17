let input = document.querySelector("input");
let btn = document.querySelector("button");
let display = document.querySelector("h1");

btn.addEventListener('click',counter);

function counter(event){
    event.preventDefault();
    let count = 0;
    let str = input.value.toLowerCase();
    for(const i of str){
        if(i === 'a' || i === 'e' || i === 'i' ||i === 'o' ||i === 'u' ){
            count += 1;
        }
    }
    display.innerText = "The number of vowels = " + count;
}