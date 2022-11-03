import React from 'react';
import '../App.css';
import { Box, Text, Button } from '@chakra-ui/react';
import PhotoCarousel from '../components/Carousel/Carousel';

import { Link } from 'react-router-dom';



const Home = () => {

    return (
        <div>
            <Box mb={7} mt={7}>
                <PhotoCarousel />
            </Box>

            <Text fontSize='3xl' textAlign={'center'} p={5}>
                If 25% of the food currently being lost or wasted globally was saved, it would be enough to feed 870
                million people around the world. Do your part to help reduce food waste by purchasing discounted grocery
                items that would have otherwise been thrown away.
            </Text>

            <Box display="flex" justifyContent="center" mt={10}>
                <Link to={'/locator'}><Button background='#B4CDE6' className='available' key='go-to-locator'>See what's available near you!</Button></Link>
            </Box>

            <Text fontSize='2xl' textAlign={'center'} mt={10}>*Subject to availability.</Text>
        </div>
    )
}

export default Home;