

// const mailgunSdk = require('mailgun-js');
const mailgun = require('mailgun-js');
// const apiKey = process.env.MAILGUN_API_KEY;
const domain = 'https://api.mailgun.net/v3/kvmac.com/messages';
// const mailgun = mailgunSdk({ apiKey, domain });

mailgun({
  username: 'api',
  apiKey: process.env.MAILGUN_API_KEY,
});


export async function handler(event, context, callback) {
  const data = JSON.parse(event.body);
  try {
    if(!data.from
      || !data.subject
      || !data.text) {
        console.log('MADE INTO NULL CHECK', 'from: ',data.from, '... subject: ', data.subject, '... text: ', data.text);
      return;
    }
        console.log('MADE INTO HANDLER', 'from: ', data.from, '... subject: ', data.subject, '... text: ', data.text);

    let res = await mailgun.messages.create(domain, {
      from: data.from,
      to: ['kodee.mcintosh@kvmac.com'],
      subject: data.subject,
      text: data.text
    })
    .then((res) => console.log(res)) // logs response data
    .catch((err) => console.warn(err)); // logs any error

    if (!res.ok) {
    // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: res.status,
        body: {
          statusText: res.statusText
        }
      };
    }

    return {
      statusCode: 200,
    };
  } catch(err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}