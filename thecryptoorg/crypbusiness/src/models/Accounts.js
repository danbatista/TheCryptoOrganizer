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
        type: Date,
        required: true,
    },
    foruser:{
        type: String,
        required:true, 
    }
});
AccountSchema.plugin(mPaginate);
mongoose.model('Account', AccountSchema);