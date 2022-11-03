import React, { useState } from 'react';
import {
    Heading,
    Input,
    Text,
    Box,
    InputGroup,
    InputRightAddon,
    Button,
    FormLabel
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_PARTNER } from '../utils/mutations';
import Auth from '../utils/auth';
import './Login/Login.css';

const PartnerLogin = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [loginPartner, { error }] = useMutation(LOGIN_PARTNER);
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await loginPartner({
                variables: { username: formState.username, password: formState.password }
            });
            const token = response.data.loginPartner.token;
            Auth.login(token);
            console.log(response.data.loginPartner.partner.partnerName)
            event.preventDefault();
            navigate('/partnerInventory');

            return;
        }
        catch (err) {
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
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' id="cust-head" textAlign={'center'} mt={5} mb={4}>Partner Login</Heading>

            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3} id="background">
                
                <form onSubmit={handleFormSubmit} >               
                    <Box mt={5} pl={5} id="input-box">                               
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Username: </FormLabel>
                        <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your username" name="username" id="email-input" value={formState.username} onChange={handleChange}/>

                        <InputGroup size='md' mt={5}>
                            <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Password: </FormLabel>
                            <Input htmlSize={42} width='auto' bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" name="password" id="password-input" value={formState.password} onChange={handleChange}/>
                            <InputRightAddon width="4.5rem">
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightAddon>
                        </InputGroup>
                    </Box>
                        
                    <Box id="login-btn"> 
                        <Button type='submit' mt={5} ml={5} pb={1} id='btn' boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90' onClick={handleFormSubmit}>Login</Button>
                    </Box>     
                    {error && <Text fontFamily='Rubik' mt={2}>✖️ Incorrect credentials!</Text>}     
                </form>
            </Box>
        </div>
    )
}

export default PartnerLogin;