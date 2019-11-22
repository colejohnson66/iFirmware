/* This file is part of iDecryptIt Web.
 * Copyright (c) 2019 Cole Johnson
 * 
 * This program is free software: you can redistribute it and/or modify it under
 *   the terms of the GNU Affero General Public License as published by the Free
 *   Software Foundation, either version 3 of the License, or (at your option)
 *   any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 *   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *   FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 *   for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License along
 *   with this program. If not, see <https://www.gnu.org/licenses/>.
 */
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/idecryptit";

require('dotenv').config();

const db = require("./models");
const express = require("express");
const exphbs = require("express-handlebars");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const morgan = require("morgan");
const axios = require("axios");
const cheerio = require("cheerio");


const hbs = exphbs.create({
    defaultLayout: "base",
    helpers: require("./handlebarsHelpers")
});


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload({
    limits: { fileSize: 2 * 1024 * 1024 },
}));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
if (process.env.NODE_ENV !== "production")
    app.use(morgan("combined"));


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.use("/", require("./routes/html"));
app.use("/", require("./routes/htmlDevices"));
app.use("/", require("./routes/htmlFw"));
app.use("/", require("./routes/htmlProcessors"));
app.use("/", require("./routes/apiKeys"));


app.get("*", (req, res) => {
    res.status(404).render("404");
});


app.listen(PORT, () => {
    console.log(`Server now live at http://localhost:${PORT}/`);
});