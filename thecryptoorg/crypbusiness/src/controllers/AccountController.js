const mongoose = require('mongoose');

const Account = mongoose.model('Account');



module.exports = {
    //list all
    async index(req,res){
            const {page} = req.query;
            const accounts  = await Account.paginate({},{page, limit:10});
            return res.json(accounts);
    },

    async store(req,res){
        //insert new data
        const acc = await Account.create(req.body);

        return res.json(acc);
    }, 
    //findBYID
    async show(req, res){
        const acc  = await Account.findById(req.params.id);
        return res.json(acc);
    }, 
    //Update
    
    async update(req,res){
       const account = await Account.findByIdAndUpdate(req.params.id,req.body, {new:true});
       return res.json(account);
    },

    //Destroy
     async destroy(req,res){
         await Account.findByIdAndRemove(req.params.id);
       return res.send();
    }

}