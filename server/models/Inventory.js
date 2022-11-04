const mongoose = require('mongoose');
const {Schema} = mongoose;
const Product = require('./Product');
const dayjs = require('dayjs');

const inventorySchema = new Schema(
    {
        inventoryDate:{
            type:Date,
            default:Date.now,
            required: true,
            get: purchaseDateVal => dayjs(purchaseDateVal).format("MM-DD-YYYY")
        },
        products:[Product.schema]
    },
    {
        toJSON:{
            virtuals:true,
            getters:true
        }
    }
);

inventorySchema.virtual('productCount').get(function(){
    return this.products.length;
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;