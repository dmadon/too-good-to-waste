import React, {useEffect, useState} from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useStoreContext } from '../../utils/GlobalState';
import { SET_SELECTED_PARTNER, SET_SELECTED_INVENTORY} from '../../utils/actions';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PARTNERS } from '../../utils/queries';
import dayjs from 'dayjs';

const PartnersList = ({ title }) => {
  
  const [state, dispatch] = useStoreContext();
  const {data, loading} = useQuery(QUERY_ALL_PARTNERS);
  const [partners, setPartners] = useState([]);
  const {selectedInventory, today} = state;

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

  const handleSelectPartner = async (event) => {
      // the id attribute of the clicked button should be set to that partner's _id
      const {id} = event.target;

      // use the id of the clicked button to set the selectedPartner in global state
      await dispatch({
          type: SET_SELECTED_PARTNER,
          _id:id
      });
  }; 

  console.log(`selected partner id: ${state.selectedPartner}`)

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

  console.log(partners)
  
  if (!partners.length) {
    return <h3>No stores available currently</h3>;
  }

  return (
    <Box>
      <Text fontFamily='Pacifico' fontSize='30px' color='#F5EFE6' textShadow='2px 2px #040303' fontWeight='normal' mb={3}>{title}</Text>
      <Box>
        
        {partners && partners.map(partner => (
            <Box >
              <div key={partner._id}>
                <Link to="./CustomerPage">
                  </Link>
                <Box border='2px' bordercolor='##040303' borderRadius='6px' mr={8} p={3} mb={4} bgColor='#F5EFE6'>
                  <Text fontFamily='Rubik' color='#040303'>
                    {partner.partnerName}
                    <br />
                    {partner.streetAddress},
                    <br />
                    {partner.city}, {partner.zip}
                    <br />
                  </Text>
                  <p>
                    {partner.inventories
                      .filter((inv) => (inv.inventoryDate == dayjs(today).format("MM-DD-YYYY")))
                      .filter((match) => (match.productCount > 0))
                      .map(invRecord => (
                      <Link to={'/customer'}><Button onClick={handleSelectPartner} display='inline-block' bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'} key={`btn-${partner._id}`} id={partner._id}>{invRecord.length}View Today's Inventory</Button></Link>)
                      )}
                  </p>               
                </Box>
              </div>
            </Box>
          ))}
      
      </Box>
    </Box>
  );
};

export default PartnersList;