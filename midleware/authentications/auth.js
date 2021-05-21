var jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {

    const token = req.header('token')
    if (token && token != null && token != undefined) {
        // verify a token symmetric
        jwt.verify(token, 'shhhhh', function (err, decoded) {
            if (err) {
                res.json({ message: " invalid token" });

            } else {
                if (decoded.isLoggedIn === true) {
                    req.userName = decoded.userName;
                    req.userID = decoded.userID;
                    req.role = decoded.role;

                    next();
                } else {
                    res.json({ message: " invalid token" });
                }

            }
        });
    } else {
        res.json({ message: " undifinedToken" });
    }
}