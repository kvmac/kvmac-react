const mailgun = require('mailgun-js')
({
  domain: 'https://api.mailgun.net/v3/kvmac.com/messages',
  apiKey: process.env.MAILGUN_API_KEY,
});

export async function handler(event, context, callback) {
  try {
    let data = JSON.parse(event.body);
    data.to = 'kodee.mcintosh@kvmac.com';

    if(!data.from
      || !data.subject
      || !data.text) {
        console.warn('MADE INTO NULL CHECK -- An object field is probably empty  -----  ', 'to: ', data.to, '... from: ', data.from, '... subject: ', data.subject, '... text: ', data.text);
      return;
    }


    let res = await mailgun.messages().send(JSON.stringify(data));
    // let res = await mailgun.messages().send(JSON.stringify(data), (err, body) => {
    //   console.log('BODY-------------:   ', body);
    // })

    if (!res.status !== 200) {
    // if (!res.o) {
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