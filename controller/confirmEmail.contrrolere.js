const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model")
module.exports = async (req, res) => {
    const token = req.params.token;
    if (token && token != null && token != undefined) {
        jwt.verify(token, 'shhhhh', async function (err, decoded) {
            if (err) {
                res.json({ message: "invalid token" });

            } else {
                await userModel.updateOne({ email: decoded.email }, { confirmed: true })
                res.json({ message: "Done" });

            }
        });
    } else {
        res.json({ message: "undifined token" });
    }

}