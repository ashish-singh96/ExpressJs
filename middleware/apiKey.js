function apiKey(req, res, next) {
    const api_key = '12345678';
    // console.log(req.query.api_key)
    const userApiKey = req.query.api_key;
    if (userApiKey && (userApiKey === api_key)) {
        next();
    } else {
        res.json({ message: "Key is not valid" });
    }
}

module.exports = apiKey;