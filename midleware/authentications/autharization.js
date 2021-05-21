module.exports =(role)=>{
    try {
        return (req, res, next) => {
            if (req.userRole !== role) {
                res.status(401)
                return res.send('Not allowed')
            }
    
            next()
        }
    } catch (error) {
        res.status(403)
        return error;
    } 
    }





