const mongoose = require('mongoose');
const mPaginate = require('mongoose-paginate');

const RentabilitySchema = new mongoose.Schema({
    valor:{
        type: String,
        required: true,
    },
    data:{
        type: String,
        required: true,
    },
    conta:{
        type: String,
        required: false,
    },
});
RentabilitySchema.plugin(mPaginate);
mongoose.model('Rentability', RentabilitySchema );