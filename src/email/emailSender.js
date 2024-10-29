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


const sendVerificationEmail = (emailToSend, idUsuario, nomeUsuario) => {
    const url = process.env.CALENDAR_URL + '/verificar-usuario'
    mailOptions.to = emailToSend
    mailOptions.subject = `Bem vindo, ${nomeUsuario}`,
    mailOptions.html = `
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px; margin-top: 30px">
        <h1 style="color: black; font-size: 20px">
            Bem vindo ao <span style="color: #22c55e">Calendar.pog</span>
        </h1>
        <p style="text-align: center; font-weight: 600">Para começar a usar a plataforma clique no botão abaixo para verificar/validar a sua conta.</p>
        <a
        href="${url}"
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
            margin-top: 20px;
            cursor: pointer;
        "
        onmouseover="this.style.backgroundColor='#1d4ed8'" 
        onmouseout="this.style.backgroundColor='#2563eb'"
        >
        Clique aqui
      </a>
      </div>
      `
    sender.sendMail(mailOptions, (error) => {
        if(error) {
            console.log(error);
            throw new Error ('Erro ao enviar e-mail de verificacao')
        }
    })
    
}

export default {
    sendVerificationEmail
}