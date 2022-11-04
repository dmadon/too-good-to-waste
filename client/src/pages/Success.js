import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { CREATE_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [createOrder] = useMutation(CREATE_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item);

      if (products.length) {
        const { data } = await createOrder({ variables: { products:products } });
        const productData = data.createOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [createOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;