const userModel = require("../model/userSchema.js");

const loginDataValidate = (req, res, next) => {
    const {userName, password} = req.body;
    
    if(!userName || !password){
        console.log(userName,password);
        
        return res.status(400).json({
            success: false,
            message: "Username and Password are required."
        })
    }

    next();
}

module.exports = loginDataValidate;