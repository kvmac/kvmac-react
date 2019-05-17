

const mailgun = require('mailgun-js');
mailgun.client({
  username: 'api',
  apiKey: process.env.MAILGUN_API_KEY,
});


export async function handler(event, context, callback) {
  try {
    if(!event.body.from
      || !event.body.subject
      || !event.body.text) {
      return;
    }

    let res = await mailgun.messages.create('https://api.mailgun.net/v3/kvmac.com/messages', {
      from: event.body.from,
      to: ['kodee.mcintosh@kvmac.com'],
      subject: event.body.subject,
      text: event.body.text
    })
    .then((res) => console.log(msg)) // logs response data
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