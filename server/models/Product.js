const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    default: 2.00
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  orderQty: {
    type:Number,
    min: 0,
    default: 0
  }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
