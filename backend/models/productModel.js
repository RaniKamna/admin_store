const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter product name"],
        trim:true,
    },
    vat:{
        type:Number,
        required:[true,"Please select vat"]
    },
    quantity:{
        type:Number,
        required:[true,"Please select quantity"],
        maxLength:[8, "quantity cannont exceed 8 characters"]
    },
    pricenet:{
        type:Number,
        required: true
    },
    pricegross:{
        type:Number,
        required:[true,"Please enter price gross"]
    },
    image:[
        {
            url:{
                type:String,
                required:false
            }
        }
    ]
});

module.exports= mongoose.model("products", productSchema);