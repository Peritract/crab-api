/**
 * Logs each request method and route
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
function logger (req, res, next) {

    console.log(req.method, req.originalUrl);

    next();
}

module.exports = logger;