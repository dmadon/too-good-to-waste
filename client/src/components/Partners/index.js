import React from 'react';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';

// import { QUERY_ALL_PARTNERS } from '../../utils/queries'



const PartnerList = ({ partners, partnerName }) => {
  if (!partners.length) {
    return <h3>No partners available at this time.</h3>;
  }

  return (
    <div>
      <ChakraProvider>
        <Box>
          <h3>{partnerName}</h3>
          {partners &&
            partners.map((partnerName) => (
              <div key={partnerName._id} className="card mb-3">
                <p className="card-header">
                  <h1>Located at:</h1>
                  {partnerName.streetAddress}, {partnerName.city}, {partnerName.zip}
                </p>
                <div className="card-body">
                  <Button onClick="../../pages/CustomerPage"> Select this store.</Button>
                </div>
              </div>
            ))}
        </Box>
      </ChakraProvider>
    </div>
  )
}

export default PartnerList;
