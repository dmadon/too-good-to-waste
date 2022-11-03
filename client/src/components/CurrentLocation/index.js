// import { position } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Circle } from 'react-leaflet';
import tileLayer from '../TileLayer/index';

const center = [52.22977, 21.01178];

const Location = () => {
  const map = useMap();
  const [position, setPosition] = useState(null)

  useEffect(() => {
    map.locate({
      setView: true
    })
    map.on('locationfound', (event) => {
      setPosition(event.latlng)
    })
  }, [map])

  return position
    ? (
      <>
        <Circle center={center}
          weight={2}
          color={'red'}
          fillColor={'red'}
          fillOpacity={0.1}
          radius={500}>
        </Circle>
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      </>
    )
    : null
}

const MapWrapper = () => {
  return (
    <MapContainer
      height="100%"
      center={center}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />
      <Location />
    </MapContainer>
  )
}

export default MapWrapper;



// import React, { Component } from 'react';
// // import ReactDOM from 'react-dom';

// const mapStyles = {
//   map: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%'
//   }
// };


// export class CurrentLocation extends Component {
//   constructor(props) {
//     super(props);
//     const { lat, lng } = this.props.initialCenter;

//     this.state = {
//       currentLocation: {
//         lat: lat,
//         lng: lng
//       }
//     }
//   };

//   // To handle scenarios when the GoogleMaps API is not available due to network issues, etc.
//   // Also, if browser's current location is shared, recenters the map to that location
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//     if (prevState.currentLocation !== this.state.currentLocation) {
//       this.recenterMap();
//     }
//   };


//   componentDidMount() {
//     // checks if user has given permission to share location
//     if ("geolocation" in navigator) {
//       console.log("Available");
//     } else {
//       console.log("Not Available");
//     }
//     // to handle if page is already loaded
//     if (this.props.centerAroundCurrentLocation) {
//       if (navigator && navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(pos => {
//           const coords = pos.coords;
//           this.setState({
//             currentLocation: {
//               lat: coords.latitude,
//               lng: coords.longitude
//             }
//           });
//         });
//       }
//     }
//     this.loadMap();

//   }

//   // use panTo() method to change the center of the map
//   recenterMap() {
//     const map = this.map;
//     const current = this.state.currentLocation;
//     const google = this.props.google;
//     const maps = google.maps;

//     if (map) {
//       let center = new maps.LatLng(current.lat, current.lng);
//       map.panTo(center);
//     }
//   }




//   render() {
//     return (
//       <h4>Using geolocation JavaScript API in React</h4>
//     )
//   }
// }

// // render(<CurrentLocation />, document.getElementById("root"));

// export default CurrentLocation;