const { AuthenticationError } = require('apollo-server-express');
const {Product,User,Partner, Inventory} = require('../models');
const {signUserToken, signPartnerToken} = require('../utils/auth');

const resolvers = {
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
            const foundInventory = partner.inventories.find((inv) => inv.inventoryDate=inventoryDate); 
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
            const newInv = new Inventory({inventoryDate:inventoryDate});
            const partner = await Partner.findByIdAndUpdate(partnerId,
                {$push: {inventories:newInv}},
                {new:true});

            return partner;
        }
       
    }
};

module.exports = resolvers