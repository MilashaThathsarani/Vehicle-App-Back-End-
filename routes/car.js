const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../configs/db.configs');
const { query } = require('express');

const connection = mysql.createConnection(db.database);

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to the MySQL Server');
        var carTableQuery = "CREATE TABLE IF NOT EXISTS cars (registerNumber VARCHAR(255) PRIMARY KEY, brand VARCHAR(255), vehicleNumber VARCHAR(255), price VARCHAR(255))";
        connection.query(carTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("Car table created");
            }
        })
    }
})


router.post('/', (req, res) => {
    const registerNumber = req.body.registerNumber;
    const brand = req.body.brand;
    const vehicleNumber = req.body.vehicleNumber;
    const price = req.body.price;
    


    console.log(req.body);



    var query = "INSERT INTO cars (registerNumber,brand,vehicleNumber,price) VALUES (?,?,?,?)";

    connection.query(query, [registerNumber, brand, vehicleNumber, price], (err) => {
        if (err) {
            res.send({
                "status": "500",
                "message": "RegisterNum Already Exists!"
            });
        } else {
            res.send({
                "status": "200",
                "message": "Car saved successfully"
            });
        }
    })

});


module.exports = router