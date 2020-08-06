const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
  sgMail.send({
    to:email,
    from:'vinitnprabhu@gmail.com',
    subject: 'Thanks for joining',
    text: `Welcome to the app, ${name}. Let me know how you like the app.`
  })
}

const sendGoodByeEmail = (email, name) => {
  sgMail.send({
    to:email,
    from:'vinitnprabhu@gmail.com',
    subject: 'Good Bye',
    text: `Good Bye, ${name}. Please come again sometime`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail
}
