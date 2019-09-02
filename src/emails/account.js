const sgMail = require('@sendgrid/mail')

const sendgridAPIKey ='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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) =>{

    sgMail.send({

        to: email,
        from: 'akshayparate92@gmail.com',
        subject: 'This is welcome joining Mail!!!',
        text: `This is body section from sendgird.Thanks ${name} for joining us`
    
    })

}

const sendCancelationEmail = (email,name) =>{

    sgMail.send({

        to: email,
        from: 'akshayparate92@gmail.com',
        subject: 'Sorry! to see you go!!!',
        text: `This is body section from sendgird.Sorry ${name} ! see you soon`
    
    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}