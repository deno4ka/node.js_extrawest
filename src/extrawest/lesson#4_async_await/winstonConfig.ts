import winston from 'winston';

const logger: winston.Logger = winston.createLogger({
    defaultMeta: { service: 'user-service'},
    format: winston.format.json(),
    level: 'info',
    transports: [
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
        // new winston.transports.Console({ format: winston.format.simple() })
    ]
});

export default logger;
