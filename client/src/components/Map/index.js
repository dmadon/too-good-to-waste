import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

// import CurrentLocation from '../CurrentLocation/index';

const style = {
  width: '40%',
  height: '30%'
}

// todo: put {lat} and {lng} values dynamically into Map Markers
// issues with this class extends rather than arrow function...
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
          <Marker
            title={'Sprouts4'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 32.938819086046365, lng: -97.18686727312794 }} />
          <Marker
            title={'Sprouts5'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 33.130485892763005, lng: -96.8024739510058 }} />
          <Marker
            title={'Sprouts6'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 32.97718892789185, lng: -96.7648912867765 }} />
          <Marker
            title={'Sprouts7'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 33.019347456408525, lng: -96.60722368432796 }} />
          <Marker
            title={'Sprouts8'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 32.97072550768889, lng: -96.99544314429177 }} />
          <Marker
            title={'Sprouts9'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 30.508060775732048, lng: -97.68700660549865 }} />
          <Marker
            title={'Sprouts10'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 30.411385090504233, lng: -97.74653239958388 }} />
          <Marker
            title={'Sprouts11'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 32.60507314019597, lng: -96.93937069242247 }} />
          <Marker
            title={'Sprouts12'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 32.696584742094124, lng: -97.39525262004439 }} />
          <Marker
            title={'Sprouts13'}
            onClick={this.onMarkerClick}
            name={'Sprouts #10'}
            position={{ lat: 33.025620032600244, lng: -96.88859814249454 }} />
          <Marker
            title={'Current Location'}
            onClick={this.onMarkerClick}
            name={'Current Location'}
            position={{ lat: 32.99, lng: -96.88 }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapBox)


