import React, { Component } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'
import Partners from '../Partners';
import MapBox from '../Map';


class Locator extends Component {

  render() {
    return (
      <div>

        <ChakraProvider>

          <Box bgColor='#628E90' minH='3500px' mt={3}>
            <div className='map-box' ml={5}>
              <MapBox />
            </div>
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


