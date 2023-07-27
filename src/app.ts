import  express  from "express";
import  config  from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";



const app = express();
const port = config.get<number>('port')

app.listen(port, async () => {
    // console.log(`Server is running on port ${port}!`)
    logger.info(`App is running at http://localhost:${port}`)

    await connect();
})