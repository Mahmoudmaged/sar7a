module.exports = async(req,res)=>{
    try {
       // URL => https://www.facebook.com/mahmoud.elwan/5494  
        const fullURL = req.protocol + '://' + req.headers.host + '/displaySharedProfile/' + req.userID
        res.json({message:fullURL});
    } catch (error) {
        res.json({message:" fail to send fullURL"});
    }

}