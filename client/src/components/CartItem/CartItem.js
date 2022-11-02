import React from 'react';
import { Badge, Text } from '@chakra-ui/react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchasQuantity: parseInt(value)
            });
        }
    };

    return (
        <div className="flex-row" id="cart-box">
            <Text fontFamily="Rubik" fontSize='medium'>{item.name}, ${item.price}</Text>
            <div>
                <span>Qty: </span>
                <input type="number" placeholder="1" value={item.purchasQuantity} onChange={onChange}/>
                <Badge onClick={() => removeFromCart(item)} id="delete">Delete</Badge>
            </div>
        </div>
    );   
}

export default CartItem;