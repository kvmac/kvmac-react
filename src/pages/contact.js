import React from 'react';
import '../styles/contact.css';
import { guid } from '../utils/guid';
import axios from 'axios';

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      emailSuccessful: null,
      email: '',
      subject: '',
      message: ''
    };
  }

  handleContactForm = () => {
    const { email, subject, message } = { ...this.state };

    if(!email || !subject || !message) {
      return;
    }

    axios
      .post("/.netlify/functions/mailgun", {
        from: email,
        subject: subject,
        text: message
      })
      .then(res => res.json())
      .then(json => this.setState({ isLoading: false, emailSuccessful: json.msg.statusCode === 200 ? true : false }))
    console.log('made it into handleMessage');
  }

  handleEmail = (e) => this.setState({ email: e.target.value });
  handleSubject = (e) => this.setState({ subject: e.target.value });
  handleMessage = (e) => this.setState({ message: e.target.value });

  render() {
    const { email, subject, message } = { ...this.state };

    return (
      <div className="contact">
        <div className="card">
          <div className="form">
            <div className="title">Contact</div>
            <input placeholder="return email" className="email" value={email} onChange={this.handleEmail} />
            <input placeholder="subject" className="subject" value={subject} onChange={this.handleSubject} />
            <textarea placeholder="message" className="message" value={message} onChange={this.handleMessage} />
            <button className="submit" onClick={this.handleContactForm}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
