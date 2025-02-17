function validateURL(url) {
    const regex =
        /^(https?:\/\/)?[\w\d-_\.]*\.[\w]*$/gim;
   
    if (regex.test(url)) {
        console.log("The input URL matches the conditions.");
    } else {
        console.log("The input URL does not match the conditions.");
    }
}

validateURL("http://www.pwskills.com");
validateURL("https://pwskills.com");
validateURL("ftp://pwskills.com");
validateURL("http://pwskills");
validateURL("https://12345.com");
