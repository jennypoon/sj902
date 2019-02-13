import React, { Component } from 'react';
import ceremonyLocation from '../images/ceremony_location.png'
import parkingLocation from '../images/parking.png'

class Venue extends Component {

 render() {

  const mapouterStyle = {
        position: 'center',
        textAlign: 'right',
        height: '400px',
        width: '100%'
  };

  const gmapStyle = {
        overflow: 'hidden',
        background: 'none!important',
        height: '100%',
        width: '100%'
  }

  return (
    <div className="venueComponent">
      <h2>South Bonson Community Center </h2>
      <p> 10932 Barnston View Rd<br/> Pitt Meadows, BC V3Y 0B9</p>

      <div className="mapouter" style={mapouterStyle} >
        <div className="gmap_canvas" style={gmapStyle} >
          <iframe title="map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=south%20bonson%20community%20center&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
          </iframe>
        </div>
      </div>
      <div className="venueDetails">
        <h3> CEREMONY </h3>
        <p> The ceremony will be held at the wharf located about 500ft from the venue. There will be signs to help guide you </p>
        <img src={ceremonyLocation} width="100%" height="100%" alt="ceremony location" />
        <h3> PARKING </h3>
        <p> Parking is F r e e. Please print this <a href="https://docs.google.com/document/d/1FIkEgIjHucjm_Y0VeZA-qo69UYID61Srx4NWYGFuEns/edit?usp=sharing" target="_blank" rel="noopener noreferrer">parking pass</a> and place it on your dashboard. Parking areas are highlighed in red below </p>
        <p> There are both street parking and a parking lot available. Carpooling is highlighly recommended as parking is rather limited </p>
        <img src={parkingLocation} width="100%" height="100%" alt="parking location" />
      </div>

    </div>
  )}
}

export default Venue;


