const mongoose = require('mongoose');
const { Schema } = mongoose;
const  Product = require('./Product')
const dayjs = require('dayjs');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: purchaseDateVal => dayjs(purchaseDateVal).format("MM-DD-YYYY")
  },
  products: [Product.schema],
  customerComment:{
    type: String,
    trim: true
  },
  status:{
    type: String,
    enum:{
      values:['Pending','Ready for Pickup','Canceled','Order Exception: Please See Comments'],
      message: 'Please use a predefined status type',
      default: 'Pending'
    },
    default:'Pending'    
  },
  partnerComment: {
    type:String,
    trim: true
  },
  user: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  partner: {
    type:Schema.Types.ObjectId,
    ref:'Partner'
  }
},
{
  timestamps:true,
  toJSON:{
    getters:true,
    virtuals:true
  }
}
);

orderSchema.virtual('productCount').get(function(){
  return this.products.length;
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;