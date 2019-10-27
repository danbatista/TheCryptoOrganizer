const mongoose = require('mongoose');


const rMonthSchema = new mongoose.Schema({
    valor:{
        type: String,
        required: true,
    },
    data:{
        type: Date,
        required: true,
    },
});

mongoose.model('rMonth', rMonthSchema );