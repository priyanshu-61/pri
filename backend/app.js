const express = require("express");
require("dotenv").config();
require("./db");
const userRoute = require("./routes/userRoute");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const courseRoute = require("./routes/courseRoute");
const adminRoute = require("./routes/adminRoute");
const enrollRoute = require("./routes/enrollRoute");
const commonRoute = require("./routes/commonRoute");
const topicRoute = require("./routes/topicRoute");
const cors = require('cors');


app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const errorMiddleware = require("./middleware/error");
app.use("/api/v1", userRoute);
app.use("/api/v1", courseRoute);
app.use("/api/v1", adminRoute);
app.use("/api/v1", enrollRoute);
app.use("/api/v1", commonRoute);
app.use("/api/v1", topicRoute);


// Middleware for Error

app.use(errorMiddleware);
module.exports = app;

app.listen(8000, () => {
    console.log("the server is listening on port 8000");
});