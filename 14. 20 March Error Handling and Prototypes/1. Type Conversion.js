function convertToNumber (str) {
    const number = Number(str);
    try {
        if(isNaN(number)){
            throw new Error ("Invalid number");
        } else{
            console.log(number);
        }
    } catch (errorInfo) {
        console.log(errorInfo.message); 
    }
}   

convertToNumber("123");
convertToNumber("abc");