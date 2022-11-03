import React from 'react';
import { Box, Text, Heading, ListItem, UnorderedList, OrderedList, Link, List} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import FoodWaste from '../../assets/images/food-waste-image.jpg';
import './Education.css';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const Education = () => {
    const Zoom = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' id="ed-head" textAlign={'center'} mt={5} mb={4}>Education on Food Waste</Heading>

            <Zoom><Box className="photo-text">
                <img src={FoodWaste} alt="trash bags full of waste in the street" />  
                
                <Text className="info-text" id="info-text" fontSize='xl' textAlign={'center'} p={5}>The United States throws away more 
                food than any country in the world - approximately 40 million tons each year. Wasting food has environmental 
                consequences: wasting water and energy as well as creating greenhouse gasses that are harmful to the environment.
                Americans waste more than $218 billion each year on food with dairy being the food item we toss out the most. 
                The average American family with 4 members tosses out $1,600 a year in uneaten produce. 
                ‘Best if used by’ means “the product may not taste or perform as expected but is safe to consume.”</Text>
            </Box></Zoom>  

            <Box minH='1000px' bgColor='#B4CDE6' color='#040303' pt={3}> 
                <Box ml={5} pb={5}>
                    <Text fontFamily='Rubik' id="combat">Here are some ways you can combat food waste:</Text>
                            
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' mt={3} mb={3} id="comp-head">Composting</Heading>
                    <Text fontFamily='Rubik' fontSize='18px' id="compost">Composting is a natural process where microorganisms, bacteria, and insects break down organic materials
                        such as leaves, grass clippings, and certain kitchen scraps into a soil-like substance called compost. It is a form of  
                        recycling, a natural way of returning nutrients to the soil which then feeds the plants and veggies you grow.</Text>
                    
                    <Heading fontFamily='Rubik' fontWeight='extrabold' fontSize='20px' fontStyle='italic' mt={2} mb={2}>Things you can compost:</Heading>

                    <UnorderedList listStyleType={'none'}>
                        <ListItem><CheckCircleIcon /> Fruit and vegetable scraps</ListItem>
                        <ListItem><CheckCircleIcon /> Eggshells (though they take a while to break down)</ListItem>
                        <ListItem><CheckCircleIcon /> Grass and plant clippings</ListItem>
                        <ListItem><CheckCircleIcon /> Dry leaves</ListItem>
                        <ListItem><CheckCircleIcon /> Finely chopped wood and bark chips</ListItem>
                        <ListItem><CheckCircleIcon /> Shredded newspaper</ListItem>
                        <ListItem><CheckCircleIcon /> Straw</ListItem>
                        <ListItem><CheckCircleIcon /> Coffee grounds</ListItem>
                        <ListItem><CheckCircleIcon /> Sawdust from untreated wood</ListItem>
                    </UnorderedList>

                    <Heading fontFamily='Rubik' fontWeight='extrabold' fontSize='20px' fontStyle='italic' mt={2} mb={2}>Things you can NOT compost:</Heading>

                    <UnorderedList listStyleType={'none'}>
                        <ListItem><SmallCloseIcon />Meat and fat</ListItem>
                        <ListItem><SmallCloseIcon />Fish</ListItem>
                        <ListItem><SmallCloseIcon />Poultry</ListItem>
                        <ListItem><SmallCloseIcon />Bones</ListItem>
                        <ListItem><SmallCloseIcon />Dairy products</ListItem>
                        <ListItem><SmallCloseIcon />Plastic or synthetic fibers</ListItem>
                        <ListItem><SmallCloseIcon />Diseased plants</ListItem>
                        <ListItem><SmallCloseIcon />Vegetable oils</ListItem>
                        <ListItem><SmallCloseIcon />Invasive weeds</ListItem>
                        <ListItem><SmallCloseIcon />Pet waste</ListItem>
                    </UnorderedList>

                    <Heading fontFamily='Rubik' fontWeight='extrabold' fontSize='20px' fontStyle='italic' mt={2} mb={2}>How to compost:</Heading>

                    <OrderedList>
                        <ListItem>Separate your waste.</ListItem>
                        <ListItem>Prepare a place to make your compost. Outside is best, or even use a small container inside. Just make sure
                            it is a warm and/or sunny spot.
                        </ListItem>
                        <ListItem>Fill your container. Try to create a balance of green and brown waste. Cover the container.</ListItem>
                        <ListItem>Mix your compost once a week. If it's dry, sprinkle it with water.</ListItem>
                        <ListItem>Ready to use! Depending on what you use, it will take several weeks for the organic matter to break down.
                            When it resembles a dark, rich soil, it can be used like fertilizer.
                        </ListItem>
                    </OrderedList>
                
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' mt={3} mb={3}>Recipes</Heading>

                    <UnorderedList>
                        <ListItem>Leftover Vegetable Soup <Link href="https://www.thespruceeats.com/leftover-vegetable-soup-recipe-435758"
                            isExternal><ExternalLinkIcon mx='2px' /></Link></ListItem>
                        <ListItem>Chicken Stock <Link href="https://www.simplyrecipes.com/recipes/how_to_make_chicken_stock/"
                            isExternal><ExternalLinkIcon mx='2px' /></Link></ListItem>
                        <ListItem>Instant Pot Bone Broth <Link href="https://www.thespruceeats.com/instant-pot-bone-broth-4775483"
                            isExternal><ExternalLinkIcon mx='2px' /></Link></ListItem>
                        <ListItem>Banana Bread <Link href="https://sallysbakingaddiction.com/best-banana-bread-recipe/"
                            isExternal><ExternalLinkIcon mx='2px' /></Link></ListItem>
                    </UnorderedList>
                    
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
                            <ListItem>Visit the <Link href="https://www.usda.gov/foodwaste/faqs" isExternal>
                                USDA website <ExternalLinkIcon mx='2px' /></Link></ListItem>
                            <ListItem>Visit the <Link href="https://www.epa.gov/recycle/preventing-wasted-food-home" isExternal>
                                US Environmental Protection Agency's website <ExternalLinkIcon mx='2px' /></Link></ListItem>
                            <ListItem>Visit the <Link href="https://www.nrdc.org/food-waste" isExternal>
                                Natural Resources Defense Council (NRDA) website <ExternalLinkIcon mx='2px' /></Link></ListItem>
                        </UnorderedList>  
                </Box>          
            </Box>
        </div>
    )
}

export default Education;
