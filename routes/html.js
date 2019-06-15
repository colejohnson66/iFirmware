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
const sanitize = require("mongo-sanitize");


const lowerDeviceToUpper = (deviceType, id) => {
    if (deviceType === "appletv")
        return "AppleTV" + id;
    if (deviceType === "ipad" ||
        deviceType === "ipadmini" ||
        deviceType === "ipadpro")
        return "iPad" + id;
    if (deviceType === "iphone")
        return "iPhone" + id;
    if (deviceType === "ipodtouch")
        return "iPod" + id;
    return "";
}


const router = express.Router();


router.get("/", (req, res) => {
    res.render("home");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/fw", (req, res) => {
    res.render("fw", require("./fw/devices.json"));
});

router.get("/fw/:deviceType/:id", (req, res) => {
    const device = lowerDeviceToUpper(
        sanitize(req.params.deviceType),
        sanitize(req.params.id));
    if (device === "")
        return res.status(404).render("404");

    db.Keys.find({
        device: device
    }).then((keys) => {
        res.render("fwDevice", {
            "urlpart": "/fw/" + req.params.deviceType + "/" + req.params.id,
            "device": device,
            "keySets": keys
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get("/fw/:deviceType/:id/:build", (req, res) => {
    const device = lowerDeviceToUpper(
        sanitize(req.params.deviceType),
        sanitize(req.params.id));
    if (device === "")
        return res.status(404).render("404");

    db.Keys.find({
        device: device,
        build: sanitize(req.params.build)
    }).then((keys) => {
        console.log(keys[0]);
        if (keys.length === 0)
            return res.status(404).render("404");
        if (keys.length !== 1)
            return res.status(500).json(keys);
        res.render("fwKeys", {
            device: {
                deviceType: req.params.deviceType,
                id: req.params.id
            },
            dbKeys: keys[0],
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
});

//router.get("/ota", (req, res) => {
//    res.render("ota");
//});

router.get("/contact", (req, res) => {
    res.render("contact");
});


module.exports = router;