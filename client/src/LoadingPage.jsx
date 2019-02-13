import React, { Component } from 'react';
import Countdown from "./components/Countdown.jsx";
import logo from "./images/loadingPage.png";
import "./styling/loadingpage.css";



class LoadingPage extends Component {

  render() {
    return (
      <div className="loadingPage">
        <h2 className="titleLoadingPage"> Jenny & Stephen Wedding </h2>
        <h3 className="loadingText"> l   o   a   d   i   n   g . . . </h3>
        <img className="logoLoading" src={logo} alt="JS logo" />
        <Countdown />
      </div>
    )
  }

}

export default LoadingPage;