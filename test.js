const mongoose = require('mongoose');
const { schema } = require('./models/todo');
// test moongose CRUD


var Schema = mongoose.Schema;

var person = new Schema({
    name:"me",
    height:180
})

const Model = mongoose.model('person',schema)

await Model.save()



//