const nodemailer = require('nodemailer');
const querystring = require('querystring');
const transportOptions = require('./transportOptions');
const formHTML = require('./mailHTML');

exports.handler = async (event, context, callback) => {
  let { email, msg } = querystring.parse(event.body);

  let transporter = nodemailer.createTransport(transportOptions);

  await transporter.sendMail({
    from: `TAU <${process.env.NM_USER}>`,
    to: `${process.env.NM_ADMIN}, ${email}`,
    subject: '[Jørgen Tau] Message recieved',
    html: formHTML(email, msg),
  })
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ result: 'success' }),
      });
    })
    .catch(() => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ result: 'failure' }),
      });
    });
};
