import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 32.979167,
  lng: -96.808891
};

function RMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        title={'Sprouts1'}
        name={'Sprouts #101 - Plano'}
        position={{ lat: 33.07010, lng: -96.77337 }} />
      <Marker
        title={'Sprouts2'}
        name={'Sprouts #103 - Dallas (Marsh Ln.'}
        position={{ lat: 32.90867, lng: -96.85540 }} />
      <Marker
        title={'Sprouts3'}
        name={'Sprouts #106 - Richardson'}
        position={{ lat: 32.97702, lng: -96.76494 }} />
      <Marker
        title={'Sprouts4'}
        name={'Sprouts #10'}
        position={{ lat: 32.938819086046365, lng: -97.18686727312794 }} />
      <Marker
        title={'Sprouts5'}
        name={'Sprouts #10'}
        position={{ lat: 33.130485892763005, lng: -96.8024739510058 }} />
      <Marker
        title={'Sprouts6'}
        name={'Sprouts #10'}
        position={{ lat: 32.97718892789185, lng: -96.7648912867765 }} />
      <Marker
        title={'Sprouts7'}
        name={'Sprouts #10'}
        position={{ lat: 33.019347456408525, lng: -96.60722368432796 }} />
      <Marker
        title={'Sprouts8'}
        name={'Sprouts #10'}
        position={{ lat: 32.97072550768889, lng: -96.99544314429177 }} />
      <Marker
        title={'Sprouts9'}
        name={'Sprouts #10'}
        position={{ lat: 30.508060775732048, lng: -97.68700660549865 }} />
      <Marker
        title={'Sprouts10'}
        name={'Sprouts #10'}
        position={{ lat: 30.411385090504233, lng: -97.74653239958388 }} />
      <Marker
        title={'Sprouts11'}
        name={'Sprouts #10'}
        position={{ lat: 32.60507314019597, lng: -96.93937069242247 }} />
      <Marker
        title={'Sprouts12'}
        name={'Sprouts #10'}
        position={{ lat: 32.696584742094124, lng: -97.39525262004439 }} />
      <Marker
        title={'Sprouts13'}
        name={'Sprouts #10'}
        position={{ lat: 33.025620032600244, lng: -96.88859814249454 }} />
      <Marker
        title={'Current Location'}
        name={'Current Location'}
        position={{ lat: 32.99, lng: -96.88 }} />
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(RMap)