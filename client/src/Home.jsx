import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SideImages from "./components/SideImages.jsx";
import Countdown from "./components/Countdown.jsx";
import OurStory from "./components/OurStory.jsx";
import Venue from "./components/Venue.jsx";
import Schedule from "./components/Schedule.jsx";
import RSVP from "./components/RSVP.jsx";
import Faq from "./components/Faq.jsx";
import Team from "./components/Team.jsx";
import LoadingPage from "./LoadingPage.jsx";

import logo from "./images/vista_logo.png";
import floralPinkPeach from './images/floral_piece_pink_peach.png';

import "react-tabs/style/react-tabs.css";
import "./styling/tabs.css"
import './App.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state= {
     isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }));
   }

  render() {

    const tabs = (
      <div className="tabStyle">
        <Tabs>
          <TabList>
            <Tab> Our Story </Tab>
            <Tab> The Venue </Tab>
            <Tab> Schedule </Tab>
            <Tab> RSVP </Tab>
            <Tab> VIPs </Tab>
            <Tab> FAQs </Tab>
          </TabList>

          <TabPanel>
            <div className="storyComponent">
              <OurStory />
            </div>
          </TabPanel>
          <TabPanel>
            <Venue />
          </TabPanel>
          <TabPanel>
            <Schedule />
          </TabPanel>
          <TabPanel>
            <RSVP />
          </TabPanel>
          <TabPanel>
            <Team />
          </TabPanel>
          <TabPanel>
            <Faq />
          </TabPanel>
        </Tabs>
      </div>
      )

    return (
      <div>
        { this.state.isLoading ? (
          <LoadingPage />
          ) : (
          <div>
            <img src={logo} className="jsLogo" alt="logo" />
            <img className="floralPinkPeach" src={floralPinkPeach} alt="floral" />
            <Countdown date="2019-08-24T00:00:00" />
            <SideImages />
            { tabs }
          </div>
        )}
      </div>
    );
  }
}

export default Home;
