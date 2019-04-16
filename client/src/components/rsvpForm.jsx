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
    input = input.trim()
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

          <label>
            <span>請在5月1曰之前通知。謝謝</span><br/><br/>
            <span>Can we expect you at our celebration on Sept. 2, 2019?</span>
          </label>

          <p>
            <input type="radio" name="Yes" value="1"
              checked={this.state.selectedOption === "1"}
              onChange={this.handleOptionChange}
            />
            <span>(來) Yes - Count me in!</span>
          </p>

          <p>
            <input type="radio" name ="No" value="0"
              checked={this.state.selectedOption === "0"}
              onChange={this.handleOptionChange}
            />
            <span>(不來) No - Sorry, can't make it!</span>
          </p>


          {this.state.selectedOption === "1" ? (
            <form className="rsvpForm" onSubmit={this.handleSubmit}>
              {this.props.invalidState ? (<p style={{color:"red",textAlign:"center"}}> - - Please enter a valid email address - - </p>) : "" }
              <p>
              <label>
                First & Last Name<sup>*</sup> (姓名)
              </label>
              <input type="text" name="name" placeholder="Full Name" onChange={this.handleChange} required ></input><br/>

              <label>
                Your Email<sup>*</sup> (電郵)
              </label>
              <input type="text" placeholder="name@email.com" name="email" onChange={this.handleChange} required ></input><br/>

              <label>
                Total Number of Seats to Reserve<sup>*</sup> (人數)
              </label>
              <input type="number" placeholder="#" min="1" max="6" name="plusone" onChange={this.handleChange} required></input><br/>

              <label>
               Full Name of Guests
              </label>
              <input type="text" name="guestNames" placeholder="Andy Lau, 劉德華" onChange={this.handleChange}></input><br/>

               <label>
               Mailing Address (地址)
              </label>
              <textarea type="text" placeholder="123 ABC Street &#10;City, Province &#10;X1X 1X4" name="mailAddress" onChange={this.handleChange}></textarea><br/>
              </p>
              <span>We're happy you can make it!</span>

              <p>
              <button onClick={this.handleClick}> Submit your RSVP! </button>
              </p>
            </form>
            ) : (
            <div>
              <form className="rsvpForm" onSubmit={this.handleSubmit}>

                {this.props.invalidState ? (<p style={{color:"red",textAlign:"center"}}> - - Please enter a valid email address - - </p>) : "" }
                <p>
                  <label>
                    First & Last Name<sup>*</sup> (姓名)
                  </label>
                  <input type="text" name="name" placeholder="Full Name" onChange={this.handleChange} required ></input><br/>

                  <label>
                    Your Email<sup>*</sup> (電郵)
                  </label>
                  <input type="text" placeholder="name@email.com" name="email" onChange={this.handleChange} required ></input><br/>
                </p>
                <p>Sorry to hear that you can't make it :( </p>
                <p>
                  <button onClick={this.handleClick}> Submit your RSVP! </button>
                </p>
              </form>
            </div>
            )}
          </div>
      )}
}

export default RsvpForm;