import React from 'react';
import '../styles/contact.css';
import { guid } from '../utils/guid';
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

    // const formData = new FormData(e.target);

    if(!from || !subject || !text) {
      return;
    }

    axios
      .post("/.netlify/functions/mailgun", {
        headers: {
          'Content-Type': 'application/json'
        },
        // body: encode({
          // 'form-name': 'contact',
          body: JSON.stringify({
          ...this.state
        })
      })
      .then(res => res.json())
      .then(json => this.setState({ isLoading: false, emailSuccessful: json.msg.statusCode === 200 ? true : false }))
    console.log('made it into handleMessage');
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

// const encode = (data) => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }
