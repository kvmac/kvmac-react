import React from 'react';
import '../styles/contact.css';
import { guid } from '../utils/guid';
// import axios from 'axios';

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      subject: '',
      message: ''
    };
  }

  handleMessage = () => {
    const { email, subject, message } = { ...this.state };
    // api call here

    // axios
    //   .post(`https://kvmac.com/mailgun`)
    //   .then(({ data: { data: message } }) => {
    //     callback(null, {
    //       statusCode: 200,
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify(
    //         // from: email,
    //         // subject: subject,
    //         // text: message,
    //       ),
    //     })
    //   })
    //   .catch((e) => {
    //     callback(e)
    //   })
  }

  handleEmail = (e) => this.setState({ email: e.target.value });
  handleSubject = (e) => this.setState({ subject: e.target.value });
  handleMessage = (e) => this.setState({ message: e.target.value });

  render() {
    const { email, subject, message } = { ...this.state };

    return (
      <div className="contact">
        <div className="card">
          <input placeholder="email" className="email" onChange={this.handleEmail} value={email} />
          <input placeholder="subject" className="subject" onChange={this.handleSubject} value={subject} />
          <input placeholder="message" className="message" onChange={this.handleMessage} value={message} />
          <button onClick={this.handleMessage} />
        </div>
      </div>
    );
  }
}
