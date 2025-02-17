const str = "hello, world!";

function manipulateString(str,callback) {
    
    return logString(str);
}

function logString(str) {
    console.log("The manipulated string is :",str.toUpperCase());
}

manipulateString(str);