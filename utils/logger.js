import winston from "winston";

//format of the log
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),

  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [
    //for logging errors
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error"
    }),

    //events logger
    new winston.transports.File({
      filename: "logs/app.log",
      level: "info"
    })
  ]
});

export default logger;