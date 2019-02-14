import React, { Component } from 'react';

import RSVP from "./components/RSVP.jsx";
import Countdown from "./components/Countdown.jsx"

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
        height: '250px',
        width: '100%'
  };

  const gmapStyle = {
        overflow: 'hidden',
        background: 'none!important',
        height: '100%',
        width: '100%'
  }

    return (
<section id="contact">
        <div className="inner">
            <section>
                <RSVP />
            </section>
            <section className="split">
              <section>
                <div className="contact-method">
                    <h3>Countdown</h3>
                    <Countdown />
                </div>
              </section>
                <section>
                    <div className="contact-method">
                        <h3>Got Questions?</h3>
                        <a href="mailto:stephenjenny2019@gmail.com">stephenjenny2019@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <h3>Dates and Times</h3>
                        <span><strong>DEADLINE TO RSVP: MAY 1, 2019</strong></span><br/>
                        <span>Wedding Celebration - Monday, September 2, 2019</span><br/>
                        <span>Doors open at 5PM</span><br/>
                        <span>Dinner commences at 7PM</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <h3>Address</h3>
                        <span>Kirin Restaurant - Starlight<br />
                        350 Gifford St<br />
                        New Westminster, BC V3M 7A3</span><br/>
                        <div className="mapouter" style={mapouterStyle} >
                          <div className="gmap_canvas" style={gmapStyle} >
                            <iframe title="map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=kirin%20restaurant%20starlight%20center&t=&z=13&ie=UTF8&iwloc=&output=embed&signed_in=false" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                          </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </section>
    );
  }
}

export default Home;