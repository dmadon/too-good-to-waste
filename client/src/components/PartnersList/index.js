import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useStoreContext } from '../../utils/GlobalState';
import { SET_SELECTED_PARTNER } from '../../utils/actions';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const PartnersList = ({ partners }) => {


  const [state, dispatch] = useStoreContext();

  const { selectedPartner, today } = state;

  const handleSelectPartner = async (event) => {
    // the id attribute of the clicked button should be set to that partner's _id
    const { id } = event.target;

    // use the id of the clicked button to set the selectedPartner in global state
    await dispatch({
      type: SET_SELECTED_PARTNER,
      _id: id
    });
  
  };


  if (!partners.length) {
    return <h3>No stores available currently</h3>;
  }

  return (
    <Box>
      <Text fontFamily='Pacifico' fontSize='30px' color='#F5EFE6' textShadow='2px 2px #040303' fontWeight='normal' mb={3}>Participating Stores</Text>
      <Box>

        {partners && partners.map(partner => (
          <Box >
            <div key={partner._id}>
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
                    .filter((inv) => (inv.inventoryDate === dayjs(today).format("MM-DD-YYYY")))
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