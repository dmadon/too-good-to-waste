const {gql} = require('apollo-server-express');


const typeDefs = gql`

    scalar Date

    type Product {
        _id: ID
        name: String!
        description: String
        image: String
        price: Float
        stock: Int
        orderQty:Int
    }

    type Order {
        _id: ID
        purchaseDate: Date
        products: [Product]
        customerComment: String
        status: String
        partnerComment: String
        user:User
        partner:Partner
    }

    type Inventory {
        _id: ID
        inventoryDate: Date
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

    input ProductInput{
        _id:ID!
        name:String!
        price:Float!
        orderQty:Int
    }

    input InvProductInput{
        _id:ID!
        price:Float!
        stock:Int
    }

    type AuthPartner {
        token: ID
        partner: Partner
    }

    type Query {
        getProducts:[Product]
        getProduct(_id:ID, name:String): Product
        getUsers:[User]
        getUser(_id:ID!):User
        getPartners:[Partner]
        getPartner(_id:ID!): Partner
        getInventory(partnerId:ID!, inventoryDate:Date!):Partner
        getInventories(partnerId:ID!):Partner
        getOrders:[Order]
    }

    type Mutation{
        addUser(firstName: String!, lastName: String!, email:String!, password: String! ):AuthUser
        loginUser(email: String!, password: String!):AuthUser
        addPartner(partnerData: PartnerData!): AuthPartner
        loginPartner(username: String!, password: String!): AuthPartner
        buildInventory(partnerId:ID!, inventoryDate:Date!):Inventory
        addToInventory(partnerId:ID!,inventoryId:ID!, product:InvProductInput!):Partner
        deleteFromInventory(partnerId:ID!,inventoryId:ID!,productId:ID!):Partner
        deleteInventory(partnerId:ID!,inventoryId:ID!):Partner
        deleteInventories(partnerId:ID!):Partner        
        createOrder(products: [ProductInput]!, userId:ID!, partnerId:ID!): Order
        deleteUserOrders(_id:ID!):User
        deletePartnerOrders(_id:ID!):Partner
        deleteAllOrders:Order
    }

`;

module.exports = typeDefs;