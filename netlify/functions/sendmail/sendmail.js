const nodemailer = require('nodemailer');
const mailOptions = require('./nmOptions');

exports.handler = (event) => {
  let data = event.body;

  let transporter = nodemailer.createTransport(mailOptions);

  let successResponse = {
    statusCode: 200,
    body: JSON.stringify({
      result: 'success',
    }),
  };

  let failResponse = {
    statusCode: 200,
    body: JSON.stringify({
      result: 'failure',
    }),
  };

  let feedBack = () => {
    transporter.sendMail(
      {
        from: process.env.NM_USER,
        to: data.email,
        subject: '[JØRGEN TAU] Message delivery successful',
        html: `
        <h3>Your email has been successfully delivered!</h3>
        <h3>A copy of your message:</h3>
        <p>${data.msg}</p>
        `,
      },
      (err, info) => {
        if (err) {
          return failResponse;
        } else {
          return successResponse;
        }
      }
    );
  };

  transporter.sendMail(
    {
      from: process.env.NM_USER,
      to: process.env.NM_ADMIN,
      subject: '[IS-ONLINE] Message recieved',
      html: `
      <h3>Email from [${data.email}]</h3>
      <p>${data.msg}</p>
      `,
    },
    (err, info) => {
      if (err) {
        return failResponse;
      } else {
        feedBack();
      }
    }
  );
};
