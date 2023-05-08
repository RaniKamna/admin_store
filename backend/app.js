const express = require('express');
const app = express();
const errorMiddleware = require("./middleware/error");

var cors = require('cors');

app.use(
    cors({
        origin: true,
    })
);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

const product = require("./routes/productRoute");

app.use("/", product);

app.use(errorMiddleware);

module.exports = app;