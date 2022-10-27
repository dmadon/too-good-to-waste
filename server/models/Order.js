const mongoose = require('mongoose');
const { Schema } = mongoose;
const dayjs = require('dayjs');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
    get: purchaseDateVal => dayjs(purchaseDateVal).format("MM-DD-YYYY")
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
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