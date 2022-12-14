import React from 'react';
import { ListItem, Text, Box, 
    SimpleGrid,
    // NumberInput,
    // NumberInputField,
    // NumberInputStepper,
    // NumberIncrementStepper,
    // NumberDecrementStepper,
    Button } from '@chakra-ui/react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import '../../pages/CustomerPage/CustomerPage.css';
import { idbPromise } from '../../utils/helpers';


const ProductItem = (item) => {
    const [state, dispatch] = useStoreContext();
    
    const { cart } = state;
    
    const addToCart = () => {
        //find item with matching ID
        const itemInCart = cart.find((cartItem) => cartItem._id === item._id);

        //update quantity of cart item
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                orderQty: parseInt(itemInCart.orderQty) + 1
            });
            //update quantitiy in IDB
            idbPromise('cart', 'put', {
                ...itemInCart,
                orderQty: parseInt(itemInCart.orderQty) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, orderQty: 1 }
                });
            //add item in cart in IDB
            idbPromise('cart', 'put', { ...item, orderQty: 1 });
        }
    };
  
    return (
        <SimpleGrid columns={1} width='80%' id="columns">
            <Box border='2px' bordercolor='#3C2317' borderRadius='6px' m={5} p={3} id="box">          
                <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6' display='inline-block' id="item-name">{item.name}</ListItem>
                <Text fontSize={'24px'} fontFamily='Rubik' color='#040303' display='inline-block' ml={5} id="item-avail">{item.stock} available</Text>
                <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>{item.description}</Text>
                <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>$ {item.price}.00</Text>
                {/* <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                    <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput> */}
                <Button onClick={addToCart} ml={1} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
            </Box>
        </SimpleGrid>
    )
}

export default ProductItem;