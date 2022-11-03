import { gql } from '@apollo/client';

// Create a new user and assign a token
export const ADD_USER = gql`
    mutation addUser($firstName:String!, $lastName:String!, $email:String!,$password:String!){
        addUser(firstName:$firstName, lastName:$lastName, email:$email, password:$password){
            token
            user {
                _id
                firstName
                lastName
                email            
            }
        }
    }
`;

// Login an existing user, assign a token, and return all the associated orders for that user
export const LOGIN_USER = gql`
    mutation loginUser($email:String!,$password:String!){
        loginUser(email:$email, password:$password){
            token
            user {
                _id
                firstName
                lastName
                email
                orders {
                    _id
                    purchaseDate
                    products {
                        _id
                        description
                    }
                    customerComment
                    status
                    partnerComment                    
                }
            }
        }
    }
`;

// Create a new parnter and assign a token
// the partnerData parameter refers to the input typeDef 'PartnerData',
// which includes username, email, password, partnerName(the displayed name of the grocery store),
// city, state, zip, and coordinates: lat, lng
export const ADD_PARTNER = gql`
    mutation addPartner($partnerData:PartnerData!){
        addPartner(partnerData:$partnerData){
            token
            partner {
                _id
                username
                partnerName
                email
                streetAddress
                city
                state
                zip
                lat
                lng
            }
        }
    }
`;

// Login an existing partner, assign a token, and return all the associated inventories and orders for that partner
export const LOGIN_PARTNER = gql`
    mutation loginPartner($username:String!, $password:String!){
        loginPartner(username:$username, password:$password){
            token
            partner {
                _id
                username
                partnerName
                email
                streetAddress
                city
                state
                zip
                lat
                lng
                inventories {
                    _id
                    inventoryDate
                    productCount
                    products {
                        description
                        name
                        price
                        orderQty
                    }
                }
                orders {
                    _id
                    purchaseDate
                    products {
                        _id
                        description
                    }
                    customerComment
                    status
                    partnerComment                    
                }
            }
        }
    }
`;

// USE THIS MUTATION FOR A PARTNER WHO HAS LOGGED IN AND WANTS TO BUILD AN INVENTORY FOR A SPECIFIED DATE (DEFAULT TO TODAY)
// If the partner has no inventory for the selected date, it will build one and return the new inventory's _id
// If the partner already has an inventory for the selected date, it will return that inventory's _id and associated products
export const BUILD_INVENTORY = gql`
    mutation buildInventory($inventoryDate:Date!){
        buildInventory(inventoryDate:$inventoryDate){
            _id
            inventoryDate
            productCount
            products {
                _id
                name
                price
                stock
            }
        }
    }
`;

// USE THIS MUTATION TO ADD AN ITEM TO A PARTNER'S INVENTORY FROM THE 'ADD PRODUCT TO INVENTORY' FORM
// If a partner already has the specified product in their inventory, it just updates that product. Otherwise, it adds the product to the inventory.
// This mutation requires two parameters:
// - the inventoryId parameter (which will come from the page's local state once the buildInventory mutation has run and set the inventoryId to it)
// - the product parameter -- this refers to the input typeDef 'InvProductInput' that includes _id(a product's id), price(partner sets a price for the product), stock(the number of available products)
export const ADD_TO_INVENTORY = gql`
    mutation addToInventory($inventoryId:ID!, $product:InvProductInput!){
        addToInventory(inventoryId:$inventoryId, product:$product){
            _id
            username
            partnerName
            inventories {
                _id
                inventoryDate
                productCount
                products {
                    _id
                    name
                    price
                    stock
                }
            }
        }
    }
`;

// USE THIS MUTATION WHEN A PARTNER DELETES A PRODUCT OFF THE SPECIFIED INVENTORY
// the inventoryId parameter comes from the page's local state once the buildInventory mutation has run and set the inventoryId to it
// productId should come from the event.target (product that was clicked on the page)
export const DELETE_FROM_INVENTORY = gql`
    mutation deleteFromInventory($inventoryId:ID!,$productId:ID!){
        deleteFromInventory(inventoryId:$inventoryId, productId:$productId){
            _id
            partnerName
            inventories {
                _id
                inventoryDate
                productCount
                products {
                    _id
                    name
                    description
                    image
                    price
                    stock
                }
            }            
        }
    }
`;

// This mutation deletes a partner's entire inventory by _id
// the inventoryId parameter comes from the page's local state once the buildInventory mutation has run and set the inventoryId to it
export const DELETE_INVENTORY = gql`
    mutation deleteInventory($inventoryId:ID!){
        deleteInventory(inventoryId:$inventoryId){   
            _id
            partnerName
            inventories {
                _id
                inventoryDate
                productCount
                products {
                    _id
                    name
                    description
                    price
                    stock
                }
            }
        }
    }
`;

// This mutation deletes all of a partner's inventories
export const DELETE_ALL_INVENTORIES = gql`    
{
    deleteInventories{
        _id
        partnerName
        inventories {
            _id
            inventoryDate
            productCount
        }
    }
}
   
`;

// This mutation builds an order from the saved products in a user's cart
// IT DOES NOT CREATE A STRIPE CHECKOUT
// the partnerId will come from the global state object 'selectedPartner' once a user has selected an inventory
// the products array parameter accepts an input typeDef 'ProductInput', which includes _id(the product's _id), name(the product's name), price(the product's price), orderQty(the quantity set by the user)
export const CREATE_ORDER = gql`
    mutation createOrder($products:[ProductInput]!){
        createOrder(products:$products){
            _id
            purchaseDate
            products {
                _id
                name
                price
            }
            status
            
           
            user {
                _id
                firstName
                lastName
            }
            partner {
                _id
                partnerName
            }
        }
    }
`;