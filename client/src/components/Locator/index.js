import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Loc from '../CurrentLocation/index';
import StoresList from '../Menu/index';
import {
  Box,
  // Button,
  ChakraProvider
  // Image,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem
} from '@chakra-ui/react'
// import { Link } from 'react-router-dom';


const style = {
  width: '50%',
  height: '50%'
}


class Locator extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>

        <ChakraProvider>
          <Box display="flex" justifyContent="center">
            Select your store to see availability.
          </Box>
          <Box display="flex" position="center">

            <Map
              google={this.props.google}
              style={style}
              className={'map'}
              initialCenter={{
                lat: 32.979167,
                lng: -96.808891
              }}
              zoom={12}
              onClick={this.onMapClicked}
            >
              <Marker
                title={'Sprouts1'}
                onClick={this.onMarkerClick}
                name={'Sprouts #101 - Plano'}
                position={{ lat: 33.07010, lng: -96.77337 }} />
              <Marker
                title={'Sprouts2'}
                onClick={this.onMarkerClick}
                name={'Sprouts #103 - Dallas (Marsh Ln.'}
                position={{ lat: 32.90867, lng: -96.85540 }} />
              <Marker
                title={'Sprouts3'}
                onClick={this.onMarkerClick}
                name={'Sprouts #106 - Richardson'}
                position={{ lat: 32.97702, lng: -96.76494 }} />
              <Marker
                title={'Current Location'}
                onClick={this.onMarkerClick}
                name={'Current Location'}
                position={{ lat: 32.99, lng: -96.88 }} />
              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                  <h1>Howdy!</h1>
                </div>
              </InfoWindow>
              {/* <Link id="partnerPage" to="/partner{$_id}" className="menu-item">{getPartner.partnerName}</Link> */}
            </Map>
          </Box>
          <Box display="flex" justifyContent="center">
            <Loc />
          </Box>
          <Box display="flex" justifyContent="end">
            <StoresList />
          </Box>
        </ChakraProvider>

      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(Locator)


