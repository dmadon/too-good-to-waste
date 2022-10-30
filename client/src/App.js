import './App.css';
import PhotoCarousel from './components/Carousel/Carousel';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';
import NavMenu from './components/NavMenu/NavMenu';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

const style = {
  width: '50%',
  height: '25%'
}

class App extends Component {
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
          <Box>
            <NavMenu />

            <Box display="flex" justifyContent="center">
              <h1 className="blk-let">TOO</h1>
              <h1 className="csv-let">Good</h1>
              <h1 className="blk-let">TO</h1>
              <h1 className="csv-let">Waste</h1>
            </Box>

            <Box mt={7} mb={7}>
              <PhotoCarousel />
            </Box>

            <Text fontSize='3xl' textAlign={'center'} p={5}>
              If 25% of the food currently being lost or wasted globally was saved, it would be enough to feed 870
              million people around the world. Do your part to help reduce food waste by purchasing discounted grocery
              items that would have otherwise been thrown away.
            </Text>

            <Box display="flex" justifyContent="center" mt={10}>
              <Button background='red' className='available'>See what's available near you!</Button>
              <br />
              <Map
                google={this.props.google}
                style={style}
                className={'map'}
                initialCenter={{
                  lat: 32.979167,
                  lng: -96.808891
                }}
                zoom={10}
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
                  </div>
                </InfoWindow>
              </Map>
            </Box>

            <Text fontSize='2xl' textAlign={'center'} mt={10}>*Subject to availability.</Text>
          </Box>
        </ChakraProvider>
      </div >
    );
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(App)

