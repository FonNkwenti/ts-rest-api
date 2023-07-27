import logger from 'pino' 
import dayjs from 'dayjs'  // to format our timestamps

const log = logger({
    // prettyPrint: true, // prettyPrint is no longer support
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    base:{
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log;