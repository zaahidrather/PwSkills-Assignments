const userModel = require('../model/userSchema.js')
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/email.js');
const crypto = require('crypto');

/******************************************************
@signUp 
@route /api/auth/signup
@method POST
@description signup function for creating a new user
@body name, userName, email, password, bio
@returns user object
*******************************************************/
const signup = async (req, res) => {
    try {
        const result = new userModel(req.body);
        await result.save();

        return res.status(200).render('login');
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/******************************************************
@login 
@route /api/auth/login
@method POST
@description Verify the user and send cookie with jwt.
@body userName, password
@returns user object, cookie
*******************************************************/
const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await userModel.findOne({ userName }).select('+password');

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = user.createJwt();

        const cookieOptions = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        }

        res.cookie('token', token, cookieOptions);
        res.status(200).render('user', {
            userName: user.userName,
            email: user.email,
            bio: user.bio
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/*******************************************************
@getUser 
@route /api/auth/user
@method GET
@description retrieve user info from database if valid
@returns user object
*******************************************************/
const getUser = async (req, res) => {
    const userId = req.user._id;

    try {
        const user = await userModel.findOne({ userId });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        res.render('user', {
            userName: user.userName,
            email: user.email,
            bio: user.bio
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error.message
        })
    }
}

/*******************************************************
@forgotPassword 
@route /api/auth/forgotpassword
@method POST
@description get the forgot password token.
@returns forgotPassword token
*******************************************************/

const forgotPassword = async (req, res) => {
    // Get user based on posted email
    const email = req.body.email;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User not found."
        })
    }
    // Generate random reset token
    const token = user.getResetPasswordToken();
    await user.save();
    // Sending token to email.
    const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpassword/${token}`;
    const message = `We have received a password reset request. Please use the below link to reset the password.\n\n ${resetUrl}\n\n This reset password link will be valid only for 10 minutes.`

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password reset email',
            text: message
        })
        res.status(200).json({
            success: true,
            message: 'Password reset link sent to your email',
            user
        })
    } catch (error) {
        user.resetPasswordToken = null;
        user.resetPasswordTokenExpires = null;
        await user.save();

        res.status(400).json({
            success: false,
            message: 'There was an error sending password reset email. Please try again later.',
            error: error.message
        })
    }
}

/*******************************************************
@resetPassword 
@route /api/auth/resetPassword
@method PATCH
@description reset the password
@returns success objecte
*******************************************************/

const resetPassword = async (req, res) => {
    try {
        const token = crypto.createHash('sha256').update(req.params.token).digest('hex');
        // Find user based on token and it's expiry date.
        const user = await userModel.findOne({
            resetPasswordToken: token, resetPasswordTokenExpires: { $gt: Date.now() }
        })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid token."
            })
        }

        // Validate password and confirm password
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirmPassword donot match."
            })
        }

        // Update user's password.
        user.password = req.body.password;
        // user.resetPasswordToken = null;
        // user.resetPasswordTokenExpires = Date.now();

        await user.save();
        const jwt = user.createJwt();

        const cookieOptions = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        }

        res.cookie('token', jwt, cookieOptions);
        res.status(200).render('user', {
            userName: user.userName,
            email: user.email,
            bio: user.bio
        })
        // res.status(200).redirect('/api/auth/user')
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = { signup, login, getUser, forgotPassword, resetPassword }