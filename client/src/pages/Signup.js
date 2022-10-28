import React from 'react';
import { Heading,
        Input,
        Box,
        InputGroup,
        InputRightAddon,
        Button,
        FormLabel } from '@chakra-ui/react';

const Signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Sign Up</Heading>

            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3}>             
                <Box mt={5} pl={5}>
                    <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>First Name: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your first name" />
                    <br />
                    <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Last Name: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your last name" />
                    <br />
                    <FormLabel mt={5} fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Email address: </FormLabel>
                    <Input htmlSize={47} width='auto' bgColor='#F5EFE6'placeholder="Enter your email address" type="email" />

                    <InputGroup size='md' mt={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Password: </FormLabel>
                        <Input htmlSize={42} width='auto' bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" />
                        <InputRightAddon width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightAddon>       
                    </InputGroup>
                </Box>
                <Button mt={5} ml={5} pb={1} boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90'>Sign Up</Button>
            </Box>
        </div>
    )
}

export default Signup;