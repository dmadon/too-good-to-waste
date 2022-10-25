const { AuthenticationError } = require('apollo-server-express');
const {Product,User,Partner, Inventory} = require('../models');
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
            // Convert hard-coded AST string to integer and then to Date
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
        getProduct: async (parent,{id,name}) => {
            if(id){
                return await Product.findOne({_id:id})
            }
            else if(name){
                return await Product.findOne({name:name})
            }
        },
        getUsers: async () => {
            return await User.find()
        },
        getUser: async (parent,{id}) => {
            return await User.findOne({_id:id})
        },
        getPartners: async () => {
            return await Partner.find()
        },
        getPartner: async (parent,{id}) => {
            return await Partner.findOne({_id:id}).populate('inventories').populate('orders')
        },
        getInventory: async(parent,{partnerId, inventoryDate}) => {
            const partner = await Partner.findOne({_id:partnerId}).populate('inventories');
            const foundInventory = partner.inventories.find((inv) => dayjs(inv.inventoryDate).format("MM-DD-YYYY")===dayjs(inventoryDate).format("MM-DD-YYYY")); 
            return foundInventory;
        }
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
        createInventory: async(parent,{partnerId,inventoryDate}) => {

            const partnerLookup = await Partner.findOne({_id:partnerId}).populate('inventories');
            const foundInventory = partnerLookup.inventories.find((inv) => dayjs(inv.inventoryDate).format("MM-DD-YYYY") === dayjs(inventoryDate).format("MM-DD-YYYY"));
    

                if(!foundInventory){

                    console.log(`created new inventory for ${inventoryDate}`)

                    const newInv = new Inventory({inventoryDate:inventoryDate});
                    const partner = await Partner.findByIdAndUpdate( partnerId,                     
                        {$push: {inventories:newInv}},
                        {new:true});

                return partner;

                }
                
                else 
                console.log('there is already an inventory for that date')
                return partnerLookup;
            }
        
       
    }
};

module.exports = resolvers