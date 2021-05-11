module.exports = {
  host: process.env.NM_HOST,
  port: process.env.NM_PORT,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.NM_USER,
    clientId: process.env.NM_CLIENT_ID,
    clientSecret: process.env.NM_CLIENT_SECRET,
    refreshToken: process.env.NM_REFRESH_TOKEN,
  },
  tls: {
    rejectUnauthorized: false,
    servername: process.env.NM_SERVER_NAME,
  },
};
