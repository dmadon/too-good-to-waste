import React from 'react';
import { Box } from '@chakra-ui/react';
// importing the useQuery Hook from Apollo Client, allowing req to the connected GraphQL server (available to the app using <ApolloProvider> in App.js)
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PARTNERS } from '../../utils/queries'
import PartnersList from '../PartnersList';



const Partners = () => {
  // use useQuery Hook to make query req
  const { loading, data } = useQuery(QUERY_ALL_PARTNERS);
  const getPartners = data?.getPartners || [];
  console.log(getPartners);

  return (

    <Box>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <PartnersList getPartners={getPartners} title="Participating Stores" />
      )}

    </Box>

  )
};


export default Partners
