const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const product=require("./routes/productRouter")


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Route middlewares
app.use("/het", product);
app.get("/", (req, res) => {
    res.send("hello india")
})








// routes























const PORT = process.env.PORT || 5000;

// connection to DB and start
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('mongoose connect')
        app.listen(PORT, () => {
            console.log(`server Running on port ${PORT}`)
        
    })
    })
    .catch((err) => {
    console.log(err)
})