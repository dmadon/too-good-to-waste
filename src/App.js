import React, { useState } from 'react';
import './App.css';
import PhotoCarousel from './components/Carousel/Carousel';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';
import NavMenu from './components/NavMenu/NavMenu';
import MapPicker from 'react-google-map-picker'
// import Location from './components/Location';


const App = () => {
  document.title = 'Too Good To Waste';
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }


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
            <Button background='red' className='available' onClick={getLocation}>See what's available near you!</Button>
            <br />
            <p>{status}</p>
            <br />
            {lat && <p>Latitude: {lat}</p>}
            <br />
            {lng && <p>Longitude: {lng}</p>}
            <br />


          </Box>
          <Text fontSize='2xl' textAlign={'center'} mt={10}>*Subject to availability.</Text>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
