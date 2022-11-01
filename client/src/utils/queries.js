import { gql } from '@apollo/client';

// Retrieve all products from the Product collection.
// The Product collection contains the pre-defined product types with default prices for each product.
export const QUERY_ALL_PRODUCTS = gql`
    {
        getProducts {
            _id
            name
            description
            image
            price
        }
    }
`;

// Retrieve a single product by passing in either the _id or name
export const QUERY_PRODUCT = gql`
    query getProduct($_id:ID, $name:String){
        getProduct (_id:$_id, name:$name){
            _id
            name
            price
            stock
        }
    } 
`;

// Retrieve all users and their associated orders
export const QUERY_ALL_USERS = gql`    
    {    
        getUsers {
            _id
            firstName
            lastName
            email
            orders {
                _id
                products {
                    _id
                    name
                    price
                }        
            }
        }
    }
`;

// Retrieve a single user by _id, includes all associated orders
export const QUERY_USER = gql`
    query getUser($_id:ID!){
        getUser(_id:$_id) {
            _id
            firstName
            lastName
            email
            orders {
                _id
                purchaseDate
                products {
                _id
                name
                price
                orderQty
                }
                customerComment
                status
                partnerComment
                partner {
                _id
                partnerName
                }
            }
        }
    }
`;

// Retrieve all partners' basic information, does not include associated orders and inventories.
export const QUERY_ALL_PARTNERS = gql`
    {    
        getPartners {
            _id
            username
            partnerName
            streetAddress
            city
            streetAddress
            zip
<<<<<<< HEAD
            lat
            lng
=======
            inventories {
                _id
                inventoryDate
            }
>>>>>>> cec674540a573aaf61d50c6f4612b0bc6fbd874c
        } 
    }   
`;

// Retrieve a single partner by _id, including associated inventories and orders 
export const QUERY_PARTNER = gql`
    query getPartner($_id: ID!){
        getPartner(_id:$_id){
            _id
            username
            partnerName
            streetAddress
            city
            streetAddress
            zip
            lat
            lng
            inventories {
                _id
                inventoryDate
                productCount
                products {
                    _id
                    name
                    stock
                    price
                }
            }
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    price
                    orderQty
                }
                customerComment
                status
                partnerComment
                user {
                    _id
                    firstName
                    lastName
                }
            }
        }
    }
`;

// Retrieve all of a partner's inventories
export const QUERY_PARTNER_INVENTORIES = gql`
    query getInventories($partnerId:ID!){
        getInventories (partnerId:$partnerId){
            _id
            partnerName
            inventories {
                _id
                inventoryDate
                productCount
                products {
                    description
                    price
                    stock
                }
            }
        }
    }
`;

// USE THIS QUERY TO RETRIEVE TODAY'S INVENTORY FOR THE USER'S SELECTED PARTNER
// Retrieves the inventory for a specified partner for a given date
// Accepts 'partnerId' and 'inventoryDate' as parameters, which should be set to the
// _id of the chosen partner and today's date, which is stored in GlobalState.
export const QUERY_INVENTORY = gql`
    query getInventory($partnerId: ID!, $inventoryDate: Date!){
        getInventory(partnerId: $partnerId, inventoryDate: $inventoryDate){
            _id
            partnerName
            streetAddress
            city
            state
            zip 
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

