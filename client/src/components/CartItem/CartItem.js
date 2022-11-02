import React from 'react';
import { Badge } from '@chakra-ui/react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const CartItem = ({item}) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        //delete item from IDB
        idbPromise('cart', 'delete', { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
            //delete item from IDB
            idbPromise('cart', 'delete', { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });
            
        }
    };

    return (
        <div className="flex-row">
            <div>{item.name}, ${item.price}</div>
            <div>
                <span>Qty:</span>
                <input type="number" placeholder="1" value={item.purchaseQuantity} onChange={onChange} />
                <Badge onClick={() => removeFromCart(item)}>Delete</Badge>
            </div>
        </div>
    );   
}

export default CartItem;