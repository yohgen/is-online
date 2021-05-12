<div align="center">
  <img src="https://user-images.githubusercontent.com/34924430/117877558-62b44600-b2ad-11eb-8f74-4e6675454c78.png" />
</div>

<div align="center">
  <img src="https://api.netlify.com/api/v1/badges/38f5333e-0f3e-4127-b2f0-1a65d5f05a4b/deploy-status">
</div>

# [is-online] My personal website

A [React](https://reactjs.org/) web app with integrated [Netlify functions](https://www.netlify.com/products/functions/) that simulate the back end, including a JSON file in lieu of an actual DB.
Besides basic CRUD, the site features email handling, powered by [Nodemailer](https://nodemailer.com/about/).

# [🛠️] Development

In addition to regular `create-react-app` [(link)](https://github.com/facebook/create-react-app) functionality:

```bash
npm start   # to start live dev environment

npm build   # to create an optimized build ready for production
```

you can also use `netlify dev` [(link)](https://www.netlify.com/products/dev/) to facilitate the development of Netlify functions and test them locally:

```bash
npm i -g netlify-cli # to install Netlify client globally

netlify dev          # to start live dev environment with
                     # local access to Netlify functions
```

NB: `netlify dev` and `npm start` are mutually exclusive (since `netlify dev` runs `npm start` under the hood)

# [📋] Environment Variables and Nodemailer

In order to hide sensetive information, specifically values related to the functioning of Nodemailer, environment variables are used, which are stored privately on Netlify:

```json
{
  host: NM_HOST, # SMTP server address OR IP
                 # (if address couldn't be resolved)

  port: NM_PORT, # SMTP server port
  auth: {
    user: NM_USER                  # email address that you will
                                   # send emails from

    clientId: NM_CLIENT_ID         # your email client id
                                   # if you use OAuth2

    clientSecret: NM_CLIENT_SECRET # again, provided by your
                                   # email client if you use OAuth2

    refreshToken: NM_REFRESH_TOKEN # an email client token that allows
                                   # to generate access tokens used
                                   # in email transactions with OAuth2
  },
  tls: {
    servername: NM_SERVER_NAME # SMTP server address IF you went
                               # with IP in the host field
  }
}
```

If you have no idea what this is all about, I highly suggest you check out [Nodemailer docs](https://nodemailer.com/about/), and [this guide](https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/) if you want to use Gmail or a similar guide (PROTIP: google [`Nodemailer Gmail`](https://www.google.com/search?q=Nodemailer+Gmail))

# [📝] License

This work is licensed under [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html) (see [NOTICE](/NOTICE)). <br>For attributions of open source work incorporated here see [ATTRIBUTIONS.md](/ATTRIBUTIONS.md).
