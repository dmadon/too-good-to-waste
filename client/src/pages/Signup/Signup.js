import React, { useState } from 'react';
import { Heading,
        Input,
        Box,
        Text,
        InputGroup,
        InputRightAddon,
        Button,
        FormLabel } from '@chakra-ui/react';
<<<<<<< HEAD:client/src/pages/Signup/Signup.js
import './Signup.css';
=======
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
>>>>>>> develop:client/src/pages/Signup.js

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
            <Heading fontFamily='Pacifico' id="sign-head" color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Sign Up</Heading>

<<<<<<< HEAD:client/src/pages/Signup/Signup.js
            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3} id="background">             
                <Box mt={5} pl={5} id="input-box">
                    <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">First Name: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your first name" id="name-input" />
                    <br />
                    <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">Last Name: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your last name" id="name-input" />
                    <br />
                    <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">Email address: </FormLabel>
                    <Input htmlSize={47} width='auto' bgColor='#F5EFE6'placeholder="Enter your email address" type="email" id="email-input" />

                    <InputGroup size='md' mt={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id="form">Password: </FormLabel>
                        <Input htmlSize={42} width='auto' bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" id="pw-input" />
                        <InputRightAddon width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightAddon>       
                    </InputGroup>
                </Box>
                <Box id="signup-btn">
                    <Button mt={5} ml={5} pb={1} id="btn" boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90'>Sign Up</Button>
                </Box>
=======
            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3}>             
                    
                <form onSubmit={handleFormSubmit}>
                    <Box mt={5} pl={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>First Name: </FormLabel>
                        <Input htmlSize={50} width='auto' bgColor='#F5EFE6' name='firstName' placeholder="Enter your first name" onChange={handleChange} />
                        <br />
                        <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Last Name: </FormLabel>
                        <Input htmlSize={50} width='auto' bgColor='#F5EFE6' name='lastName' placeholder="Enter your last name" onChange={handleChange} />
                        <br />
                        <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Email address: </FormLabel>
                        <Input htmlSize={47} width='auto' bgColor='#F5EFE6'name='email' placeholder="Enter your email address" type="email" onChange={handleChange} />

                        <InputGroup size='md' mt={5}>
                            <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Password: </FormLabel>
                            <Input htmlSize={42} width='auto' bgColor='#F5EFE6' type={show ? 'text' : 'password'} name='password' placeholder="Enter password" onChange={handleChange} />
                            <InputRightAddon width="4.5rem">
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightAddon>       
                        </InputGroup>
                    </Box>
                    <Button type="submit" mt={5} ml={5} pb={1} boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90' onClick={handleFormSubmit}>Sign Up</Button>
                </form>
                
                
                
                {error && <Text fontFamily='Rubik' mt={2}>✖️ Sign up failed!</Text>}
>>>>>>> develop:client/src/pages/Signup.js
            </Box>
        </div>
    )
}

export default Signup;