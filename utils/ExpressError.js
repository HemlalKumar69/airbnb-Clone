class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.status.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;