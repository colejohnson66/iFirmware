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
const express = require("express");


const router = express.Router();


router.get("/", (req, res) => {
    res.render("home");
});

router.get("/about", (req, res) => {
    res.render("about");
});

//router.get("/ios", (req, res) => {
//    res.render("ios");
//});

//router.get("/jailbreaks", (req, res) => {
//    res.render("jailbreaks");
//});

// /devices requests served by htmlDevices.js

//router.get("/baseband", (req, res) => {
//    res.render("baseband");
//});

// /processors requests served by htmlProcessors.js

// /fw requests served by htmlFw.js

// /ota requests served by htmlOta.js

router.get("/contact", (req, res) => {
    res.render("contact");
});


module.exports = router;