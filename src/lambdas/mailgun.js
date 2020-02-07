const mailgun = require('mailgun-js')
({
  // domain: 'https://api.mailgun.net/v3/kvmac.com/messages',
  domain: 'kodeemcintosh.com',
  apiKey: process.env.MAILGUN_API_KEY,
  retry: 3
});

export async function handler(event, context, callback) {
  try {
    let data = JSON.parse(event.body);

    if(!data || !data.from || !data.subject || !data.text) {
      console.warn('Parameter value was null or undefined:  ', data);

      callback(null, {
        status: 500,
        msg: `Parameter value was null or undefined:  ${data}`
      });

      return;
    }

    const d = new Date();

    let response = await mailgun.messages().send({
      from: `Kodee Contact Form <${data.from}>`,
      to: 'kodee.mcintosh@kodeemcintosh.com',
      subject: `${data.from} -- ${data.subject} -- ${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
      text: data.text
    });

    console.log('Mailgun response ------------------- ', response);

    // if (resData.status !== 200) {
    // if (!response.ok) {
    callback(null, JSON.stringify(response));
      // return JSON.stringify(response);

  } catch(err) {
    console.log(err) // output to netlify function log
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(err)
    });
    // return {
    //   statusCode: 500,
    //   body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    // }
  }
}