import React, { useEffect, useState } from 'react';
import { Heading,
         Box,
         Text,
         UnorderedList,       
         Divider } from '@chakra-ui/react';
import ProductItem from '../components/ProductItem/ProductItem';
import { useStoreContext } from '../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_INVENTORY } from '../utils/queries';
import dayjs from 'dayjs';
import { SET_SELECTED_INVENTORY } from '../utils/actions';

const CustomerPage = () => {
    
    const [state, dispatch] = useStoreContext();
    const [products, setProducts] = useState([])
    const {selectedPartner,today,selectedInventory} = state;    
    // const [inventoryData, setInventoryData] = useState([]);
    const defaultDate = dayjs(today).format("MM-DD-YYYY");
    const {data,loading} = useQuery(QUERY_INVENTORY,{
        variables: {
            partnerId:selectedPartner,
            inventoryDate:defaultDate
        }
    })

    

    const getInventory = async () => {
        try{    
            await data;
            if(data){
                dispatch({
                    type: SET_SELECTED_INVENTORY,
                    inventoryData:data.getInventory
                });
                
                setProducts(selectedInventory.inventories[0].products);                
                }
           

        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => { 
        getInventory();
    },[data,loading,selectedInventory]);    

    console.log(`You have selected partner ${state.selectedPartner}`);
    console.log(selectedInventory) 
    console.log(products)

   

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5}>Pick Your Boxes!</Heading>
            <Text fontFamily='Rubik' fontSize={'20px'} textAlign='end'>Your Store: {selectedInventory.partnerName}</Text>

            <Divider orientation='horizontal' />  

            <Box bgColor='#628E90' minH='1500px'>
            <Text fontFamily='Rubik' fontSize={'30px'}>Box Types:</Text>
            
            <UnorderedList listStyleType={'none'}>
                <Box border='2px' bordercolor='#3C2317' borderRadius='6px' mr={4} p={3} mb={4} className="box-type">
                    
                    
                    {products.map((product) => (

                    <ProductItem 
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        stock={product.stock}
                        _id={product._id}
                    />

                    ))}                    
               
                
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