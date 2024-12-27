//configure it a little bbit then you will have much more control
//log data into your logs, using this file we can use some heavy end application and can analyze the docs and determine whats the choke point of the data and what is the choke point of the API etc

import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }),
  ],
}); //transport determine how you want to use thie data maybe consolelog it,maybe put into file and maybe connect with database and many more third party operations;

export default logger;