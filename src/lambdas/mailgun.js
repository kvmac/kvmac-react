const mailgun = require('mailgun-js')
({
  // domain: 'https://api.mailgun.net/v3/kvmac.com/messages',
  domain: 'kvmac.com',
  apiKey: process.env.MAILGUN_API_KEY,
  retry: 3
});

export async function handler(event) {
  let response;

  try {
    let data = JSON.parse(event.body);

    if(!data.from
      || !data.subject
      || !data.text) {
        console.warn('MADE INTO NULL CHECK -- An object field is probably empty: ', data);
      return;
    }

    // data.to = 'kodee.mcintosh@kvmac.com';
    // data.from = `KVMAC Contact Form <${data.from}>`;
    // data.subject = `${new Date()} -- ${data.subject} -- ${data.from}`;
    console.log('data: ', data);

    // let res = await mailgun.messages().send(JSON.stringify(data));
    response = await mailgun.messages().send({
      from: `KVMAC Contact Form <${data.from}>`,
      to: 'kodee.mcintosh@kvmac.com',
      subject: `${new Date()} -- ${data.subject} -- ${data.from}`,
      text: data.text
    });

    console.log('Mailgun response ------------------- ', response);

    // if (resData.status !== 200) {
    if (response.status !== 200) {
      return {
        statusCode: response.status,
        body: {
          statusText: response.statusText
        }
      };
    }

    return {
      statusCode: 200,
      message: 'Hey, wazzup, Boi??? Your data made it into the function',
      data: response
    };
  } catch(err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}