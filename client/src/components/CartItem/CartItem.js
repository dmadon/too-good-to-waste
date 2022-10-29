import React from 'react';
import { Badge } from '@chakra-ui/react';

const CartItem = ({ product }) => {
    return (
        <div className="flex-row">
            <div>{product.name}, ${product.price}</div>
            <div>
                <span>Qty:</span>
                <input type="number" placeholder="1" value={product.purchasQuantity} />
                <Badge>Delete</Badge>
            </div>
        </div>
    );   
}

export default CartItem;