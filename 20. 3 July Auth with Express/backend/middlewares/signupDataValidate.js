const emailValidator = require('email-validator')

const signupDataValidate = (req, res, next) => {
    const {name, userName, email, password, bio} = req.body;

    if( !name || !userName || !email || !password || !bio) {
        return res.status(400).json({
            success: false,
            message: "Every field is required."
        })
    }

    const validEmail = emailValidator.validate(email);
    
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: "Invalid email."
        })
    }

    next();
}

module.exports = signupDataValidate;