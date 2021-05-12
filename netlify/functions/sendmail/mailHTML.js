module.exports = (email, text) => {
  return `
  <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>[Jørgen Tau] Message Received</title>
    <style>
@media only screen and (max-width: 620px) {
  table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
  }

  table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {
    font-size: 16px !important;
  }

  table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
  }

  table[class=body] .content {
    padding: 0 !important;
  }

  table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
  }

  table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  table[class=body] .btn table {
    width: 100% !important;
  }

  table[class=body] .btn a {
    width: 100% !important;
  }

  table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }

  #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
}
</style>
  </head>
  <body class="" style="background: #101010; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Hi, it's Jørgen Tau</span>
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #101010;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #101010; border: 3px solid #ffffff;">
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #101010;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 16px; vertical-align: top;">
                        <p style="color: #ffffff; background: #101010; font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; Margin-bottom: 15px; background: #101010;">Hi, it's Jørgen Tau <br>&lt;<a href="mailto:${process.env.NM_ADMIN}" target="_blank" style="color: #ffffff; text-decoration: underline solid #006cf8; font-size: 16px; text-align: center; background: #101010; cursor: pointer;">${process.env.NM_ADMIN}</a>&gt;</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; color: #ffffff; background: #101010;">You received this email because you contacted me.<br>Below you can find a copy of your message:</p>
                        <p style="font-family: sans-serif; font-size: 14px; background: #101010; color: #c0c0c0; font-weight: normal; margin: 0; Margin-bottom: 15px;"><code style="font-size: 14px; background: #101010; color: #c0c0c0;">email: &lt;<a href="mailto:${email}" target="_blank" style="background: #101010; cursor: pointer; color: #c0c0c0; text-decoration: underline solid #006cf8; font-size: 14px; text-align: center;">${email}</a>&gt;</code></p>
                        <p style="font-family: sans-serif; font-size: 14px; background: #101010; color: #c0c0c0; font-weight: normal; margin: 0; Margin-bottom: 15px;"><code style="font-size: 14px; background: #101010; color: #c0c0c0;">text: ${text}</code></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%; background: #101010;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #101010;">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #666666; text-align: center; background: #101010;">
                    <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center; background: #101010;">This email was auto-generated. Please do not respond.</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
  `;
};
