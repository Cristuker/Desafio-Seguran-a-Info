import sgMail from '@sendgrid/mail'
require('dotenv').config();

export const sendEmailTemp = async (nome, email, tempPassword) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
          to: email, // Change to your recipient
          from: 'seg.info.2021.cristian@gmail.com',
          subject: 'Login temporário',
          html:  `Abaixo o email e senha para Login temporário
          Usuario: ${nome}
          Senha temporária: ${tempPassword}`,
        }
        await sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(JSON.stringify(error, null, 2))
          });
    

    } catch(e) {
        console.error(e);
    }
}
