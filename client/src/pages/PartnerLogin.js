import React from 'react';
import { Heading,
         Input,
         InputGroup,
         InputRightElement,
         Button,
         FormLabel } from '@chakra-ui/react';

const PartnerLogin = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            <Heading>Partner Log In</Heading>
            
            <FormLabel>Username</FormLabel>
            <Input placeholder="Enter your email username" />

            <InputGroup size='md'>
                <FormLabel>Password</FormLabel>
                <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
                <InputRightElement width="4.5rem">
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>       
            </InputGroup>

            <Button>Login</Button>
        </div>
    )
}

export default PartnerLogin;