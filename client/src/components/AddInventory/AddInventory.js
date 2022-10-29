import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { BUILD_INVENTORY, ADD_TO_INVENTORY, DELETE_FROM_INVENTORY, DELETE_INVENTORY } from '../../utils/mutations';

const AddInventory = () => {
    const [inventoryList, setInventoryList] = useState('');

    const [addToInventory] = useMutation(ADD_TO_INVENTORY);
    const [deleteFromInventory] = useMutation(DELETE_FROM_INVENTORY);
}


export default AddInventory;

















{/*<Button ml={5} mt={3} bgColor='#B4CDE6' fontFamily='Pacifico' color='#3C2317' fontSize={'18px'}>Delete Inventory</Button> */}