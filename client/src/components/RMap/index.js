import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 32.979167,
  lng: -96.808891
};

function RMap({ partners }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: (process.env.REACT_APP_API_KEY)
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
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {partners && partners.map(partner => (
        <Marker
          title={'Sprouts1'}
          name={partner.partnerName}
          position={{ lat: parseFloat(partner.lat), lng: parseFloat(partner.lng) }} />

      ))}
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(RMap)


