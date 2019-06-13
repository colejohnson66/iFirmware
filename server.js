const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/iosFirmware";


const db = require("./models");
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("combined"));
app.engine("handlebars", exphbs({ defaultLayout: "base" }));
app.set("view engine", "handlebars");


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.use("/", require("./routes/html"));
app.use("/", require("./routes/apiKeys"));


app.get("*", (req, res) => {
    res.status(404).send("404");
});


app.listen(PORT, () => {
    console.log(`Server now live at http://localhost:${PORT}/`);
});