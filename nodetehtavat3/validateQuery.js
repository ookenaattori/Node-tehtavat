const validateQuery = (req, res, next) => {
    console.log(req.query);
    
    next();
}

module.exports = validateQuery