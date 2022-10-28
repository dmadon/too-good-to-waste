import React from 'react';
import { Heading,
         Text,
         UnorderedList,
         ListItem,
         NumberInput,
         NumberInputField,
         NumberInputStepper,
         NumberIncrementStepper,
         NumberDecrementStepper,
         Divider,
         Button } from '@chakra-ui/react';

const CustomerPage = () => {
    return (
        <div>
            <Heading>Pick Your Boxes!</Heading>

            <Divider orientation='horizontal' />

            <Text>Box Types:</Text>
            <UnorderedList>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Produce Box</ListItem>
                        <Text>An assortment of very ripe seasonal fruits and vegetables.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>    
                </div>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Meat, Fish and Poultry Box</ListItem>
                        <Text>Selected cuts of meat, poultry and fish (if available). These items should be cooked or frozen within 24 hours.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>
                </div>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Dairy Box</ListItem>
                        <Text>Various milk and cheese products that are ready for immediate use.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>
                </div>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Eggs</ListItem>
                        <Text>A carton of one dozen eggs.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>
                </div>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Pantry Box</ListItem>
                        <Text>Assorted cereals, snacks, canned and boxed items.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>
                </div>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Prepared Food Box</ListItem>
                        <Text>Cooked entrees and side items ready to eat.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>
                </div>
                <div className="box-type">
                    <ListItem fontSize={'3xl'}>Compost Box</ListItem>
                        <Text>Produce that may be too ripe or damanged for consumption but still a rich source of nutrients for your compost bin.</Text>
                        <NumberInput size='sm' maxW={20} defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    <Button>Add to Cart</Button>
                </div>
            </UnorderedList>
        </div>
    )
}

export default CustomerPage;