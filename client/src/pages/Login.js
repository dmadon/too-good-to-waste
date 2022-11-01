import React,{useState} from 'react';
import { Heading,
         Box,
         Text,
         Input,
         InputGroup,
         InputRightAddon,
         Button,
         FormLabel } from '@chakra-ui/react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [formState,setFormState] = useState({email:'',password:''});
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser({
                variables:{email:formState.email, password:formState.password}
            });
            const token = response.data.loginUser.token;
            Auth.login(token);
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
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Customer Login</Heading>

            <Box minH='1500px' bgColor='#B4CDE6' color='#040303' pt={3}>                
                <Box mt={5} pl={5}>
                    <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Email address: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your email address" type="email" name="email" onChange={handleChange}/>

                    <InputGroup size='md' mt={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block'>Password: </FormLabel>
                        <Input htmlSize={42} width='auto' ml={8} bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" name="password" onChange={handleChange} />
                        <InputRightAddon width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightAddon>       
                    </InputGroup>
                </Box>
                <Button mt={5} ml={5} pb={1} boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90' onClick={handleFormSubmit}>Login</Button>
                {error && <Text fontFamily='Rubik' mt={2}>✖️ Login failed!</Text>}
            </Box>
        </div>
    )
}

export default Login;