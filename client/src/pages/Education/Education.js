import React from 'react';
import { Box, Text, Heading, ListItem, UnorderedList, Link} from '@chakra-ui/react';
import FoodWaste from '../../assets/images/food-waste-image.jpg';
import './Education.css';
//import react animations
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const Education = () => {
    const Zoom = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Education on Food Waste</Heading>

            <Zoom><Box className="photo-text">
                <img src={FoodWaste} alt="trash bags full of waste in the street" />  
                
                <Text className="info-text" fontSize='2xl' textAlign={'center'} p={5}>The United States throws away more 
                food than any country in the world - approximately 40 million tons each year. Wasting food has environmental 
                consequences: wasting water and energy as well as creating greenhouse gasses that are harmful to the environment.
                Americans waste more than $218 billion each year on food with dairy being the food item we toss out the most. 
                The average American family with 4 members tosses out $1,600 a year in uneaten produce. 
                ‘Best if used by’ means “the product may not taste or perform as expected but is safe to consume.”</Text>
            </Box></Zoom>  

            <Box minH='1000px' bgColor='#B4CDE6' color='#040303' pt={3}> 
                <Box ml={5}>
                    <Text fontFamily='Rubik'>Here are some ways you can combat food waste:</Text>
                            
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' mt={3} mb={3}>Composting</Heading>
                
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' mt={3} mb={3}>Recipes</Heading>
                    
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' mt={3} mb={3}>Shopping Tips</Heading>
                        <UnorderedList>
                            <ListItem>Keep an inventory of items you throw away</ListItem>
                            <ListItem>Only buy stuff you like and you know you’ll eat</ListItem>
                            <ListItem>Create a reusable shopping list</ListItem>
                            <ListItem>Don’t do huge shopping trips</ListItem>
                            <ListItem>Buy produce the day you need them</ListItem>
                            <ListItem>Get fruits and veggies that last longer</ListItem>
                            <ListItem>Stock up on frozen foods</ListItem>
                            <ListItem>Know exactly what you want before you go shopping</ListItem>
                            <ListItem>Don’t shop when you’re hungry</ListItem>
                            <ListItem>Store and organize all your food properly when you get home</ListItem>
                        </UnorderedList>
                    
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' mt={3} mb={3}>Links to Resources</Heading>
                        <UnorderedList>
                            <ListItem>Visit the <Link href="https://www.usda.gov/foodwaste/faqs" isExternal>USDA website</Link></ListItem>
                            <ListItem>Visit the <Link href="https://www.epa.gov/recycle/preventing-wasted-food-home" isExternal>US Environmental Protection Agency's website</Link></ListItem>
                            <ListItem>Visit the <Link href="https://www.nrdc.org/food-waste" isExternal>Natural Resources Defense Council (NRDA) website</Link></ListItem>
                        </UnorderedList>  
                </Box>          
            </Box>
        </div>
    )
}

export default Education;
