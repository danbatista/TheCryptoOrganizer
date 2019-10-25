const mongoose = require('mongoose');

const Account = mongoose.model('Account');


module.exports = {
    async index(req,res){
            const accounts  = await Account.find();
            return res.json(accounts);
    }
}