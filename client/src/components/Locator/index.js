import React, { Component } from 'react';
import StoresList from '../Menu/index';
import { Box, ChakraProvider, Divider } from '@chakra-ui/react'
import Partners from '../Partners';
import MapBox from '../Map';
import './style.css';


class Locator extends Component {

  render() {
    return (
      <div>

        <ChakraProvider>
          <Box display="flex" justifyContent="center">
            <StoresList />
          </Box> 

          <Box bgColor='#628E90' minH='3500px' mt={3}>
         
            <Box className='map-box' display='inline-flex' ml={5}>
                <MapBox />
            </Box>
           
            <Box display='flex' justifyContent='right'>
                <Partners />
            </Box>

          </Box>

        </ChakraProvider>

      </div>
    )
  }
}

export default Locator;


