const mongoose = require('mongoose');
const mPaginate = require('mongoose-paginate');

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
        type: String,
        required: true,
    },
    foruser:{
        type: String,
        required:true, 
    }, 
    rentabilidade:{
        type: String,
        required: false,
    },
});
AccountSchema.plugin(mPaginate);
mongoose.model('Account', AccountSchema);