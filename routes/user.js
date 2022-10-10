const express = require('express');
const router = express.Router();
const Users = require('../Models/user.models')

router.post('/',async (req,res) =>{
    const users = new Users({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userName: req.body.userName,
        password: req.body.password
    })

    try {
        const response = await users.save()
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})

router.get('/login/:userName/:password',async (req,res) =>{
    try {
        const users = await Users.find()
        res.send(users)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

router.get('/:id',async (req,res) =>{
    try {
        const users = await Users.findById(req.params.id)
        res.json(users)
    }catch (err) {
    }
})


module.exports = router