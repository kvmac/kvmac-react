const mailgun = require('mailgun-js')
({
  // domain: 'https://api.mailgun.net/v3/kvmac.com/messages',
  domain: 'kvmac.com',
  apiKey: process.env.MAILGUN_API_KEY,
  retry: 3
});

export async function handler(event) {
  try {
    let data = JSON.parse(event.body);
    let resData = {};

    if(!data.from
      || !data.subject
      || !data.text) {
        console.warn('MADE INTO NULL CHECK -- An object field is probably empty: ', data);
      return;
    }

    data.to = 'kodee.mcintosh@kvmac.com';
    // data.from = `KVMAC Contact Form <kodee.mcintosh@protonmail.com>`;
    data.subject = `${new Date()} -- ${data.subject} -- ${data.from}`;
    console.log('data: ', data);

    // let res = await mailgun.messages().send(JSON.stringify(data));
    mailgun.messages().send(JSON.stringify(data), (error, body) => {
      resData = body;
      console.log('ERROR: ', error);
      console.log('body:  ', body);
    });
    // console.log('Mailgun response ------------------- ', res);

    // if (resData.status !== 200) {
    if (!resData.ok) {
      return {
        statusCode: resData.status,
        body: {
          statusText: resData.statusText
        }
      };
    }

    return {
      statusCode: 200,
      message: 'Hey, wazzup, Boi??? Your data made it into the function',
      data: JSON.stringify(resData)
    };
  } catch(err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}