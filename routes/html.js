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


module.exports = (globalRoutes) => {
    globalRoutes.push("/");
    router.get("/", (req, res) => {
        res.render("home");
    });

    globalRoutes.push("/about");
    router.get("/about", (req, res) => {
        res.locals.metaTags = {
            title: "About"
        };
        res.render("about");
    });

    // /ios requests served by htmlIOS.js

    // /jailbreaks requests served by htmlJailbreaks.js

    // /devices requests served by htmlDevices.js

    //globalRoutes.push("/baseband");
    //router.get("/baseband", (req, res) => {
    //    res.locals.metaTags = {
    //        title: "Baseband"
    //    };
    //    res.render("baseband");
    //});

    // /processors requests served by htmlProcessors.js

    // /fw requests served by htmlFw.js

    // /ota requests served by htmlOta.js

    globalRoutes.push("/download");
    router.get("/download", (req, res) => {
        res.locals.metaTags = {
            title: "Download iDecryptIt"
        };
        res.render("download");
    });

    globalRoutes.push("/contact");
    router.get("/contact", (req, res) => {
        res.locals.metaTags = {
            title: "Contact"
        };
        res.render("contact");
    });

    return router;
};