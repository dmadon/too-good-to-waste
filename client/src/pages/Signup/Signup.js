import React, { useState } from 'react';
import { Heading,
        Input,
        Box,
        Text,
        InputGroup,
        InputRightAddon,
        Button,
        FormLabel } from '@chakra-ui/react';
import './Signup.css';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [formState, setFormState] = useState({ firstName:'', lastName:'', email:'', password:'' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const navigate = useNavigate();

    //update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //handle form submit
    const handleFormSubmit= async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            
            const token = data.addUser.token;
            Auth.login(token);

            navigate('/locator');

            return;
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Box /*minH='1500px'*/ borderRadius='lg' bgColor='#B4CDE6' color='#040303' p={5} id="background">     

            <Heading fontFamily='Pacifico' id="sign-head" color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mb={4}>Sign Up</Heading>        
                
            <form onSubmit={handleFormSubmit}>
                <Box mt={5} pl={5} id="input-box">
                    <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">First Name: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your first name" value={formState.firstName} name="firstName" onChange={handleChange} id="name-input" />
                    <br />
                    <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">Last Name: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your last name" value={formState.lastName} name="lastName" onChange={handleChange} id="name-input" />
                    <br />
                    <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">Email address: </FormLabel>
                    <Input htmlSize={47} width='auto' bgColor='#F5EFE6'placeholder="Enter your email address" value={formState.email} name="email" onChange={handleChange} type="email" id="email-input" />

                    <InputGroup size='md' mt={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">Password: </FormLabel>
                        <Input htmlSize={42} width='auto' bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" value={formState.password} name="password" onChange={handleChange} id="pw-input" />
                        <InputRightAddon width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightAddon>       
                    </InputGroup>
                </Box>
                <Box id="signup-btn">
                    <Button mt={5} ml={5} pb={1} id="btn" boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90' onClick={handleFormSubmit}>Sign Up</Button>
                </Box>
                {error && <Text fontFamily='Rubik' mt={2}>✖️ Sign up failed!</Text>}
            </form>
            </Box>
        </div>
    )
}

export default Signup;