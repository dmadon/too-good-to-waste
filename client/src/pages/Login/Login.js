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
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [formState,setFormState] = useState({email:'',password:''});
    const [loginUser, { error }] = useMutation(LOGIN_USER);


    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser({
                variables:{email:formState.email, password:formState.password}
            });
            const token = response.data.loginUser.token;
            Auth.login(token);

            navigate('/locator');

            return;
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
            <Box /*minH='1500px'*/ borderRadius='lg' bgColor='#B4CDE6' color='#040303' p={5} className="background"> 

            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' id="cust-head" textAlign={'center'} mb={4}>Customer Login</Heading>

            <form onSubmit={handleFormSubmit}>               
                <Box mt={5} pl={5} id="input-box">
                    <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id='label'>Email address: </FormLabel>
                    <Input htmlSize={50} width='auto' bgColor='#F5EFE6' placeholder="Enter your email address" type="email" name="email" id="email-input" value={formState.email} onChange={handleChange}/>

                    <InputGroup size='md' mt={5}>
                        <FormLabel fontFamily={'Rubik'} fontWeight={'bold'} display='inline-block' id='pw-label'>Password: </FormLabel>
            
                            <Input htmlSize={42} display='inline-block' width='auto' ml={8} bgColor='#F5EFE6' type={show ? 'text' : 'password'} placeholder="Enter password" name="password" value={formState.password} id="password-input" onChange={handleChange} />
                            <InputRightAddon id="show-btn" width="4.5rem">
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightAddon> 
                       
                    </InputGroup>
                </Box>
                <Box id="login-btn"> 
                    <Button mt={5} ml={5} pb={1} id='btn' boxShadow='0 0 10px #F5EFE6' fontFamily={'Pacifico'} fontSize='20px' bgColor='#3C2317' color='#628E90' onClick={handleFormSubmit}>Login</Button>
                </Box>        
                {error && <Text fontFamily='Rubik' mt={2}>✖️ Login failed!</Text>}
            </form>
            </Box>
        </div>
    )
}

export default Login;