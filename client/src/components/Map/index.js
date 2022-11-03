import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

// import CurrentLocation from '../CurrentLocation/index';

const style = {
  width: '600px',
  height: '600px'
}

class MapBox extends Component {

  render() {
    return (
      <div>
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
          {/* <Marker
            title={'Sprouts4'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} />
          <Marker
            title={'Sprouts5'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} />
          <Marker
            title={'Sprouts6'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} />
          <Marker
            title={'Sprouts7'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} />
          <Marker
            title={'Sprouts8'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} />
          <Marker
            title={'Sprouts9'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} />
          <Marker
            title={'Sprouts10'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: , lng: - }} /> */}
          {/* <Marker
                title={'Current Location'}
                onClick={this.onMarkerClick}
                name={'Current Location'}
                position={{ lat: 32.99, lng: -96.88 }} /> */}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapBox)


