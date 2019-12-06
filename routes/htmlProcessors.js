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
    globalRoutes.push("/processors");
    router.get("/processors", (req, res) => {
        res.locals.metaTags = {
            title: "Processors"
        };
        res.render("processors");
    });

    globalRoutes.push("/processors/s5l8900");
    router.get("/processors/s5l8900", (req, res) => {
        res.locals.metaTags = {
            title: "S5L8900"
        };
        res.render("processors/s5l8900");
    });

    globalRoutes.push("/processors/s5l8720");
    router.get("/processors/s5l8720", (req, res) => {
        res.locals.metaTags = {
            title: "S5L8720"
        };
        res.render("processors/s5l8720");
    });


    return router;
}