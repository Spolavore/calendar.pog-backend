import nodemailer from 'nodemailer'
const sender =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'calendar.pog@gmail.com',
        pass: process.env.EMAIL_PASSWORD

    }
});

var mailOptions = {
    from: 'calendar.pog@gmail.com',
  };


const sendEmail = (emailToSend, assunto, texto) => {

    mailOptions.to = emailToSend
    mailOptions.subject = assunto,
    mailOptions.text = texto
    mailOptions.html = '<h1>Verifique seu Email</h1><button>Verificar</button>'
    console.log(mailOptions)
    sender.sendMail(mailOptions, (error,info) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response );
        }
    })
    
}

export default {
    sendEmail
}