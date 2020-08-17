const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({


    todoid:{type:Number, require:true, unique:true},
    content:{type:String, require:true},
    completed:{type:String, default:false}

},
{
timestamps:true
})

module.exports = mongoose.model('ToDo',todoSchema)