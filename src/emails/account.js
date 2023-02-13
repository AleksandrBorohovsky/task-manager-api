const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'samson.thiel@ethereal.email', // generated ethereal user
      pass: 'bSBdeEdvhm56wyMgXB', // generated ethereal password
    },
  });

const sendWelcomeEmail = async (email, name) =>{

    await transporter.sendMail({
        from: 'aleksandrborohovskij@gmail.com', 
        to: email, 
        subject: "Thanks for joining in!", 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
      });
}

const sendCancelationEmail = async (email, name) =>{

    await transporter.sendMail({
        from: 'aleksandrborohovskij@gmail.com', 
        to: email, 
        subject: "Sorry to see you go!", 
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
      });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

