import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.VITE_EMAILUSER,
      pass: import.meta.env.VITE_EMAILPASS
    }
})

function mailService(sender, recipient, subject, text, message) {
    const mailOptions = {
        from: sender,
        to: recipient,
        subject: subject,
        text: text
      }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err.message);
        return { status: 500, error: 'error sending email',  message: err.message };
      } else {
        return { status: 200, success: true, message };
      }
    });
}


// import emailjs from "@emailjs/browser";

// function mailService(sender, recipient, subject, text, message) {
//     const mailOptions = {
//         // from: sender,
//         to_email: recipient,
//         subject: subject,
//         message: text
//       }

//       emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
//       emailjs
//         .send(
//           import.meta.env.VITE_EMAIL_SERVICE_ID, 
//           import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
//           mailOptions
//         )
//         .then((response) => {
//           console.log('Email sent successfully');
//           console.log(response);
//           return { status: 200, success: true, message }
//         })
//         .catch((err) => {
//           onsole.error('Error sending email:', err.message);
//           return { status: 500, error: 'error sending email',  message: err.message };
//         });
// }



// const mailService = (details) => {
//   emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
//   emailjs
//     .send(
//       import.meta.env.VITE_EMAIL_SERVICE_ID, 
//       import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
//       {
//         to_email: details.to_email,
//         subject: details.subject,
//         message: details.message,
//       }
//     )
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export {mailService};