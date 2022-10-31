import React, { Component } from 'react';
import StoresList from '../Menu/index';
import { Box, ChakraProvider } from '@chakra-ui/react'
import Partners from '../Partners';
import MapBox from '../Map';


class Locator extends Component {

  render() {
    return (
      <div>

        <ChakraProvider>
          <Box display="flex" justifyContent="center">
            <StoresList />
          </Box>
          <Box display="flex" justifyContent="center">
            Select your store to see availability.
          </Box>

          <Box>
            <Box display="flex" justifyContent="space-around" margin="30px" border="3px solid green" >
              <Partners />
              <Box display="flex" justifyContent="start" width="50%" margin="10px" border="3px solid green" >
                <MapBox />
              </Box>
            </Box>

          </Box>

        </ChakraProvider>

      </div>
    )
  }
}

export default Locator;


