const messageModel = require("../model/mesages.model");
module.exports = async (req, res) => {
    try {
        const messageList = await messageModel.find({ userID: req.userID });
        res.json({ messageList })
    } catch (error) {
        res.json({ message: "errr" })

    }
}