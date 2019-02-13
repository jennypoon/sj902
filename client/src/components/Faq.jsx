import React from 'react';
import ceremonyLocation from '../images/ceremony_location.png'
import parkingLocation from '../images/parking.png'

function Faq() {
  return (
    <div>
      <div className="questionComponent">
        <p className="question">
          Can we bring our kids?
        </p>
        <p className="answer">
          We love kids and love playing with them but unfortunately, we do not have room unless you are immediate family! Take this as an opportunity to let your hair down and have fun! We love you and want you to be here, and if the only reason why you can’t come is because you can’t find a sitter, let us know and we’ll think of something.
        </p>
      </div>

      <div className="questionComponent">
        <p className="question">
          What should I wear? Are there colour I need to avoid?
        </p>
        <p className="answer">
        Semi-formal attire. Bridesmaid will be wearing light pink and groomsmen will be wearing grey. Please no jeans or casual T-shirt’s. I mean, you could, but just a warning, the photographer will either avoid you all night or they’ll call you out and put you on the worst dress list (not my words, theirs!). We will be dancing the night away so please wear comfortable shoes. TB to the 90’s baby! If you got songs, let us know when you RSVP!
        </p>
      </div>

      <div className="questionComponent">
        <p className="question">
        Where is the event?
        </p>
        <p className="answer">
        The reception is held at South Bonson Community Center and the ceremony will be held on the wharf nearby. There will be signs to direct you from the parking lot.
        </p> <br/>
        <img src={ceremonyLocation} width="100%" height="100%" alt="ceremony location" />
      </div>

      <div className="questionComponent">
        <p className="question">
          Is there parking?
        </p>
        <p className="answer">
          Yes! Parking is free. Please print this <a href="https://docs.google.com/document/d/1FIkEgIjHucjm_Y0VeZA-qo69UYID61Srx4NWYGFuEns/edit?usp=sharing" target="_blank" rel="noopener noreferrer">parking pass</a> and place it on your dashboard when you come.
          You can park anywhere highlighed in red:
        </p>
        <br/>
        <img src={parkingLocation} width="100%" height="100%" alt="parking location" />
        <p>
          We highly recommend that you carpool. Not because it’s environmentally good to do so and will reduce your carbon footprint, parking is rather limited, unless you don’t mind walking a bit.
        </p>
      </div>

      <div className="questionComponent">
        <p className="question">
          The venue is in Pitt Meadows?! Omg so far... why?
        </p>
        <p className="answer">
        Why not?! Get away from the crazy traffic and enjoy the calmness of the Fraser River. You’ll be surprised to know there is life outside of Vancouver and Burnaby! I promise you, the suburbs are very civilized.
        </p>
      </div>

      <div className="questionComponent">
        <p className="question">
          What time should we arrive?
        </p>
        <p className="answer">
          The ceremony starts at 4pm sharp. Please arrive by 3:45pm at the latest so you’re seated before it starts.
        </p>
      </div>

      <div className="questionComponent">
        <p className="question">
          Do you have a registry?
        </p>
        <p className="answer">
          With all that we have, we've been truly blessed. Your presence and good wishes are all that we request! But if you desire to give nonetheless, Monetary gift is the one we suggest.
        </p>
      </div>

      <div className="questionComponent">
        <p className="question">
          What food will be served?
        </p>
        <p className="answer">
          Western buffet style! We are aware of most of our guests dietary restrictions and we will do our best to accommodate.
        </p>
      </div>
  </div>
    )
}


export default Faq;