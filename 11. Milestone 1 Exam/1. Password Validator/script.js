//Password Validator.

function pwdValidator(input){
    let password = "*Tiger";
    if(input == password)
    console.log("Password Matched. Password validation Successful.");
    else
        console.log( "Password didn't match. Password validation unsuccessful");
}
pwdValidator('*Tiger');