import logger from "../utils/logger.js";

export const errorLogger = (err, req, res, next) => {
  logger.error(`Error: ${err.message}`)
  res.status(500).json({
    status: 500,
    message: "Internal Server Error"
  })
};