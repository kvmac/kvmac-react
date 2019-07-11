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
      name: '',
      from: '',
      subject: '',
      text: ''
    };
  }

  handleContactForm = (e) => {
    const { name, from, subject, text } = { ...this.state };

    e.preventDefault();

    if(!name || !from || !subject || !text) {
      return;
    }
    let payload = JSON.stringify({ name, from, subject, text });

    axios
      .post("/.netlify/functions/mailgun", payload)
      .then(json => this.setState({ isLoading: false, emailSuccessful: json.msg.statusCode === 200 ? true : false }))
  }

  handleInput = (e) => this.setState({ [e.target.id]: e.target.value });

  render() {
    const { name, from, subject, text } = { ...this.state };

    return (
      <div className="contact">
        <div className="card">
          <form>
            <div className="title">Contact</div>
            <input id="name" placeholder="name" className="name" value={name} onChange={this.handleInput} />
            <input id="from" placeholder="return email" className="email" value={from} onChange={this.handleInput} />
            <input id="subject" placeholder="subject" className="subject" value={subject} onChange={this.handleInput} />
            <textarea id="text" placeholder="message" className="message" value={text} onChange={this.handleInput} />
            <button className="submit" onClick={this.handleContactForm}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
