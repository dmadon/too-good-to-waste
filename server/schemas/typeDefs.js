const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        _id: ID
        name: String!
        description: String
        image: String
        price: Float
        stock: Int
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
        customerComment: String
        status: String
        partnerComment: String
    }

    type Inventory {
        _id: ID
        inventoryDate: String
        productCount: Int
        products: [Product]
    }

    type User {
        _id:ID
        firstName: String!
        lastName: String!
        email: String!
        orders: [Order]        
    }

    type AuthUser {
        token: ID
        user: User        
    }

    type Partner {
        _id:ID
        username: String!
        email: String!
        partnerName: String!
        streetAddress: String!
        city: String!
        state: String!
        zip: String!
        inventories: [Inventory]
        orders: [Order]
    }

    input PartnerData {
        username: String!
        email: String!
        password: String!
        partnerName: String!
        streetAddress: String!
        city: String!
        state: String!
        zip: String!
        
    }

    type AuthPartner {
        token: ID
        partner: Partner
    }

    type Query {
        getProducts:[Product]
    }

    type Mutation{
        addUser(firstName: String!, lastName: String!, email:String!, password: String! ):AuthUser
        loginUser(email: String!, password: String!):AuthUser
        addPartner(partnerData: PartnerData!): AuthPartner
        loginPartner(username: String!, password: String!): AuthPartner
    }

`;

module.exports = typeDefs;