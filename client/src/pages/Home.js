import React, {useEffect, useState} from 'react';
import '../App.css';
import { Box, Text, Button } from '@chakra-ui/react';
import PhotoCarousel from '../components/Carousel/Carousel';

// Deanna added these imports to test setting the partner's _id to global state...
import { useStoreContext } from '../utils/GlobalState';
import { SET_SELECTED_PARTNER} from '../utils/actions';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PARTNERS } from '../utils/queries';



const Home = () => {
    const [state, dispatch] = useStoreContext();
    const {data, loading} = useQuery(QUERY_ALL_PARTNERS);
    const [partners, setPartners] = useState([])

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
},[data,loading])



console.log(partners)


    return (
        <div>
            <Box mb={7} mt={7}>       
                <PhotoCarousel /> 
            </Box>

            <Text fontSize='3xl' textAlign={'center'} p={5}>
                If 25% of the food currently being lost or wasted globally was saved, it would be enough to feed 870
                million people around the world. Do your part to help reduce food waste by purchasing discounted grocery 
                items that would have otherwise been thrown away. 
            </Text>

            <Box display="flex-" justifyContent="center" mt={10}>
                <Button background='#B4CDE6' className='available'>See what's available near you!</Button>
                
                {/* Deanna added these buttons to test the logic for clicking on a selected partner and adding that partner's _id 
                to the global state before directing the customer to that partner's inventory */}
                
                {partners.map((partner) => (
                    <Link to={'/customer'}><Button onClick={handleSelectPartner} background='#B4CDE6' className='available' id={partner._id}>{partner.partnerName}</Button></Link>

                ))}
                
              
                


            </Box>

            <Text fontSize='2xl' textAlign={'center'} mt={10}>*Subject to availability.</Text>
      </div>
    )
}

export default Home;