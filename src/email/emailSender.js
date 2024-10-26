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


const sendEmail = (emailToSend, assunto, texto='') => {

    mailOptions.to = emailToSend
    mailOptions.subject = assunto,
    mailOptions.text = texto
    mailOptions.html = `
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px; margin-top: 30px">
        <h1 style="color: black; font-size: 20px">
            Bem vindo ao <span style="color: #22c55e">Calendar.pog</span>
        </h1>
        <p style="text-align: center; font-weight: 600">Para começar a usar a plataforma clique no botão abaixo para verificar/validar a sua conta.</p>
        <a
        href="http://localhost:3000/cadastrar-usuario"
        target="_blank"
        style="
            background-color: #2563eb; /* bg-blue-600 */
            color: #ffffff; /* text-white */
            padding-top: 0.25rem; /* py-1 */
            padding-bottom: 0.25rem;
            padding-left: 1rem; /* px-4 */
            padding-right: 1rem;
            border-radius: 0.25rem; /* rounded */
            font-weight: 600; /* font-semibold */
            margin-top: 20px
        "
        onmouseover="this.style.backgroundColor='#1d4ed8'" 
        onmouseout="this.style.backgroundColor='#2563eb'"
        >
        Clique aqui
      </a>
      </div>
      `
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