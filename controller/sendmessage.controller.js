const mesagesModel = require("../model/mesages.model");




module.exports=async(req, res) => {
    try {
        
  const { desc} = req.body;
  await mesagesModel.insertMany({desc,time:Date.now(),userID:req.params.id})
        res.json("Done")
  
    } catch (error) {
        res.json("error")
    }
}