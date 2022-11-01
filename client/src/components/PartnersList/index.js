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
    <Box display="flex" width="100%" border="3px solid green" flexDirection="column">
      <Text>{title}</Text>
      <Box display="flex" flexDirection="column" alignItems="space-evenly" margin="4" border="3px solid green" background="lightgray">
        
        {partners &&
          partners.map(partner => (
            <Box display="flex" flexDirection="column" margin="2" border="3px solid green" background="lightgray">
              <div key={partner._id} className="card mb-3">
                <Link to="./CustomerPage">
                  {/* <Button size="md" width="90%" margin="2" border="3px solid green" className="card-header"></Button> */}
                </Link>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <p>
                    {partner.partnerName}
                    <br />
                    {partner.streetAddress},
                    <br />
                    {partner.city}, {partner.zip}
                    <br />
                    </p>
                  <p>
                    {partner.inventories.filter((inv) => (inv.inventoryDate == dayjs(today).format("MM-DD-YYYY"))).map(thing => (
                            <Link to={'/customer'}><Button onClick={handleSelectPartner} background='green' color='lightgray' className='available' key={`btn-${partner._id}`} id={partner._id}>{thing.length} view today's inventory</Button></Link> 
                        ))}
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