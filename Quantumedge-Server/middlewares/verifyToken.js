const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).send({ message: "unauthorized access" });
    }
    // verify token
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res
                .status(401)
                .send({ message: "unauthorized access, err" });
        }
        req.decoded = decoded;
        next();
    });
};
