import React, { Component } from 'react';
// import { render } from "react-dom";


// Need to get data about user's current location in longitude and latitude
class Loc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <h4>Using geolocation JavaScript API in React</h4>
    )
  }
}

// render(<Loc />, document.getElementById("root"));

export default Loc;