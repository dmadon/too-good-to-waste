const { AuthenticationError } = require('apollo-server-express');
const {Product,User,Partner} = require('../models');
const {signUserToken, signPartnerToken} = require('../utils/auth');

const resolvers = {
    Query:{
        getProducts: async () => {
            return await Product.find()
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
        }
    }
};

module.exports = resolvers