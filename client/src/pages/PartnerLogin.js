import React, {useState} from 'react';
import { Heading,
        Input,
        Box,
        InputGroup,
        InputRightAddon,
        Button,
        FormLabel } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_PARTNER } from '../utils/mutations';
import Auth from '../utils/auth';


import { useMutation } from '@apollo/client';
import { LOGIN_PARTNER } from '../utils/mutations';
import Auth from '../utils/auth';


const PartnerLogin = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [formState,setFormState] = useState({username:'',password:''});
    const [loginPartner, { error }] = useMutation(LOGIN_PARTNER);


    // TODO: insert a little error message somewhere on the login page for if the user enters invalid credentials
        
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginPartner({
                variables:{username:formState.username, password:formState.password}
            });
            const token = response.data.loginPartner.token;
            Auth.login(token);
            console.log(response.data.loginPartner.partner.partnerName)
        }
        catch(err){
            console.log(err);
        }        
    };

    const handleChange = async (event) => {
        const { name, value } = event.target;
        
        setFormState({
        ...formState,
        [name]: value,
        });
        
    };

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Partner Login</Heading>

            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3}>
                <Box mt={5} pl={5}>
                    <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Username: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your email username" name="username" onChange={handleChange}/>

                    <InputGroup size='md' mt={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Password: </FormLabel>
                        <Input htmlSize={42} width='auto' bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" name="password" onChange={handleChange}/>
                        <InputRightAddon width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightAddon>       
                    </InputGroup>
                </Box>
                <Button mt={5} ml={5} pb={1} boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90' onClick={handleFormSubmit}>Login</Button>
            </Box>
        </div>
    )
}

export default PartnerLogin;