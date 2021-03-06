const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
const cors = require("cors")
app.use(express.json());
app.use(cors())
app.use(express.json());
app.use(require("./routers/app.router"));
app.get('/', (req, res) => {
    res.json({message:"welcome"});
});
mongoose.connect('mongodb+srv://MahmoudElwan:01015776658@mahmoudelwan-nodejs.jfspq.mongodb.net/sar', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('connected');
});
app.listen( process.env.PORT||port, () => console.log(`Example app listening on port port!`))