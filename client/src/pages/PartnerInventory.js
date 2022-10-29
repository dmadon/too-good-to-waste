import React,{useState, useEffect} from 'react';
import { Heading, 
         Text, 
         Box,
         Select,
         Button,
         Input,
         Divider,
         NumberInput,
         NumberInputField,
         NumberInputStepper,
         NumberIncrementStepper,
         NumberDecrementStepper,
         List,
         ListItem,
         ListIcon } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';


const PartnerInventory = () => {
    
    const format = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, '');

    const [value, setValue] = useState('1.00');

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    async function speak(){
        await data
        console.log(data)}
    
    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Add Inventory</Heading>

            <Divider orientation='horizontal' />

            <Box bgColor='#628E90' minH='1500px'>
                <Text className="field-titles" fontFamily='Rubik' ml={5}>Select Date: </Text>
                <Input placeholder="Select Date" type="date" ml={5} bgColor='#F5EFE6' htmlSize={50} width='auto' />

                <Box className="inventory-input" ml={5}>
                    <Text className="field-titles" fontFamily='Rubik' display='inline-block'>Product: </Text>
                    <Select placeholder="Select Product" bgColor='#F5EFE6' width={'500px'} >
                        <option value="produce">Produce Box</option>
                        <option value="meat">Meat Box</option>
                        <option value="dairy">Dairy Box</option>
                        <option value="eggs">Eggs(by the dozen)</option>
                        <option value="pantry">Pantry Box</option>
                        <option value="prepared">Prepared Food Box</option>
                        <option value="compost">Compost Box</option>
                    </Select>
                    
                    <Text className="field-titles" fontFamily='Rubik' display='inline-block'>Quantity: </Text>
                    <NumberInput min={0} max={20} bgColor='#F5EFE6' width={'100px'} borderRadius={'8px'}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    <Text className="field-titles" fontFamily='Rubik' display='inline-block'>Price: </Text>
                    <NumberInput onChange={(valueString) => setValue(parse(valueString))} value={format(value)} borderRadius={'8px'} min={0} max={10} bgColor='#F5EFE6' width={'100px'}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>

                <Button ml={5} mt={3} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Inventory</Button>

                <Divider orientation='horizontal' mt={10}/>

                <div className="inventory-list">
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Available Inventory</Heading>
                        <List spacing={2}>
                            <ListItem>
                                {/* <ListIcon as={MdCheckCircle} /> */}
                            </ListItem>
                        </List>

                        <Button ml={5} mt={3} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Delete Inventory</Button>
                </div>
            </Box>
        </div>
    )
}

export default PartnerInventory;