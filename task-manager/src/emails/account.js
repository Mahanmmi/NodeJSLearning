const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendWelcomeEmail(email, name) {
    sgMail.send({
        to: email,
        from: 'mahanmmi@gmail.com',
        subject: 'Hello there!',
        text: `Hello n' wellcome to task app ${name}.\n Let's create your first task.`
    });
}

function sendGoodbyeEmail(email, name) {
    sgMail.send({
        to: email,
        from: 'mahanmmi@gmail.com',
        subject: 'GOODBYE',
        text: `Goodbye ${name}.`
    });
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
};