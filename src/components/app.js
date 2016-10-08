import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: []
    };

    this.fetchRecentCampers();
  }

  fetchRecentCampers() {
    console.log('before:', this.state.recentCampers);
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        this.setState({recentCampers: response.data});
        console.log('after:', this.state.recentCampers);
      });
  }

  render() {
    if (!this.state.recentCampers.length) {
      return <div>Loading...</div>
    }

    return (
      <div>Finished Loading!</div>
    );
  }
}
