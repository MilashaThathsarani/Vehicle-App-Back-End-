const express = require('express');
const router = express.Router();
const Car = require('../Models/car.models')


router.post('/',async (req,res) =>{
    const car = new Car({
        registerNumber: req.body.registerNumber,
        brand: req.body.brand,
        vehicleNumber: req.body.vehicleNumber,
        price: req.body.price

    })

    try {
        const response = await car.save()
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})

router.get('/',async (req,res) =>{
    try {
        const car = await Car.find()
        res.send(car)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

router.get('/:id',async (req,res) =>{
    try {
        const car = await Car.findById(req.params.id)
        res.json(car)
    }catch (err) {
    }
})


router.delete('/:id',async (req,res) =>{
    try {
        const car = await Car.findById(req.params.id)
        const response = await car.remove()
        res.json(response)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const car = await Post.findById(req.params.id)
           car.registerNumber = req.body.registerNumber,
           car.brand = req.body.brand,
           car.vehicleNumber = req.body.vehicleNumber,
           car.price = req.body.price

        const response = await car.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router