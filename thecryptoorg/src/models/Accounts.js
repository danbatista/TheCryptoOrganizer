const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    valor:{
        type: String,
        required: true,
    },
    data:{
        type: Date,
        required: true,
    },
});

mongoose.model('Account', AccountSchema);