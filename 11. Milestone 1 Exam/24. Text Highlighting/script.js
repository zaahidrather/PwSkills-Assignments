let p = document.querySelector(".para");

function highlightWords() {
    
    let output = "";
    let words = p.innerText.split(" ");
    for (i in words) {
        let word = words[i];
        if (word.length > 8) {
            output += " " + '<span class = "highlight">' + word + '</span>' + " "
        }
        else {
            output += " " + word;
        }
    }
    p.innerHTML = output;
}
 
window.addEventListener("load",highlightWords);