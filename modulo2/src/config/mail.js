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
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: 'd7f64470a29714',
    pass: '39d3a2888b32c5',
  },
  default: {
    from: 'Philipe Antunes <noreply@philipe.com>',
  },
};
