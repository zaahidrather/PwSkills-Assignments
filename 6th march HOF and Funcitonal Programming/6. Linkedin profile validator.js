function validator(url){
   const regex = /^https:\/\/www\.linkedin\.com\/in\/([\w\d_-]+){4,30}[\w\d]$/
   if(regex.test(url) == true){
    console.log("Valid LinkedIn Url");
   } else {
        console.log("Invalid LinkedIn Url");
   }
   
}

validator("https://www.linkedin.com/in/zahid-20");
validator("https://www.linkedin.com/in/zahid-20-");
validator("https://www.linkedin.com/in/zahid");
validator("https://www.linkedin.com/in/zaid");
