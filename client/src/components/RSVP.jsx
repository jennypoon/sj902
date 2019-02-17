import React, { Component } from 'react';
import RsvpForm from "../components/rsvpForm.jsx";

class RSVP extends Component {
 constructor(props) {
    super(props);

    this.state = {
      rsvp: "",
      invalidEmail: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInvalidEmail = this.handleInvalidEmail.bind(this);
  }

  handleClick(event) {
    this.setState({ rsvp: true });
  }

  handleInvalidEmail(event) {
    console.log(event)
    this.setState({invalidEmail: event})
  }

  render() {
    return (
      <div className="formContent">
        {this.state.rsvp ? (
          <div className="formSubmitted">
            <h2>Your RSVP has been sent! Thank You!</h2>
            <p>Need to make a Change?<br/>Just submit another RSVP and we'll use the latest one</p>
            <p>Got Questions?<br/>Email us at: <a href="mailto:stephenjenny2019@gmail.com?subject=Jenny and Stephen's Wedding Inquiry">stephenjenny2019@gmail.com</a><br/>or call us at 604-716-7891</p>
          </div>
          ) : (
          <div>
            <h1> <i className="far fa-envelope"></i> RSVP</h1>
            <hr/>
            <RsvpForm invalidState={this.state.invalidEmail}
                      handleClick= {this.handleClick}
                      invalidEmail= {this.handleInvalidEmail}
                      />
          </div>
        )}
      </div>
  )}
}

export default RSVP;