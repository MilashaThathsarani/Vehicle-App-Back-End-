const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    registerNumber: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
    


})

module.exports = mongoose.model('Car', carSchema)