/* This file is part of iOS Firmware Web.
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
const db = require("../models");


const router = express.Router();


router.get("/api/keys", (req, res) => {
    db.Keys.find({}).then((keys) => {
        res.json(keys);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get("/api/keys/:device/:build", (req, res) => {
    db.Keys.find({
        device: req.params.device,
        build: req.params.build
    }).then((keys) => {
        res.json(keys);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


module.exports = router;