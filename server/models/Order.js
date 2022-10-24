const mongoose = require('mongoose');
const Product = require('./Product');
const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [Product.schema],
  customerComment:{
    type: String,
    trim: true
  },
  status:{
    type: String,
    enum:{
      values:['Pending','Ready for Pickup','Order Exception: Please See Comments'],
      message: 'Please use a predefined status type',
      default: 'Pending'
    }    
  },
  partnerComment: {
    type:String,
    trim: true
  }
},
{
  timestamps:true
}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;