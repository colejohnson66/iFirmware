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
    globalRoutes.push("/baseband");
    router.get("/baseband", (req, res) => {
        res.locals.metaTags = {
            title: "Baseband"
        };
        res.render("baseband");
    });


    globalRoutes.push("/baseband/pmb8876");
    router.get("/baseband/pmb8876", (req, res) => {
        res.locals.metaTags = {
            title: "PMB8876"
        };
        res.render("baseband/pmb8876");
    });

    globalRoutes.push("/baseband/pmb8878");
    router.get("/baseband/pmb8878", (req, res) => {
        res.locals.metaTags = {
            title: "PMB8878"
        };
        res.render("baseband/pmb8878");
    });


    return router;
}