const mongoose = require('mongoose');


const RentabilitySchema = new mongoose.Schema({
    valor:{
        type: String,
        required: true,
    },
    data:{
        type: Date,
        required: true,
    },
});

mongoose.model('Rentability', RentabilitySchema );