import React, { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import Auth from '../../utils/auth';
import './Cart.css';
import { useStoreContext } from '../../utils/GlobalState';
import { Badge, Text } from '@chakra-ui/react';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { idbPromise } from '../../utils/helpers';
import env from "react-dotenv";

// Note: I attempted to put the stripe key in a .env file but I got a lot of console errors telling me not to use my Stripe api key
// (even though it is only a test key). However, when I hard code the key like in the lesson, it likes it just fine.
const key = `${env.STRIPE_KEY}` //this was my attempt at using a .env for the Stripe key

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, {data}] = useLazyQuery(QUERY_CHECKOUT);
    
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

    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
      }, [data]); 

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
            sum += item.price * item.orderQty;
        });
        return sum.toFixed(2);
    };

    function submitCheckout(){
        const products = [];

        state.cart.forEach((item) => {
            products.push(item)
        });
        
        getCheckout({
            variables:{
                products:products
            }
        })
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>✖️</div>
            <h2>Shopping Cart</h2>
            {state.cart.length ? (
                <div id="cart-box">
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className="flex-row space-between">
                        <Text fontFamily='Rubik' fontSize='medium'>Total: ${calculateTotal()}</Text>
                            {
                                Auth.loggedIn() ?
                                    <Badge onClick={submitCheckout}>Checkout</Badge> : <span>(log in to check out)</span>
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

