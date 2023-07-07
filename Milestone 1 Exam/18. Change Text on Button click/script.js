let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

// Method 1 (using Ternary operator)
btn.addEventListener("click",()=>{
    h1.innerText == "The most affordable learning platform"? h1.innerText="PW Skills" : h1.innerText="The most affordable learning platform";
})
// Method 2 (using if else)
// btn.addEventListener("click",()=>{
//     if(h1.innerText == "The most affordable learning platform")
//         h1.innerText = "PW Skills";
//         else
//         h1.innerText = "The most affordable learning platform";
// });

