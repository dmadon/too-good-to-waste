import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

function StoresList() {
  return (
    <div>
      <ChakraProvider>
        <Box>
          <Menu display="flex" justifyContent="end" >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} closeOnSelect={true} bgColor='#B4CDE6'>
              Choose Your Store
            </MenuButton>
            <MenuList>
              <MenuItem minH='48px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://placekitten.com/100/100'
                  alt='Sprouts - Plano'
                  mr='12px'
                />
                <span>Sprouts - Plano</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://placekitten.com/120/120'
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span>Sprouts - Dallas</span>
              </MenuItem>
              <MenuItem minH='48px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://placekitten.com/100/100'
                  alt='Fluffybuns the destroyer'
                  mr='12px'
                />
                <span>Sprouts - Richardson</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </ChakraProvider>
    </div>
  )

}

export default StoresList;