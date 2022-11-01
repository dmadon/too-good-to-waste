import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Text, Button } from '@chakra-ui/react';

const getPartnersList = ({ getPartners, title }) => {
  if (!getPartners.length) {
    return <h3>No stores available currently</h3>;
  }

  return (
    <Box display="flex" width="100%" border="3px solid green" flexDirection="column">
      <Text>{title}</Text>
      <Box display="flex" flexDirection="column" alignItems="space-evenly" margin="4" border="3px solid green" background="lightgray">
        {getPartners &&
          getPartners.map(partner => (
            <Box display="flex" flexDirection="column" margin="2" border="3px solid green" background="lightgray">
              <div key={partner._id} className="card mb-3">
                <Link to="/CustomerPage">
                  <Button size="md" width="90%" margin="2" border="3px solid green" className="card-header">
                    {partner.partnerName}
                  </Button>
                </Link>
                <Box display="flex" justifyContent="center">
                  <p>
                    {partner.streetAddress},
                    <br />
                    {partner.city}, {partner.zip}
                  </p>
                </Box>
              </div>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default getPartnersList;