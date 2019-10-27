const mongoose = require('mongoose');
const mPaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    },
    //se pagou ou não
    status:{
        type: Boolean,
        required: true,
    },
   
});
UserSchema.plugin(mPaginate);
mongoose.model('User', UserSchema );