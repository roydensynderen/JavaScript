const authenticate = (req, res, next) => {
    if (req.headers.Authorization !== "SECRET PASSWORD") {
        return res.status(403).send('You shall not pass!');
    }
    next();
}

module.exports = authenticate;