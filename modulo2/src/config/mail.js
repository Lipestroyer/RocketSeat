/*
  Servidores de e-mail para pesquisa
  AMAZON SES
  Mailgun
  Sparkpost
  Mandril (Mailchimp)
  Gmail

  Mailtrap(Somente para ambiente dev se colocar no servidor não funciona)
 */
export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Philipe Antunes <noreply@philipe.com>',
  },
};
