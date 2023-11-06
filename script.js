const express = require('express')
const app = express()

// EJS
app.set('view engine', 'ejs')

app.get('/ejs', (req, res) => {
    res.render('index')
})

// Function / Middleware
app.use((req, res, next) => {
    console.log("Hello World");
    next()
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

// Dynamic Routing Example
app.get('/profile/:username', (req,res)=> {
    res.send(`Hi, I am ${req.params.username}`)
})



app.listen(3000)