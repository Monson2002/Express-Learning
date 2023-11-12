const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://monson2002:Mrv0606@2002@cluster1-demo.swevm20.mongodb.net/?retryWrites=true&w=majority')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

module.exports = mongoose.model('User', userSchema);
