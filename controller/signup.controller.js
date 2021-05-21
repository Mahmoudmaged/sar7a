const userModel = require("../model/user.model");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
module.exports = async (req, res) => {
    const { userName, email, password, cPassword } = req.body;
    try {
        const signUpError = validationResult(req);
        if (signUpError.isEmpty()) {
            const user = await userModel.findOne({ email })
            if (user) {
                res.json({ message: "email exist", oldInputs: { userName, email, password, cPassword } })
            } else {

                bcrypt.hash(password, 8, async function (err, hash) {
                    if (err) {
                        res.json({ message: "hash error", oldInputs: { userName, email, password, cPassword } })

                    } else {
                        await userModel.insertMany({ userName, email, password:hash });
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            port: process.env.PORT || 587,
                            secure: false, // true for 465, false for other ports
                            auth: {
                                user: 'routesession@gmail.com', // generated ethereal user
                                pass: '1478530123', // generated ethereal password
                            },
                        });
                        let token = jwt.sign({email}, 'shhhhh');
                        await transporter.sendMail({
                            from: 'routesession@gmail.com', // sender address
                            to: req.body.email, // list of receivers email
                            subject: "Hello ✔", // Subject line
                            text: "Hello world?", // plain text body
                            html: `<a href="https://c34ara7.herokuapp.com/confirmEmail/${token}">Confirm</a>`, // html body
                        });
                        res.json({ message: "Done"})

                    }
                })
            }
        } else {
            res.json({ message: "pleas enter valid data", errorMessage: signUpError.array(), oldInputs: { userName, email, password, cPassword } })
        }

    } catch (error) {
        res.json({ message: "catch Error", error })
    }
}