// String 
let str = "Hello my name is Zahid and my educational background is b-tech in cse . I am studying web development at Pwskills";

// function to count the number of occurrences of words in a string
function occurences (str) {

    let arr = str.split(" "); // split string into words
    let map = new Map();
    
    for( word of arr) { 
        let counter = 1;
        // if map already contains word , increment counter (no. of occurrences by 1)
        if(map.has(word)) {
            map.set(word, ++counter);
        }
        // else create key by name of word and set counter to 1
        else{
            map.set(word, counter);    
        }
    }
    return map;
}
    

console.log(occurences(str));