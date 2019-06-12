const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/iosFirmware";


const db = require("./models");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");


const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production")
    app.use(express.static("client/build"));


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// bypass CORS error on dev
if (process.env.NODE_ENV !== "production") {
    app.all('*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
        next();
    });
}

app.use("/", require("./routes/apiKeys"));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});