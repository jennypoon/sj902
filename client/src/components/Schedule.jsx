import React, { Component } from 'react';
import ceremonyLocation from '../images/ceremony_location.png'


class Schedule extends Component {
 render() {
  return (
    <div>
    <h2>August 24, 2019</h2>
    <div class="timeline">
      <div class="container circle">
        <div class="content">
          <h2>4:00PM | Ceremony</h2>
          <p>
           Ceremony will start 4:00pm, please arrive no later than 3:45pm so you are properly. The ceremony will be held at the wharf located near the venue, as shown in the map below:<br/><br/>
          <img class="imageCeremony" src={ceremonyLocation} alt="ceremony location" />
         </p>
      </div>
    </div>

    <div class="container circle">
      <div class="content">
        <h2>4:45PM - 5:45PM | Cocktail Hour</h2>
        <p>
        During this time, we will be taking group shots! Please stay closeby so you don't miss your turn! Once you have gotten your pictures taken, please head back to the venue to find out your table number! <br/><br/>

        You will be given a chance to battle for the GOLDEN TICKET, which will allow your table to eat first after the VIPs.
        </p>
      </div>
    </div>

    <div class="container circle">
      <div class="content">
        <h2>6:00PM - Midnight | Reception </h2>
        <p>
         Eat, Mingle, Drink and Dance the night away!
        </p>
      </div>
    </div>

  </div>
  </div>
  )}
}

export default Schedule;