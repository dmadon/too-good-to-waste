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

// const PartnerList = ({ partners, partnerName }) => {
//   if (!partners.length) {
//     return <h3>No partners available at this time.</h3>;
//   }

//   return (
//     <div>
//       <ChakraProvider>
//         <Box>
//           <h3>{partnerName}</h3>
//           {partners &&
//             partners.map((partnerName) => (
//               <div key={partnerName._id} className="card mb-3">
//                 <p className="card-header">
//                   <h1>Located at:</h1>
//                   {partnerName.streetAddress}, {partnerName.city}, {partnerName.zip}
//                 </p>
//                 <div className="card-body">
//                   <Button onClick="../../pages/CustomerPage"> Select this store.</Button>
//                 </div>
//               </div>
//             ))}
//         </Box>
//       </ChakraProvider>
//     </div>
//   )
// }

// export default PartnerList;
