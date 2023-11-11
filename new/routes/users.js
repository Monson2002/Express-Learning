// mongodb+srv://monson2002:<password>@cluster1-demo.swevm20.mongodb.net/?retryWrites=true&w=majority
// HO5pde2iBylfC1zG
const express = require('express');
const router = express();
const mongoose = require('mongoose');
const User = require('./userModel');

const url = 'mongodb+srv://monson2002:HO5pde2iBylfC1zG@cluster1-demo.swevm20.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url);

router.get('/', (req, res) => {
    res.send({"message":"Server is running"});
})

router.get('/addUser', async (req, res) => {
    const newUser = await User.create({
        id: 1,
        name: "Monson",
        email: "monsonreji2002@gmail.com",
        age: 21,
        number: "1234567890"
    })
    res.send(newUser);
})

router.get('/removeUser', async (req, res) => {
    const newUser = await User.deleteOne({
        name: "Monson",
    })
    res.send(newUser);
})

router.listen(3000);