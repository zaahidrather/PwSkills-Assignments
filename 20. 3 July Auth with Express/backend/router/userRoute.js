
const express = require('express');
const {signup, login, getUser, forgotPassword, resetPassword} = require('../controller/authController.js');
const signupDataValidate = require('../middlewares/signupDataValidate.js');
const loginDataValidate = require('../middlewares/loginDataValidate.js');
const authenticateUser = require('../middlewares/authenticateUser.js');

const authRouter = express.Router();

authRouter.post('/signup', signupDataValidate, signup);
authRouter.post('/login', loginDataValidate, login);

authRouter.get('/signup', (req, res)=> {
    res.render('signup');
})

authRouter.get('/login', (req, res)=> {
    res.render('login')
});

authRouter.get('/forgotpassword', (req, res) => {
    res.render('forgotPassword')
})

authRouter.get('/resetpassword/:token', (req, res) => {
    res.render('resetPassword')
})
authRouter.get('/user', authenticateUser, getUser);
authRouter.post('/forgotpassword', forgotPassword);
authRouter.patch('/resetpassword/:token',resetPassword)

module.exports = authRouter;
