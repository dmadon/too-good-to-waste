const mongoose = require('mongoose');
const {Schema} = mongoose;
const Product = require('./Product');

const inventorySchema = new Schema(
    {
        inventoryDate:{
            type:Date,
            required: true
        },
        products:[Product.schema]
    },
    {
        toJSON:{
            virtuals:true
        }
    }
);

inventorySchema.virtual('productCount').get(function(){
    return this.products.length;
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;