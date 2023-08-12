const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const insightRouter = require("./routers/insight");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/insight", insightRouter)

app.get("/", (req, res) => {
    res.json({
        "message": "Welcome to the Crab API."
    })
})

module.exports = app;