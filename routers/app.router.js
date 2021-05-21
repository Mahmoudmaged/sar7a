const app = require("express").Router();
const auth = require("../midleware/authentications/auth")
// signUp
const signUpValidtion = require("../midleware/validations/signUp.validators");
app.post('/signUp',signUpValidtion,require("../controller/signup.controller"));
// confirmEmail
app.get('/confirmEmail/:token',require("../controller/confirmEmail.contrrolere"));
// login
const signInValidtion = require("../midleware/validations/signIn.validators");
const mesagesModel = require("../model/mesages.model");
app.post('/login',signInValidtion,require("../controller/signIn.controller"));
// shareProfile
app.get('/shareProfile',auth, require("../controller/shareProfile.controller"));
//displayprofilemessges 
app.get('/displayMessages', auth , require('../controller/displayMessages.controller'));
//displaymessage
app.get('/displaySharedProfile/:id', require("../controller/displaysharedProfile.contrroler"));
//sendMessage
app.post('/handelMessage/:id', require("../controller/sendmessage.controller"));
module.exports = app;