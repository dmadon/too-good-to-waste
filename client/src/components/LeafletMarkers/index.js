import { Marker, Popup } from 'react-leaflet';
import React from 'react';


const points = [
  {
    lat: 52.230020586193795,
    lng: 21.01083755493164,
    title: 'point 1'
  },
  {
    lat: 52.22924516170657,
    lng: 21.011320352554325,
    title: 'point 2'
  },
  {
    lat: 52.229511304688444,
    lng: 21.01270973682404,
    title: 'point 3'
  },
  {
    lat: 52.23040500771883,
    lng: 21.012146472930908,
    title: 'point 4'
  },
];




const MyMarkers = ({ data }) => {
  return data.map(({ lat, lng, title }, index) => (
    <Marker
      key={index}
      position={{ lat, lng }}
    >
      <Popup>{title}</Popup>
    </Marker>
  ));
}

export default MyMarkers;