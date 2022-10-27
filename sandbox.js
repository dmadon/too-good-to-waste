const inventories = [
    {
        inventoryDate: '10-25-22',
        name:'inventory 1',
        products:['product 1', 'product 2']
    },
    {
        inventoryDate: '10-26-22',
        name:'inventory 2',
        products:['product 3', 'product 4']
    }
];



const found = inventories.find((inv) => inv.inventoryDate === "10-25-22");

console.log(found)