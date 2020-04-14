const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/cars', (req, res) =>{
    db('cars').then(car =>{
        res.json(car);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({message: 'Failed to get cars'})
    })
});


server.post('/api/cars', (req, res) =>{
    const params = req.body;

    if(params.vin === undefined || params.make === undefined || params.model === undefined || params.mileage === undefined){
        res.status(400).json({message: 'Please provide valid body for adding a car'})
    }
    db('cars').insert({ vin: params.vin, make: params.make, model: params.model, mileage: params.mileage, transmission: (params.transmission ? params.transmission : null), title: (params.title ? params.title : null) })
    .then(response =>{
        res.json({
            ...response, 
            vin: params.vin, 
            make: params.make, 
            model: params.model,
            mileage: params.milage, 
            transmission: (params.transmission ? params.transmission : null), 
            title: (params.title ? params.title : null) 
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({message: 'Failed to add car'})
    })
})

module.exports = server;
