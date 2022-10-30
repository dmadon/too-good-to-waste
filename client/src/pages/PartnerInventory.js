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
         UnorderedList,
         ListItem, ListIcon } from '@chakra-ui/react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { BUILD_INVENTORY, ADD_TO_INVENTORY, DELETE_FROM_INVENTORY } from '../utils/mutations';
import { useStoreContext } from '../utils/GlobalState';
import dayjs from 'dayjs';



const PartnerInventory = () => {
    
    const dollarFormat = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, '');

    const [value, setValue] = useState('1.00');
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
    const [state, dispatch] = useStoreContext(); 
    const {today} = state;
    const [selectedDate,setSelectedDate] = useState(dayjs(today).format("MM-DD-YYYY"));
    const [inventory,setInventory] = useState('');
    const [formState,setFormState] = useState({_id:'',price:'',stock:''});
    const [list,setList] = useState([])
    const [buildInventory] = useMutation(BUILD_INVENTORY);
    const [addToInventory] = useMutation(ADD_TO_INVENTORY);
    const [deleteFromInventory] = useMutation(DELETE_FROM_INVENTORY);
    const stockEl = document.getElementById('stock');
    const productEl = document.getElementById('productId');
    const priceEl = document.getElementById('price');
    const formEl = document.getElementById('productForm');
    
    
    let products = []
        
    const loadProducts = async () => {
        if(data){
        const things = data.getProducts
        things.forEach(thing => products.push(thing))
        }
    };  
    loadProducts();

    const currentInventory = async () => {
        const inventory = await buildInventory({
            variables:{inventoryDate:selectedDate}
        });
        setInventory(inventory.data.buildInventory);
        // console.table(inventory.data.buildInventory.products);
        setList(inventory.data.buildInventory.products)
        
    };


    useEffect(() => { currentInventory() },[selectedDate]);
    
    console.table(list)
    

    const handleDateChange = (event) => {
        const {value} = event.target;
        setSelectedDate(dayjs(value).format("MM-DD-YYYY"));
    };



    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await addToInventory({
            variables:{
                inventoryId: inventory._id,
                product: {
                  _id: formState._id,
                  price: formState.price,
                  stock: formState.stock
                }
              }
        });
        currentInventory();
        formEl.reset();
        priceEl.value="1"; // WHY DOESN'T THIS WORK????
        stockEl.value="0"; // WHY DOESN'T THIS WORK????
    };

    const handleFormChange = async () => {
        setFormState({
          ...formState,
          _id:productEl.value,
          stock:parseInt(stockEl.value),
          price:parseFloat(priceEl.value)
        });        
    };


    const handleDeleteButton = async (event) => {
        event.preventDefault();
        await deleteFromInventory({
            variables:{
                inventoryId: inventory._id,
                productId: event.target.id
            }
        });
        currentInventory();
    };





    console.log(`Inventory ID for ${selectedDate}: ${inventory._id}`)
    

    return (
        <div>
            <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Add Inventory</Heading>

            <Divider orientation='horizontal' />

            <Box bgColor='#628E90' minH='1500px'>
                <Text className="field-titles" fontFamily='Rubik' ml={5}>Select Date: </Text>
                <Input defaultValue={dayjs(today).format("YYYY-MM-DD")} placeholder="Select Date" type="date" ml={5} bgColor='#F5EFE6' htmlSize={50} width='auto' onChange={handleDateChange}/>

                <form id="productForm" onSubmit={handleFormSubmit}>                
                
                    <Box className="inventory-input" ml={5}>
                        <Text className="field-titles" fontFamily='Rubik' display='inline-block'  >Product: </Text>
                        <Select placeholder="Select Product" bgColor='#F5EFE6' width={'500px'}  id="productId" onChange={handleFormChange} >
                            {products.map((product) => (
                                <option key={product._id} value={product._id} >{product.name}</option>
                            ))}

                        </Select> 

                        <Text className="field-titles" fontFamily='Rubik' display='inline-block'>Quantity: </Text>
                        <NumberInput defaultValue={0} min={0} max={20} bgColor='#F5EFE6' width={'100px'} borderRadius={'8px'} onChange={handleFormChange} onBlur={handleFormChange} onInput={handleFormChange} id="stock">
                            <NumberInputField onClick={handleFormChange}/>
                            <NumberInputStepper onClick={handleFormChange}>
                                <NumberIncrementStepper onClick={handleFormChange}/>
                                <NumberDecrementStepper onClick={handleFormChange}/>
                            </NumberInputStepper>
                        </NumberInput>

                        <Text className="field-titles" fontFamily='Rubik' display='inline-block'>Price: </Text>
                        <NumberInput defaultValue={1} onChange={(valueString) => setValue(parse(valueString))} onBlur={handleFormChange} onInput={handleFormChange}  borderRadius={'8px'} min={0} max={10} bgColor='#F5EFE6' width={'100px'} id="price">
                            <NumberInputField onClick={handleFormChange}/>
                            <NumberInputStepper onClick={handleFormChange}>
                                <NumberIncrementStepper onClick={handleFormChange}/>
                                <NumberDecrementStepper onClick={handleFormChange}/>
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Button type='submit' ml={5} mt={3} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Add to Inventory</Button>

                </form>
                
                
                <Divider orientation='horizontal' mt={10}/>

                <div className="inventory-list">
                    <Heading fontFamily='Pacifico' color='#3C2317' textShadow='0 0 4px #B4CDE6' textAlign={'center'} mt={5} mb={4}>Available Inventory</Heading>
                        
                    {list.map((product) => (
                        <UnorderedList key={product._id} ml={7}>
                            <ListItem fontFamily='Pacifico' fontSize='3xl' color='#F5EFE6' display='inline-block' mr={5}>
                            ✔️ {product.name}
                            </ListItem> 
                            <Text display='inline-block'>In Stock: {product.stock} @</Text> 
                            <Text display='inline-block'>${product.price}.00 each</Text>
                            
                            <Button type='button' size='xs' id={product._id} onClick={handleDeleteButton} ml={2} fontWeight='bold'>X</Button>
                            
                        </UnorderedList>
                    ))}
                </div>
            </Box>
        </div>
    )
}

export default PartnerInventory;