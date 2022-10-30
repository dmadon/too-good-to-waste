import React, { useEffect } from 'react';
import { Heading,
         Box,
         Text,
         UnorderedList,       
         Divider } from '@chakra-ui/react';
import ProductItem from '../components/ProductItem/ProductItem';

const CustomerPage = () => {

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5}>Pick Your Boxes!</Heading>
            <Text fontFamily='Rubik' fontSize={'20px'} textAlign='end'>Your Store: </Text>

            <Divider orientation='horizontal' />

            <Box bgColor='#628E90' minH='1500px'>
            <Text fontFamily='Rubik' fontSize={'30px'}>Box Types:</Text>
            
            <UnorderedList listStyleType={'none'}>
                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    
                    <ProductItem />
                
                </Box>

                {/* <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>Meat, Fish and Poultry Box</ListItem>
                        <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>Selected cuts of meat, poultry and fish (if available). These items should be cooked or frozen within 24 hours.</Text>
                        
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
                </Box>
                
                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>Dairy Box</ListItem>
                        <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>Various milk and cheese products that are ready for immediate use.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
                </Box>

                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>Eggs</ListItem>
                        <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>A carton of one dozen eggs.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
                </Box>

                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>Pantry Box</ListItem>
                        <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>Assorted cereals, snacks, canned and boxed items.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
                </Box>

                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>Prepared Food Box</ListItem>
                        <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>Cooked entrees and side items ready to eat.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
                </Box>

                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} className="box-type">
                    <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>Compost Box</ListItem>
                        <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>Produce that may be too ripe or damanged for consumption but still a rich source of nutrients for your compost bin.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
                </Box> */}

            </UnorderedList>
            </Box>
        </div>
    )
}

export default CustomerPage;