import React from 'react';
import '../styles/contact.css';
import axios from 'axios';

const netlify = () => {
  return (
    <script type="text/babel"></script>
  );
}

netlify();

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      emailSuccessful: null,
      from: '',
      subject: '',
      text: '' 
    };
  }

  handleContactForm = (e) => {
    const { from, subject, text } = { ...this.state };

    e.preventDefault();

    if(!from || !subject || !text) {
      return;
    }

    let body = JSON.stringify({
      from,
      subject,
      text
    });

    axios
      .post("/.netlify/functions/mailgun", {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: {
            ...body,
            'form-name': 'Contact'
          }
      })
      .then(res => res.json())
      .then(json => this.setState({ isLoading: false, emailSuccessful: json.msg.statusCode === 200 ? true : false }))
  }

  handleEmail = (e) => this.setState({ from: e.target.value });
  handleSubject = (e) => this.setState({ subject: e.target.value });
  handleMessage = (e) => this.setState({ text: e.target.value });

  render() {
    const { from, subject, text } = { ...this.state };

    return (
      <div className="contact">
        <div className="card">
          <form>
            <div className="title">Contact</div>
            <input placeholder="return email" className="email" value={from} onChange={this.handleEmail} />
            <input placeholder="subject" className="subject" value={subject} onChange={this.handleSubject} />
            <textarea placeholder="message" className="message" value={text} onChange={this.handleMessage} />
            <button className="submit" onClick={this.handleContactForm}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
