
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = 'https://api.mailgun.net/v3/kvmac.com/messages';

var mailgun = require('mailgun-js')({
  apiKey: MAILGUN_API_KEY,
  domain: DOMAIN
});


exports.handler = function mailgun(event, context, callback) {
  const data = {
    from: event.body.from,
    to: 'kodee.mcintosh@kvmac.com',
    subject: event.body.subject,
    text: event.body.text
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
}