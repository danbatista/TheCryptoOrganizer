const mongoose = require('mongoose');

const User = mongoose.model('User');



module.exports = {
    //list all
    async index(req,res){
            const {page} = req.query;
            const Users  = await User.paginate({},{page, limit:10});
            return res.json(Users);
    },

    async store(req,res){
        //insert new data
        const Users = await User.create(req.body);

        return res.json(Users);
    }, 
    //findBYID
    async show(req, res){
        const Users  = await User.findById(req.params.id);
        return res.json(Users);
    }, 
    //Update
    
    async update(req,res){
       const Users = await User.findByIdAndUpdate(req.params.id,req.body, {new:true});
       return res.json(Users);
    },

    //Destroy
     async destroy(req,res){
         await User.findByIdAndRemove(req.params.id);
       return res.send();
    }

}