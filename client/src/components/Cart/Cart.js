import React, { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import Auth from '../../utils/auth';
import './Cart.css';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Badge } from '@chakra-ui/react';
import { idbPromise } from '../../utils/helpers';

const Cart = () => {
    const [state, dispatch] = useStoreContext();

    //retrieve items in cart on load
    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]});
        };

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <span role="img" aria-label="cart">🛒</span>
            </div>
        );
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>✖️</div>
            <h2>Shopping Cart</h2>
            {state.cart.length ? (
                <div>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>
                            {
                                Auth.loggedIn() ?
                                    <Badge>Checkout</Badge> : <span>(log in to check out)</span>
                            }
                    </div>
                </div>
            ) : (
                <h3>
                    You haven't added anything to your cart yet!
                </h3>
            )}   
        </div>
    );
};

export default Cart;

