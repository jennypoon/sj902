import React, { Component } from 'react';

import RSVP from "./components/RSVP.jsx";

import './App.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div>
        <RSVP />
      </div>
    );
  }
}

export default Home;
