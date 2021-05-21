const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors())
app.use(express.json());
app.use(require("./routers/app.router"));
mongoose.connect('mongodb+srv://MahmoudElwan:01015776658@mahmoudelwan-nodejs.jfspq.mongodb.net/sar', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('connected');
});
app.listen(port, () => console.log(`Example app listening on port port!`))