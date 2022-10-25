const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');
const Inventory = require('./Inventory');
const Order = require('./Order');

const partnerSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    partnerName:{
        type: String,
        required: true,
        trim: true
    },
    streetAddress:{
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        enum: {
            values: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
            message: 'Please enter the two-letter state abbreviation'
        },
        required: true,
        trim: true
    },
    zip:{
        type: String,
        required: true,
        trim: true
    },    
    inventories: [Inventory.schema],
    orders:[Order.schema]
});

// hash password before saving to database
partnerSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// method to compare password with hashed password upon login
partnerSchema.methods.isCorrectPassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;