const db = require('./connection');
const {Product,Partner, User} = require('../models');
const bcrypt = require ('bcrypt');

db.once('open', async () => {
    await Product.deleteMany();

    const products = await Product.insertMany([
        { 
            name: 'Produce Box',
            description: 'An assortment of very ripe seasonal fruits and vegetables.',
            image: 'Placeholder Image of Produce',
            price: 2.00,
            stock: 0,
            orderQty: 0       
        },
        { 
            name: 'Meat, Fish and Poultry Box',
            description: 'Selected cuts of meat and poultry. These items should be cooked or frozen within 24 hours.',
            image: 'Placeholder Image of Meat and Poultry',
            price: 2.00,
            stock: 0,
            orderQty: 0     
        },
        { 
            name: 'Dairy Box',
            description: 'Various milk and cheese products that are ready for immediate use.',
            image: 'Placeholder Image of Milk and Cheese',
            price: 2.00,
            stock: 0,
            orderQty: 0      
        },
        { 
            name: 'Eggs',
            description: 'Quantities will vary.',
            image: 'Placeholder Image of Eggs',
            price: 1.00,
            stock: 0,
            orderQty: 0      
        },
        { 
            name: 'Pantry Box',
            description: 'Assorted cereals, canned, and boxed items. May include products containing gluten.',
            image: 'Placeholder Image of Grains',
            price: 1.00,
            stock: 0,
            orderQty: 0        
        },
        { 
            name: 'Prepared Food Box',
            description: 'Cooked entrees and prepared side items ready to eat.',
            image: 'Placeholder Image of Prepared Foods',
            price: 2.00,
            stock: 0,
            orderQty: 0     
        },
        {
            name: 'Compost Box',
            description: 'Produce that may be too ripe or too damaged for consumption, but still a rich source of nutrients for your compost bin.',
            image: 'Placeholder Image of Compost',
            price: 2.00,
            stock: 0,
            orderQty: 0
        }
    ]);



    console.log('Products Seeded!');


    await Partner.deleteMany();

    const partnerData = [
        {
            username:'sprouts101',
            email:'sprouts101@sprouts.com',
            password:'sprouts101',
            partnerName:'Sprouts #101 - Plano',
            streetAddress:'4100 Legacy Dr., #401',
            city:'Plano',
            state:'TX',
            zip:'75024',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts102',
            email:'sprouts102@sprouts.com',
            password:'sprouts102',
            partnerName:'Sprouts #102 - Flower Mound',
            streetAddress:'2301 Cross Timbers Rd.',
            city:'Flower Mound',
            state:'TX',
            zip:'75028',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts103',
            email:'sprouts103@sprouts.com',
            password:'sprouts103',
            partnerName:'Sprouts #103 - Dallas (Marsh Ln.)',
            streetAddress:'11722 Marsh Ln.',
            city:'Dallas',
            state:'TX ',
            zip:'75229',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts104',
            email:'sprouts104@sprouts.com',
            password:'sprouts104',
            partnerName:'Sprouts #104 - Southlake',
            streetAddress:'220 Randol Mill Ave.',
            city:'Southlake',
            state:'TX',
            zip:'76092',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts105',
            email:'sprouts105@sprouts.com',
            password:'sprouts105',
            partnerName:'Sprouts #105 - Frisco',
            streetAddress:'5190 Preston Rd.',
            city:'Frisco',
            state:'TX',
            zip:'75034',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts106',
            email:'sprouts106@sprouts.com',
            password:'sprouts106',
            partnerName:'Sprouts #106 - Richardson',
            streetAddress:'1343 W. Campbell Rd.',
            city:'Richardson',
            state:'TX',
            zip:'75080',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts107',
            email:'sprouts107@sprouts.com',
            password:'sprouts107',
            partnerName:'Sprouts #107 - Murphy',
            streetAddress:'207 E. FM 544',
            city:'Murphy',
            state:'TX',
            zip:'75094',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts108',
            email:'sprouts108@sprouts.com',
            password:'sprouts108',
            partnerName:'Sprouts #108 - Coppell',
            streetAddress:'110 W. Sandy Lake Rd.',
            city:'Coppell',
            state:'TX',
            zip:'75019',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts110',
            email:'sprouts110@sprouts.com',
            password:'sprouts110',
            partnerName:'Sprouts #110 - Round Rock',
            streetAddress:'110 Interstate Hwy. 35 N.',
            city:'Round Rock',
            state:'TX',
            zip:'78681',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts112',
            email:'sprouts112@sprouts.com',
            password:'sprouts112',
            partnerName:'Sprouts #112 - Austin (Great Hills)',
            streetAddress:'10225 Research Blvd.',
            city:'Austin',
            state:'TX',
            zip:'78759',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts113',
            email:'sprouts113@sprouts.com',
            password:'sprouts113',
            partnerName:'Sprouts #113 - Cedar Hill',
            streetAddress:'362 E. FM 1382',
            city:'Cedar Hill',
            state:'TX',
            zip:'75104',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts114',
            email:'sprouts114@sprouts.com',
            password:'sprouts114',
            partnerName:'Sprouts #114 - Fort Worth',
            streetAddress:'4650 SW Loop 820',
            city:'Fort Worth',
            state:'TX',
            zip:'76109',
            inventories:[],
            orders:[]
        },
        {
            username:'sprouts115',
            email:'sprouts115@sprouts.com',
            password:'sprouts115',
            partnerName:'Sprouts #115 - Carrollton',
            streetAddress:'1745 E. Hebron Pkwy.',
            city:'Carrollton',
            state:'TX',
            zip:'75010',
            inventories:[],
            orders:[]
        },
    ];

    const hashedPasswordsPartner = partnerData.map(
        async(partner) => {
            let hashedPw = await bcrypt.hash(partner.password, 10);
            partner.password = hashedPw;
            return partner;
        }
    )

    const updatedPartners = await Promise.all(hashedPasswordsPartner)

    const seedPartners = await Partner.insertMany(updatedPartners)      

    console.log('Partners Seeded!');



    await User.deleteMany();
    
    const userData = [
        {
            firstName:'Alli',
            lastName:'Brodine',
            email:'alli@gmail.com',
            password:'alli1234',
            orders:[]
        },
        {
            firstName:'Deanna',
            lastName:'Madon',
            email:'deanna@gmail.com',
            password:'deanna1234',
            orders:[]
        },
        {
            firstName:'AJ',
            lastName:'McCraw',
            email:'aj@gmail.com',
            password:'mccraw1234',
            orders:[]
        },        
        {
            firstName:'Amanda',
            lastName:'Perry',
            email:'amanda@gmail.com',
            password:'amanda1234',
            orders:[]
        }
    ];
    
    const hashedPasswordsUser = userData.map(
        async(user) => {
            let hashedPw = await bcrypt.hash(user.password, 10);
            user.password = hashedPw;
            return user;
        }
    )

    const updatedUsers = await Promise.all(hashedPasswordsUser)

    const seedUsers = await User.insertMany(updatedUsers)
    
    console.log('Users Seeded!');


    process.exit();
})