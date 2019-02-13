import React, { Component } from 'react';
import axios from 'axios';

class RsvpForm extends Component {
 constructor(props) {
    super(props);

    this.state = {
      selectedOption: "1",
      name: "",
      email: "",
      plusone: "null",
      mailAddress: "null",
      guestNames: "null",
      invalidEmail: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
    this.props.invalidEmail(false)
  }

  validateEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
  }

  handleSubmit(event){
    event.preventDefault();

    if (this.validateEmail(this.state.email)) {
      axios.post("/api/rsvp", {
        name: this.state.name,
        email: this.state.email,
        plusone: this.state.plusone,
        rsvp: this.state.selectedOption,
        comments: this.state.mailAddress,
        songs: this.state.guestNames
      })

      .then((res) => {
      })

      this.props.handleClick()

    } else {
        this.props.invalidEmail(true)
    }
  }

  render() {
    return (

      <div>
          <label className="left">
            <p>Can we expect you on August 24, 2019?</p>
          </label>

          <label className="right">
            <input type="radio" name="Yes" value="1"
              checked={this.state.selectedOption === "1"}
              onChange={this.handleOptionChange}
            />
            Yes! Count me in!
          </label>

          <label className="right">
            <input type="radio" name ="No" value="0"
              checked={this.state.selectedOption === "0"}
              onChange={this.handleOptionChange}
            />
            Sorry, can't make it
          </label>

          {this.state.selectedOption === "1" ? (
            <form className="rsvpForm" onSubmit={this.handleSubmit}>
              <p>Please complete this form:</p>
              {this.props.invalidState ? (<p style={{color:"red",textAlign:"center"}}> - - Please enter a valid email address - - </p>) : "" }
              <label className="rsvpColumn">
                First & Last Name:
              </label>
              <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

              <label className="rsvpColumn">
                Your Email:
              </label>
              <input className="rsvpColumn input" type="text" name="email" onChange={this.handleChange} required ></input><br/><br/>

              <label className="rsvpColumn">
                # of Seats to Reserve:
              </label>
              <input className="rsvpColumn input" type="text" name="plusone" onChange={this.handleChange}></input><br/><br/>

              <label className="rsvpColumn">
               Full Name of Guests:
              </label>
              <input className="rsvpColumn input" type="text" name="guestNames" onChange={this.handleChange}></input><br/><br/>

               <label className="rsvpColumn">
               Mailing Address:
              </label>
              <textarea className="rsvpColumn comment" type="text" name="mailAddress" onChange={this.handleChange}></textarea><br/><br/><br/><br/>
              <button className="rsvpButton" onClick={this.handleClick}> Submit your RSVP! </button>
            </form>
            ) : (
            <div>

              <form className="rsvpForm" onSubmit={this.handleSubmit}>
                <p>Sorry to hear that you can't make it to our special day!</p>
              {this.props.invalidState ? (<p style={{color:"red",textAlign:"center"}}> - - Please enter a valid email address - - </p>) : "" }
              <label className="rsvpColumn">
                First & Last Name:
              </label>
              <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

              <label className="rsvpColumn">
                Your Email:
              </label>
              <input className="rsvpColumn input" type="text" name="email" onChange={this.handleChange} required ></input><br/><br/><br/><br/>

              <button className="rsvpButton" onClick={this.handleClick}> Submit your RSVP! </button>
              </form>
            </div>)}
          </div>
      )}
}

export default RsvpForm;