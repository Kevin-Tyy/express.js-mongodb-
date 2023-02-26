// const errors = require('formidable/FormidableError');
const userSchema = require('../models/userSchema');

const getAllUsers = (req, res) => {
    userSchema.find((err, users)=>{
        if(err){
            res.json({ error: err, status: "failed" });
        }
        else{
            res.json({data : users});
        }
    })

};

const getSingleUser = (req,res) => {
 
        userSchema.findById({
            _id: req.params.id
        },(err, user)=>{
            if(err) {
                res.json({ error: err, status: "failed" });
            }
            else{
                res.json({data : user, status: 'success'});
            };
        })
    // })

};

const createUser = (req,res) => {


    userSchema.create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        age : req.body.age,
        email : req.body.email
    }, (err, user)=>{
        if(err){
            res.json({ error: err, status: "failed" });

        }
        else{
            res.json({data : user, status: 'User created'});
        }
    });

    
};

const deleteUser = (req,res) => {
    userSchema.findByIdAndDelete({ _id: req.params.id}, (err)=>{
        if(err){
            res.json({ error: err, status: "failed" });
        }
        else{
            res.json({message : "User deleted", status: 'success'});
        }
    })


}
const updateUser = (req, res) => {
    const first_name  = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const age = req.body.age

    userSchema.findByIdAndUpdate({ _id: req.params.id}, {
        $set:{
            first_name : first_name,
            last_name : last_name,
            age : age,
            email : email
        }
    },
        (err, user) => {
            if(err){
                res.json({ error: err, status: "failed" });
            }
            else{
                res.json({data : user, status: 'success'});
            }
        }
    )

}

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
}


