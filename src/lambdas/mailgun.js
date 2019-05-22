

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
  try {
    if(!event.body.from
      || !event.body.subject
      || !event.body.text) {
        console.log('MADE INTO NULL CHECK', 'from: ',event.body.from, '... subject: ', event.body.subject, '... text: ', event.body.text);
      return;
    }
        console.log('MADE INTO HANDLER', 'from: ', event.body.from, '... subject: ', event.body.subject, '... text: ', event.body.text);

    const data = JSON.parse(event.body);
    let res = await mailgun.messages.create(domain, {
      'to': 'kodee.mcintosh@gmail.com',
      data
      // from: data.from,
      // to: ['kodee.mcintosh@kvmac.com'],
      // subject: data.subject,
      // text: data.text
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
      message: 'Hey, wazzup, Boi??? Your data made it into the function',
      event
    };
  } catch(err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}