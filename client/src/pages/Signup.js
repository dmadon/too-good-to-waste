import React from 'react';
import { Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormLabel } from '@chakra-ui/react';

const Signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            <Heading>Sign Up</Heading>

            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter your first name" />

            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter your last name" />

            <FormLabel>Email address</FormLabel>
            <Input placeholder="Enter your email address" type="email" />

            <InputGroup size='md'>
                <FormLabel>Password</FormLabel>
                <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
                <InputRightElement width="4.5rem">
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>       
            </InputGroup>

            <Button>Sign Up</Button>
        </div>
    )
}

export default Signup;