const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const db = require('./config/database.js')
const Auth = require('./routes/auth.js')
const Post = require('./routes/post.js')



const app = express();
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))

// /register
app.use('/',Auth)
app.use('/',Post)

app.get('/', (req,res) => {
    res.json({message: "deneme"})
})


const PORT = process.env.PORT || 5000;
const dbport = process.env.MONGO
db()

app.listen(PORT, () => {
    console.log("server is running on port: 5000")
})