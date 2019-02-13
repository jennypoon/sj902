import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styling/timeline.css'

function OurStory() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jenny: I think we bonded over the fact we were both from Surrey...like what are the chances?! (｡◕‿◕｡)"
          style={{ backgroundImage: `url(require("../images/background.jpg")}` } }
        >
          <h4 className="vertical-timeline-element-subtitle">April 15, 2012 - First Encounter </h4>
          <p>
            Leora (Bridesmaid) and Wilson (Groomsman), who are highschool friends, invited Jenny and Stephen to join their friends to run the Vancouver Sun Run. After the race, they decided to go out for Pho but, being the keener that she is, Jenny wanted to go back to the library to study for her finals...and life went on.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jenny: Just so we're all clear - I wasn't stalking him... I was just curious! ┬┴┤( ･ _├┬┴ Stephen: I wasn't playing hard to get, I just don't use Facebook! She's lucky I decided to sign into my account that night ~(˘▾˘~)"
        >
          <h4 className="vertical-timeline-element-subtitle">April 27, 2012 - First Move</h4>
          <p>
            On her way home, Jenny noticed Stephen sitting a few seats away from her on the same bus. She decided to miss her usual stop to see where he would off and thankfully, it was the next stop! She casually got off after him and acted surprised when she bumped into him. Turns out that they literally lived 10 minutes from each other! That evening, Jenny decided to ask Stephen out on a date through Facebook, which he agreed to after 3 DAYS.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jenny: FYI - In addition to Surrey having the best Viet restaurants in the Lower Mainland, ლ(´ڡ`ლ) come to Main Choice Resturant for AWESOME CHINESE FOOD! (Main Choice Restaurant is Stephen's family restaurant, I was not paid to say this (ღ˘⌣˘ღ))"
        >
          <h4 className="vertical-timeline-element-subtitle">May 2, 2012 - First Date</h4>
          <p>
          Because Jenny couldn't join them for Pho after the Sun Run, they decided to grab Pho in Surrey. After lunch, they leisurely walked around Bear Creek park and talked the day away.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stephen: I was ready to ask her in May but she didn't give me a chance! ᕙ(⇀‸↼‶)ᕗ She bolted out of the car so fast at the end of our date"
        >
          <h4 className="vertical-timeline-element-subtitle">June 14, 2012 - We're an Item</h4>
          <p>
            Stephen finally had the courage to make things official after 2 months of dating. The next day, Jenny got her wisdom teeth removed and refused to show her face for a week+.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education eventBox"
          date="Jenny: One time, He mailed french macarons from Paris to my workplace, what a sweetheart right?! (｡◕‿‿◕｡)"
        >
          <h4 className="vertical-timeline-element-subtitle">Sept - Dec 2012 - Long Distance</h4>
          <p>
          Stephen moved to Paris for a semester. For 4 months, Stephen would wake up at 5AM in the morning to Skype with Jenny. Every. Single. Day. Doing long distance wasn't easy, but Stephen made it work and was strong for the both of them.
          </p>
        </VerticalTimelineElement>

         <VerticalTimelineElement
          className="vertical-timeline-element--education eventBox"
          date="FAST FORWARD! --- Jenny: Stephen was actually in Whitehorse at the time, so I had to give him a tour of the house using WhatsApp video. (._.) ( l: ) ( .-. ) ʕ•ᴥ•ʔ ( :l ) (._.) ( l: ) Stephen: The quality was so laggy, I didn't see ANYTHING but she's more picky than I am. If she's happy, I'm happy! (°ロ°)☝"
        >
          <h4 className="vertical-timeline-element-title">July 2017 - First Home</h4>
          <p>
          Jenny and Stephen has been shopping around for a house but couldn't seem to find one they both liked. Then, their realtor sent them a listing where the previous sale fell through. After some very adult conversations and a stressful evening, an offer was put in. And just like that, they were homeowners!
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education eventBox"
          date="Jenny: He doesn't even know how to play the piano! I was so impressed! ♥‿♥ I don't even know when he had the time to practice since we see each other pretty much everyday! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
        >
          <h4 className="vertical-timeline-element-subtitle">January 28, 2012 - The Proposal</h4>
          <p>
            It was a very normal date night - They went to West Vancouver for some delicious pie and then Jenny took Stephen to her favorite Turkish restaurant. They came home and Stephen decorated the piano with lanterns he bought for her 6 years ago. Then he started playing "Stand By Me" on the piano, grabbed the ring and went down on one knee (cue the Awwwss!)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Lets get the party started! ♪~ ᕕ( ᐛ ) ᕗ"
        >
          <h3 className="vertical-timeline-element-title">August 24, 2019 - The Wedding</h3>
          <p>
          Get ready to have a great time
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
}

export default OurStory;