import React, { Component } from 'react';

import RSVP from "./components/RSVP.jsx";
import Countdown from "./components/Countdown.jsx"
import Header from "./components/Header.jsx"

import './App.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {}
  }

  render() {

  const mapouterStyle = {
        position: 'center',
        textAlign: 'right',
        height: '300px',
        width: '400px'
  };

  const gmapStyle = {
        overflow: 'hidden',
        background: 'none!important',
        height: '100%',
        width: '100%'
  }

    return (
    <div>
      <Header />
      <section id="contact">
        <div className="inner">

          <section className="rsvpComponent">
            <RSVP />
          </section>

          <section className="split">
            <section>
              <div className="contact-method">
                <h3><i className="far fa-question-circle"></i> Got Questions? (有問題嗎?)</h3>
                <hr/>
                <a href="mailto:stephenjenny2019@gmail.com">stephenjenny2019@gmail.com</a>
              </div>
            </section>

            <section>
              <div className="contact-method">
                <h3><i className="far fa-clock"></i> Dates and Times (9月2日星期一)</h3>
                <hr/>
                <Countdown /> <br/>
                <li><span>Doors open at 5PM</span><br/></li>
                <li><span>Dinner commences at 7PM</span></li><br/>
                <span>DEADLINE TO RSVP: MAY 1, 2019</span>
              </div>
            </section>

            <section>
              <div className="contact-method">
                <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
                <hr/>

                <span>Kirin Restaurant - Starlight<br />
                350 Gifford St<br />
                New Westminster, BC V3M 7A3</span><br/><br/>
                <div className="mapouter" style={mapouterStyle} >
                  <div className="gmap_canvas" style={gmapStyle} >
                    <iframe title="map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=kirin%20restaurant%20starlight%20center&t=&z=13&ie=UTF8&iwloc=&output=embed&signed_in=false" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
                </div>
              </div>
            </section>

          </section>
        </div>
    </section>
  </div>
    );
  }
}

export default Home;