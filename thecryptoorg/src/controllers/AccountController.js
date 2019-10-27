const mongoose = require('mongoose');

const Account = mongoose.model('Account');



module.exports = {
    async index(req,res){
            const accounts  = await Account.find();
            return res.json(accounts);
    },

    async store(req,res){
        //test store
        const acc = await Account.create(req.body);

        return res.json(acc);
    }
}