const mongoose = require('mongoose');
const mPaginate = require('mongoose-paginate');

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
RentabilitySchema.plugin(mPaginate);
mongoose.model('Rentability', RentabilitySchema );