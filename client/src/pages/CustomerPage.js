import React, { useEffect, useState } from 'react';
import {
    Heading,
    Box,
    Text,
    UnorderedList,
    Divider
} from '@chakra-ui/react';
import ProductItem from '../components/ProductItem/ProductItem';
import { useStoreContext } from '../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_INVENTORY } from '../utils/queries';
import dayjs from 'dayjs';
import { SET_SELECTED_INVENTORY } from '../utils/actions';

const CustomerPage = () => {

    const [state, dispatch] = useStoreContext();
    const [products, setProducts] = useState([])
    const { selectedPartner, today, selectedInventory } = state;
    const defaultDate = dayjs(today).format("MM-DD-YYYY");
    const { data, loading } = useQuery(QUERY_INVENTORY, {
        variables: {
            partnerId: selectedPartner,
            inventoryDate: defaultDate
        }
    })

    const getInventory = async (data) => {
        try {
            await data;
            if (data) {
                dispatch({
                    type: SET_SELECTED_INVENTORY,
                    inventoryData: data.getInventory
                });
                setProducts(selectedInventory.inventories[0].products);
            }
            else {
                setProducts([])
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getInventory();

    }, [data, loading, selectedInventory, dispatch]);


    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5}>Pick Your Boxes!</Heading>
            <Text fontFamily='Rubik' fontSize={'20px'} textAlign='end'>Your Store: {selectedInventory.partnerName} </Text>

            <Divider orientation='horizontal' />

            <Box bgColor='#628E90' minH='1500px'>
                <Text fontFamily='Rubik' fontSize={'30px'}>Box Types:</Text>

                <UnorderedList listStyleType={'none'}>

                    {products.map((product) => (

                        <ProductItem
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            stock={product.stock}
                            _id={product._id}
                        />))}

                </UnorderedList>

            </Box>
        </div>
    )
}

export default CustomerPage;