const logger = require('./logger')

module.exports = (err, req, res, next) => {
  if (!err.statusCode || !err.message) {
    Error.captureStackTrace(err)
    logger.error(err)
  }

  res.status(err.statusCode || 500).json(err)
}
