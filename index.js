const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js')

const app = express();
app.use(cors());

app.get('/', (req,res) => {
    res.json({message: "deneme"})
})


const PORT = process.env.PORT || 5000;

db()

app.listen(PORT, () => {
    console.log("server is running on port: 5000")
})