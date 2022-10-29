import React from 'react';
import CartItem from '../CartItem/CartItem';
import Auth from '../../utils/auth';
import './Cart.css';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';

const Cart = () => {
    const [state, dispatch] = useStoreContext();

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

    console.log(state);

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>✖️</div>
            <h2>Shopping Cart</h2>
            <div>
                <CartItem product={{name: "Produce Box", price: 3, purchaseQuantity: 2}} />
                <CartItem product={{name: "Dairy Box", price: 5, purchaseQuantity: 1}} />

                <div className="flex-row space-between">
                    <strong>Total: $8</strong>
                    { Auth.loggedIn() ? 
                        <button>Checkout</button> : <span>log in to check out</span>}
                </div>
            </div>
        </div>
    );
};

export default Cart;

