const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null;

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Not authorized."
        })
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET);
        req.user = {
            id: payload._id,
            userName: payload.userName,
            email: payload.email,
            bio: payload.bio
        }
        next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = authenticateUser;