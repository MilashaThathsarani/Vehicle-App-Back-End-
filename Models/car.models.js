const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Vehicle', vehicleSchema)