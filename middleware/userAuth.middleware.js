const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, "chandaguli")
            if (decoded) {
                const userID = decoded.userID;
                req.body.userID = userID
                next()
            }
            else {
                res.send("You are not authorized")
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}
module.exports={authenticate};