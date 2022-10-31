import React from 'react';
import { ListItem, Text, Box, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button } from '@chakra-ui/react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';


const ProductItem = (item) => {
    const [state, dispatch] = useStoreContext();

    const { cart,selectedInventory } = state;
    
    const addToCart = () => {
        //find item with matching ID
        const itemInCart = cart.find((cartItem) => cartItem._id === item._id);

        //update quantity of cart item
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
                });
        }
    };
   

    return (
        <Box>          
            <ListItem fontSize={'3xl'} fontFamily='Pacifico' color='#F5EFE6'>{item.name}</ListItem>
            <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>{item.description}</Text>
            <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>$ {item.price}.00</Text>
            <Text fontSize={'16px'} fontFamily='Rubik' color='#040303'>{item.stock} available</Text>
            <NumberInput size='sm' maxW={20} defaultValue={0} min={0} display='inline-block' bgColor='#F5EFE6'>
                <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            <Button onClick={addToCart} ml={5} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Cart</Button>
        </Box>
    )
}

export default ProductItem;