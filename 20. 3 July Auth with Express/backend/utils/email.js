const nodemailer = require('nodemailer');

const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const emailOption = {
        from: 'yourusername@email.com',
        to: option.email,
        subject: option.subject,
        text: option.text
    }

    await transporter.sendMail(emailOption).then((info) => {
        console.log("Responce:",info.response);
    }).catch((error) => {
        console.log("Error sending email : ", error);
    })
}

module.exports = sendEmail;