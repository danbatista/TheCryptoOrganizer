const mongoose = require('mongoose');

const mRentability = mongoose.model('rMonth');



module.exports = {
    //list all
    async index(req,res){
            const {page} = req.query;
            const rentability  = await mRentability.paginate({},{page, limit:10});
            return res.json(rentability);
    },

    async store(req,res){
        //insert new data
        const rentability = await mRentability.create(req.body);

        return res.json(rentability);
    }, 
    //findBYID
    async show(req, res){
        const rentability  = await mRentability.findById(req.params.id);
        return res.json(rentability);
    }, 
    //Update
    
    async update(req,res){
       const rentability = await mRentability.findByIdAndUpdate(req.params.id,req.body, {new:true});
       return res.json(rentability);
    },

    //Destroy
     async destroy(req,res){
         await mRentability.findByIdAndRemove(req.params.id);
       return res.send();
    }

}