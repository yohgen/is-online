const nodemailer = require('nodemailer');

exports.handler = (event) => {
  let data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: process.env.NM_HOST,
    port: process.env.NM_PORT,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.NM_LOGIN,
      clientId: process.env.NM_CLIENT_ID,
      clientSecret: process.env.NM_CLIENT_SECRET,
      refreshToken: process.env.NM_REFRESH_TOKEN,
      accessToken: process.env.NM_ACCESS_TOKEN,
    },
  });

  transporter.sendMail(
    {
      from: process.env.NM_LOGIN,
      to: process.env.NM_USER,
      subject: '[IS-ONLINE] Message recieved',
      html: `
      <h3>Email from <${data.email}></h3>
      <p>${data.msg}</p>
    `,
    },
    (err, info) => {
      if (err) {
        return err;
      } else {
        transporter.sendMail(
          {
            from: process.env.NM_LOGIN,
            to: data.email,
            subject: '[JØRGEN TAU] Message delivery successful',
            html: `
          <h3>Your email has been successfully delivered!</h3>
          <h3>A copy of your message:</h3>
          <p>${data.msg}</p>
        `,
          },
          (err2, info2) => {
            if (err2) {
              return err2;
            } else {
              return {
                statusCode: 200,
                body: JSON.stringify({
                  result: 'success',
                }),
              };
            }
          }
        );
      }
    }
  );
};
