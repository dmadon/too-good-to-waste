const { AuthenticationError } = require('apollo-server-express');
const {Product,User,Partner, Inventory,Order} = require('../models');
const {signUserToken, signPartnerToken} = require('../utils/auth');
const { GraphQLScalarType, Kind } = require ('graphql');
const dayjs = require('dayjs');

const resolvers = {
    Date: dateScalar = new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        serialize(value) {
          return dayjs(value).format("MM-DD-YYYY"); // Convert outgoing Date to integer for JSON
        },
        parseValue(value) {
          return dayjs(value); // Convert incoming integer to Date
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.STRING) {
            // Convert hard-coded AST integer to string and then to Date
            return dayjs(ast.value);
          }
          // Invalid hard-coded value (not an integer)
          return null;
        },
      }),


    Query:{
        getProducts: async () => {
            return await Product.find()
        },
        getProduct: async (parent,{_id,name}) => {
            if(_id){
                return await Product.findOne({_id:_id})
            }
            else if(name){
                return await Product.findOne({name:name})
            }
        },
        getUsers: async () => {
            return await User.find();
        },
        getUser: async (parent,{_id}) => {
            return await User.findById(_id).populate({path:'orders',populate:'partner'});

        },
        getPartners: async () => {
            return await Partner.find();
        },
        getPartner: async (parent,{_id}) => {
            return await Partner.findById(_id).populate({path:'orders',populate:'user'});

        },
        getInventories: async (parent,{partnerId}) => {            
            return await Partner.findOne({_id:partnerId});
        },
        getInventory: async(parent,{partnerId, inventoryDate}) => {
            return await Partner.findOne({_id:partnerId, "inventories.inventoryDate":dayjs(inventoryDate).format("MM-DD-YYYY")},{streetAddress:1, city:1,state:1,zip:1,"inventories.$":1});
        },
        getOrders: async() => {
            return await Order.find().populate(['user','partner']);
        },
    },
    Mutation:{
        addUser: async (parent,args) => {
            const user = await User.create(args);
            const token = signUserToken(user);

            return {token, user}
        },
        loginUser: async(parent,{email,password}) => {
            const user = await User.findOne({email});

            if(!user){
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signUserToken(user);

            return {token, user};
        },
        addPartner: async (parent, {partnerData}) => {
            const partner = await Partner.create(partnerData);
            const token = signPartnerToken(partner);

            return {token, partner};
        },
        loginPartner: async(parent, {username,password}) => {
            const partner = await Partner.findOne({username});

            if(!partner){
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await partner.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signPartnerToken(partner);

            return {token, partner};
        },
        displayInventory: async(parent,{inventoryDate,partnerId}) => {

            // lookup this partner's inventories
            const partnerData = await Partner.findOne({_id:partnerId});
                        
            // check to see if the partner already has an inventory for the selected date or if we need to create a new one
            const foundInv = partnerData.inventories.find((inv) => dayjs(inv.inventoryDate).format("MM-DD-YYYY") === dayjs(inventoryDate).format("MM-DD-YYYY"));

            // return the _id of the inventory we are going to display by either creating a new inventory or finding an existing one
            const activateInv = async() => {
                // if no inventory is found for the selected date, create one and assign that inventory's _id as the activeInvId
                if(!foundInv){ 
                    const newInv = new Inventory({inventoryDate:inventoryDate});
                    await Partner.findByIdAndUpdate( partnerId,                     
                        {$push: {inventories:newInv}},
                        {new:true});
                    console.log(`created new inventory ${newInv._id} for ${dayjs(inventoryDate).format("MM-DD-YYYY")}`)
                    return newInv._id;
                }
                
                // if an existing inventory was found for that date, assign that inventory's _id as the activeInvId
                else{
                    console.log(`inventory ${foundInv._id} already exists for ${dayjs(inventoryDate).format("MM-DD-YYYY")}`)
                    return foundInv._id;
                };
            }

            // the id of the inventory we are now going to display
            const activeInvId = await activateInv() ;

            console.log(`active inventory id: ${activeInvId}`)

            const updatedPartnerData = await Partner.findOne({_id:partnerId})           
            const displayedInv = updatedPartnerData.inventories.find((inv) => inv._id == `${activeInvId}`);

            console.log(displayedInv)

            return displayedInv;
        },

        addToInventory: async(parent,{partnerId,inventoryId,productId,productPrice,productStock}) => {
            // lookup this partner's inventories
            const partnerData = await Partner.findOne({_id:partnerId});
            
            // find the specified inventory
            const foundInv = partnerData.inventories.find((inv) => inv._id == `${inventoryId}`);
            console.log(`found inventory ${foundInv._id}`)

            // see if the specified product is already in the inventory
            const foundProd = foundInv.products.find((prod) => prod._id == `${productId}`)
            
            // if the product was already in the inventory, just update that product in the inventory
            if(foundProd){
                console.log(`found and updated product ${foundProd._id} in inventory ${foundInv._id}`)
                
                const updatedInv = await Partner.findOneAndUpdate(
                    {_id:partnerId},
                    // add products to the correct inventory by specifying that we are going to provide the inventory's _id, using the positional identifier '$' and an identifier [outer]
                    // we are also providing the specific product's id that we wish to update in the products array by using the positional identifier '$' and an identifier [inner]
                    {$set: {"inventories.$[outer].products.$[inner]":{"_id":foundProd._id,"name":foundProd.name,"description":foundProd.description,"price":productPrice, "stock":productStock}}},
                    // give the identifiers' _id properties the value of the inventoryId and productId that were passed in by the user and return the updated partner object
                    {"arrayFilters": [{"outer._id": foundInv._id}, {"inner._id":foundProd._id}], new:true},
                );

                return updatedInv;                        
            }
            // if the product was not already in the inventory, add it to the inventory
            else{
                console.log(`product not in inventory, adding product ${productId} to inventory ${inventoryId}`);
                // get the product information from the Product model
                const lookupProd = await Product.findOne({_id:productId})

                // add the product to the products array and set the price and stock equal to the variables passed in by the user
                const updatedInv = await Partner.findOneAndUpdate(
                    {_id:partnerId},
                    // add products to the correct inventory by specifying that we are going to provide the inventory's _id, using the positional identifier '$' and an identifier [outer]
                    {$addToSet: {"inventories.$[outer].products":{"_id":lookupProd._id, "name":lookupProd.name, "description":lookupProd.description, "price":productPrice, "stock":productStock}}},
                    // give the identifier's _id property the value of the inventoryId passed in by the user and return the updated partner object
                    {"arrayFilters": [{"outer._id": foundInv._id}], new:true},
                );

                return updatedInv;
            }          
        },
        deleteFromInventory: async(parent,{partnerId,inventoryId,productId}) => {

            const updatedInv = await Partner.findOneAndUpdate(
                {_id:partnerId},
                {$pull: {"inventories.$[outer].products":{"_id":productId}}},
                {"arrayFilters": [{"outer._id": inventoryId}], new:true},
            );

            return updatedInv;
        },
        deleteInventory: async(parent,{partnerId,inventoryId}) => {

            const updatedPartner = await Partner.findOneAndUpdate(
                {_id:partnerId},
                {$pull: {inventories: {_id: inventoryId}}},
                {new:true}
            );

            return updatedPartner;
        },
        deleteInventories: async(parent,{partnerId}) => {            
            const updatedPartner = await Partner.findOneAndUpdate(
                {_id:partnerId},
                {$pull: {inventories:{}}},
                {new:true}
            );

            return updatedPartner;
        },            
        deleteUserOrders: async(parent, {_id}) => {
            const updatedUser = await User.findOneAndUpdate(
                {_id:_id},
                {$pull: {orders:{}}},
                {new:true}
            );
                console.log(updatedUser);
            return updatedUser;
        },
        deletePartnerOrders: async(parent, {_id}) => {
            const updatedPartner = await Partner.findOneAndUpdate(
                {_id:_id},
                {$pull: {orders:{}}},
                {new:true}
            );

            return updatedPartner;
        },
        deleteAllOrders: async () => {
            return await Order.deleteMany();
        },
        createOrder: async (parent, { products, userId, partnerId }, context) => {
            // console.log(context);
            // if (context.user) {
            const order = await (await (await Order.create({products:products, user:userId, partner:partnerId})).populate('user')).populate('partner');
                console.log(order)
            await User.findByIdAndUpdate(userId, { $push: { orders: order._id } },{new:true}).populate({path:'orders', populate:'products'});
            await Partner.findByIdAndUpdate(partnerId, { $push:{ orders: order._id } }, {new:true}).populate({path:'orders', populate:'products'});
            return order;
            // }
      
            // throw new AuthenticationError('Not logged in');
          },

    }
};

module.exports = resolvers