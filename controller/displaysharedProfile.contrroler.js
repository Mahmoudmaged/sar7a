
const userModel = require("../model/user.model");
module.exports = async (req, res) => {
    try {
        console.log(req.params.id );
        const userProfile = await userModel.findOne({ _id:req.params.id });
        res.json({ userNme: userProfile.userName , id:userProfile._id });
    } catch (error) {
        res.json({ message: "errr" , error})

    }
}