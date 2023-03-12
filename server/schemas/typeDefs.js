const { gql } = require('apollo-server-express');

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
        lat: String!
        lng: String!
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
        lat: String!
        lng: String!    
    }

    input ProductInput{
        _id:ID!
        name:String!
        price:Float!
        orderQty:Int!
        description:String
        stock:Int
        partnerName:String
        partnerId:String
        inventoryId:String
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

    type Checkout {
        session: ID
    }

    type Query {
        getProducts:[Product]
        getProduct(_id:ID, name:String): Product
        getUsers:[User]
        getUser:User
        getPartners:[Partner]
        getPartner: Partner
        getInventories:Partner
        getInventory(partnerId:ID!, inventoryDate:Date!):Partner
        getOrders:[Order]  
        checkout(products:[ProductInput]!):Checkout
    }

    type Mutation{
        addUser(firstName: String!, lastName: String!, email:String!, password: String! ):AuthUser
        loginUser(email: String!, password: String!):AuthUser
        addPartner(partnerData: PartnerData!): AuthPartner
        loginPartner(username: String!, password: String!): AuthPartner
        buildInventory(inventoryDate:Date!):Inventory
        addToInventory(inventoryId:ID!, product:InvProductInput!):Partner
        deleteFromInventory(inventoryId:ID!,productId:ID!):Partner
        deleteInventory(inventoryId:ID!):Partner
        deleteInventories:Partner        
        createOrder(products: [ProductInput]!, userId:ID!): [Order]
        deleteAllOrders:Order
    }

`;

module.exports = typeDefs;