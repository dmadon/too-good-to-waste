import React from 'react';
import { Heading,
        Input,
        Box,
        InputGroup,
        InputRightAddon,
        Button,
        FormLabel } from '@chakra-ui/react';
import './Signup.css';

const Signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            <Heading fontFamily='Pacifico' id="sign-head" color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Sign Up</Heading>

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
            </Box>
        </div>
    )
}

export default Signup;