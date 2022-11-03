import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Box, Heading, Text } from '@chakra-ui/react';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.getUser;
  }

  return (
    <>
      <div className="container my-1">
        
        {user ? (
          <>
            <Text fontFamily='Rubik' fontSize='medium'><Link to="/">← Back to Home</Link></Text>

            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' id="cust-head" textAlign={'center'} mt={5} mb={4}>
              Order History for {user.firstName} {user.lastName}
            </Heading>

            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3} id="background">

            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <Text fontFamily='Rubik' fontSize='large'>
                  {order.purchaseDate}
                </Text>
                <Text fontFamily='Rubik' fontSize='large' className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      
                        <Text fontFamily='Rubik' fontSize='large'>{name}</Text>
                  
                      <div>
                        <span>${price}</span>
                      </div>
                      
                    </div>
                  ))}
                </Text>
              </div>
            ))}
            </Box>
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;