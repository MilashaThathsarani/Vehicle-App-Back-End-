const express = require('express');
const router = express.Router();
const User = require('../Models/user.models')

router.post('/',async (req,res) =>{
    const user = new User({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userName: req.body.userName,
        password: req.body.password
    })

    try {
        const response = await user.save()
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})

router.get('/',async (req,res) =>{
    try {
        const user = await User.find()
        res.send(user)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

router.get('/:id',async (req,res) =>{
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch (err) {
    }
})


module.exports = router