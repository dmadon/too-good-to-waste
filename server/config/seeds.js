const db = require('./connection');
const {Product} = require('../models');

db.once('open', async () => {
    await Product.deleteMany();

    const products = await Product.insertMany([
        { 
            name: 'Produce Box',
            description: 'An assortment of very ripe seasonal fruits and vegetables.',
            image: 'Placeholder Image of Produce',
            price: 2.00,
            stock: 0        
        },
        { 
            name: 'Meat and Poultry Box',
            description: 'Selected cuts of meat and poultry. These items should be cooked or frozen within 24 hours.',
            image: 'Placeholder Image of Meat and Poultry',
            price: 2.00,
            stock: 0        
        },
        { 
            name: 'Dairy Box',
            description: 'Various milk and cheese products that are ready for immediate use.',
            image: 'Placeholder Image of Milk and Cheese',
            price: 2.00,
            stock: 0        
        },
        { 
            name: 'Eggs',
            description: 'Quantities will vary.',
            image: 'Placeholder Image of Eggs',
            price: 1.00,
            stock: 0        
        },
        { 
            name: 'Grain Box',
            description: 'Assorted cereals and bulk grains. May include products containing gluten.',
            image: 'Placeholder Image of Grains',
            price: 1.00,
            stock: 0        
        },
        { 
            name: 'Prepared Food Box',
            description: 'Cooked entrees and prepared side items ready to eat.',
            image: 'Placeholder Image of Prepared Foods',
            price: 2.00,
            stock: 0        
        },
    ]);

    console.log('Products Seeded!');

    process.exit();
})