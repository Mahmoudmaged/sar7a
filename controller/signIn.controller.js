const userModel = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { validationResult } = require('express-validator');


module.exports = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        const errValidation = validationResult(req);
        if (errValidation.isEmpty()) {
            if (user) {
                if (user.confirmed) {
                   const match = bcrypt.compare(password, user.password);
                   if (match) {
    
                    var token = jwt.sign({ userName:user.userName, userID:user._id , role:user.role , isLoggedIn:true }, 'shhhhh');
    
                    res.header({token}).json({ message: "Done"});
                   } else {
                    res.json({ message: "invalid password "  ,oldInputs: { email, password }});
                       
                   }
                } else {
                    res.json({ message: "please confirm u email first "  ,oldInputs: { email, password }});
                }
            } else {
                res.json({ message: "user not exist " ,oldInputs: { email, password }});
    
            }
        } else {
            res.json({ message: "please inter valid data  ", messageError:errValidation.array() ,oldInputs: { email, password }});
            
        }
       

    } catch (error) {
        res.json({ message: "catch error" });
    }
}