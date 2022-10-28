import React from 'react';
import { Heading, 
         Text, 
         Select,
         Button,
         Input,
         NumberInput,
         NumberInputField,
         NumberInputStepper,
         NumberIncrementStepper,
         NumberDecrementStepper,
         List,
         ListItem,
         ListIcon } from '@chakra-ui/react';

const PartnerInventory = () => {
    
    const format = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, '');

    const [value, setValue] = React.useState('1.00');
    
    return (
        <div>
            <Heading>Add Inventory</Heading>

            <Text className="field-titles">Select Date: </Text>
            <Input placeholder="Select Date" type="date" />

            <div className="inventory-input">
                <Text className="field-titles">Product: </Text>
                <Select placeholder="Select Product">
                    <option value="produce">Produce Box</option>
                    <option value="meat">Meat Box</option>
                    <option value="dairy">Dairy Box</option>
                    <option value="eggs">Eggs(by the dozen)</option>
                    <option value="pantry">Pantry Box</option>
                    <option value="prepared">Prepared Food Box</option>
                    <option value="compost">Compost Box</option>
                </Select>
                
                <Text className="field-titles">Quantity: </Text>
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <NumberInput onChange={(valueString) => setValue(parse(valueString))} value={format(value)} max={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>

            <Button>Add to Inventory</Button>

            <div className="inventory-list">
                <Heading>Available Inventory</Heading>
                    <List spacing={2}>
                        <ListItem>
                            {/* <ListIcon as={MdCheckCircle} /> */}
                        </ListItem>
                    </List>

                    <Button>Delete Inventory</Button>
            </div>
        </div>
    )
}

export default PartnerInventory;