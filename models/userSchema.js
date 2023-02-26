const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type:String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    email : {
        type :String,
        required: true
    },  
    created_at : {
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model('users', userSchema);
