const app = require("./app");
const port = 3001;
const mongoDB = require('./config/db');

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down th server due to uncaught Exception: ${err.stack}`);
    process.exit(1);
});

mongoDB();

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    })
})
