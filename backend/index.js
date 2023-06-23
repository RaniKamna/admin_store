const app = require("./app");
const mongoDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down th server due to uncaught Exception: ${err.stack}`);
    process.exit(1);
});

mongoDB();
//console.log(process.env.API_PORT)
const server = app.listen(process.env.API_PORT, () => {
    console.log(`Example app listening on port ${process.env.API_PORT}`)
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    })
})
