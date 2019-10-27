const mongoose = require('mongoose');
const mPaginate = require('mongoose-paginate');

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
rMonthSchema.plugin(mPaginate);
mongoose.model('rMonth', rMonthSchema );