import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const getPartnersList = ({ getPartners, title }) => {
  if (!getPartners.length) {
    return <h3>No stores available currently</h3>;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Text>{title}</Text>
      <Box display="flex" flexDirection="column" alignItems="space-evenly" margin="4" border="3px solid green" background="lightgray">
        {getPartners &&
          getPartners.map(partner => (
            <Box display="flex" flexDirection="column" margin="2" border="3px solid green" background="lightgray">
              <div key={partner._id} className="card mb-3">
                <Button size="lg" margin="2" border="3px solid green" className="card-header">
                  {partner.partnerName}
                </Button>
                <div className="card-body">
                  <p>
                    {partner.streetAddress},
                    {partner.city},{partner.state}{partner.zip}
                  </p>
                </div>
              </div>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default getPartnersList;