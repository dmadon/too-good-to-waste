import React, {useEffect, useState} from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { useStoreContext } from '../../utils/GlobalState';
import { SET_SELECTED_INVENTORY} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PARTNERS } from '../../utils/queries';
import PartnersList from '../PartnersList';
import MapBox from '../Map';
import './style.css';


const Locator = () => {



  const [state, dispatch] = useStoreContext();
  const {data, loading} = useQuery(QUERY_ALL_PARTNERS);
  const [partners, setPartners] = useState([]);
  const {selectedInventory} = state;

  const clearSelectedInventory = async () => {
      if(selectedInventory){
          await dispatch({
              type:SET_SELECTED_INVENTORY,
              inventoryData:{}
          });
      }
  };

  useEffect(() => {
      clearSelectedInventory();
  },[]);

  const getPartners = async () => {
    try{
        await data;
        if(data){
            setPartners(data.getPartners);
        }
    }catch(err){
        console.log(err)
    }
};

useEffect(() => {
    getPartners();
},[data,loading,setPartners,partners])





  return (
    <div>

<ChakraProvider>

        <Box bgColor='#628E90' minH='3500px' mt={3}>
        
          <Box className='map-box' display='inline-flex' ml={5}>
              <MapBox 
                partners={partners}
              />
          </Box>
          
          <Box display='flex' justifyContent='right'>
              <PartnersList 
                partners={partners}
              />
          </Box>

        </Box>

      </ChakraProvider>

    </div>
  )
}


export default Locator;


