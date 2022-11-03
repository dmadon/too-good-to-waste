import { MapContainer, TileLayer } from 'react-leaflet';
import React from 'react';
import MyMarkers from '../LeafletMarkers';
import 'leaflet/dist/leaflet.css';


// { useEffect, useState } 

// import { useStoreContext } from '../../utils/GlobalState';
// import { SET_SELECTED_PARTNER, SET_SELECTED_INVENTORY } from '../../utils/actions';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_ALL_PARTNERS } from '../../utils/queries';
// import dayjs from 'dayjs';




const Leaflet = async () => {



  return (
    <div className="leafletContainer">
      <MapContainer className="leaflet-container" style={{ height: "100%" }} center={[33.07010, -96.77337]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyMarkers className="leaflet-container" />
      </MapContainer>
    </div>
  )
};

export default Leaflet;
