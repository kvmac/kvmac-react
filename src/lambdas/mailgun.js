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

    if(!data || !data.from || !data.subject || !data.text) {
      console.warn('Parameter value was null or undefined:  ', data);

      return {
        status: 500,
        msg: `Parameter value was null or undefined:  ${data}`
      };
    }

    const d = new Date();

    response = await mailgun.messages().send({
      from: `KVMAC Contact Form <${data.from}>`,
      to: 'kodee.mcintosh@kvmac.com',
      subject: `${data.from} -- ${data.subject} -- ${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
      text: data.text
    });

    console.log('Mailgun response ------------------- ', response);

    // if (resData.status !== 200) {
    // if (!response.ok) {
      return JSON.stringify(response);
      // return { statusCode: response.status,
      //   body: {
      //     statusText: response.statusText
      //   }
      // };
    // }

    // return {
    //   statusCode: 200,
    //   message: 'Hey, wazzup, Boi??? Your data made it into the function',
    //   data: JSON.stringify(response)
    // };
  } catch(err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}