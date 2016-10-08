import React, { Component } from 'react';
import axios from 'axios';

import CamperList from './camper_list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: []
    };

    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {
        this.setState({
          recentCampers: recentCampers.data,
          allTimeCampers: allTimeCampers.data
        });
      }));
  }

  fetchRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  render() {
    if (!this.state.recentCampers.length && !this.state.allTimeCampers.length) {
      return <div>Loading...</div>
    }

    return (
      <CamperList recentCampers={this.state.recentCampers} />
    );
  }
}
