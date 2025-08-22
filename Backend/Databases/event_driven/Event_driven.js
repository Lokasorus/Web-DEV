const fs = require('fs');
const os = require('os'); // importing modules

const EventEmitter = require('events') // events is the whole of a class only
// Logger inherits all the methods of the EventEmitter class
class Logger extends EventEmitter {
    log(message) {
        this.emit('message', { message }) // 'message' is an event here 
        // Arguments Passing: Any arguments passed in the emit call are forwarded to the event listener functions.
    }
}

const logger = new Logger() // Create an instance of the Logger class
const logFile = 'F:\\PGM\\WEBD\\Backend\\event_driven\\events.txt'; // Corrected file path

// Method responsible for grabbing the data and logging it to the file
const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage)
    // appendFileSync keeps the existing data in the file and writes new data below it
};

logger.on('message', logToFile)
// 'on' listens to the event, and as soon as it hears the 'message' event, the logToFile method will run 
// 'message' is the event to which we are listening

// Launch the event and get some resource
setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100 // Calculate percentage of free memory
    logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}%`)
    // logger.log -> emit -> on -> logToFile
}, 3000);

// Emit initial custom events
logger.log(`Application Started`); 
logger.log(`Application event occurred`); 
// Workflow: logger.lo
