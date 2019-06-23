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


const router = express.Router();


const lowerDeviceToUpper = (deviceType, id) => {
    if (deviceType === "appletv")
        return "AppleTV" + id;
    if (deviceType === "ipad")
        return "iPad" + id;
    if (deviceType === "iphone")
        return "iPhone" + id;
    if (deviceType === "ipodtouch")
        return "iPod" + id;
    return "";
}


router.get("/fw/keys", (req, res) => {
    res.render("fw/selectDevice", require("./fw/devices.json"));
});

router.get("/fw/keys/:deviceType/:id", (req, res) => {
    const device = lowerDeviceToUpper(
        sanitize(req.params.deviceType),
        sanitize(req.params.id));
    if (device === "")
        return res.status(404).render("404");

    db.Keys.find({
        device: device
    }).then((keys) => {
        // TODO: sort keys
        res.render("fw/selectVersion", {
            "urlpart": "/fw/keys/" + req.params.deviceType + "/" + req.params.id,
            "device": device,
            "keySets": keys
        });
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get("/fw/keys/:deviceType/:id/:build", (req, res) => {
    const device = lowerDeviceToUpper(
        sanitize(req.params.deviceType),
        sanitize(req.params.id));
    if (device === "")
        return res.status(404).render("404");

    db.Keys.find({
        device: device,
        build: sanitize(req.params.build)
    }).then((keys) => {
        if (keys.length === 0)
            return res.status(404).render("404");
        if (keys.length !== 1)
            return res.status(500).json(keys);
        res.render("fw/keys", {
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

router.get("/fw/decrypt", (req, res) => {
    res.render("fw/decrypt");
});
router.post("/fw/decrypt/post", (req, res) => {
    // validation
    return res.end("No");
    //if (Object.keys(req.files).length == 0)
    //    return res.status(400).json({ error: "No file provided" });
    if (!req.body.decryptFormIV || !req.body.decryptFormKey)
        return res.status(400).json({ error: "No IV or key provided" });
        console.log(req.body);
    res.end("err");
});

router.get("/fw/files", (req, res) => {
    res.render("fw/fileList");
});
router.get("/fw/files/appleLogo", (req, res) => {
    res.render("fw/files/appleLogo");
});

router.get("/fw/formats/8900", (req, res) => {
    res.render("fw/formats/8900");
});
router.get("/fw/formats/img2", (req, res) => {
    res.render("fw/formats/img2");
});
router.get("/fw/formats/img3", (req, res) => {
    res.render("fw/formats/img3");
});
router.get("/fw/formats/img3/kbag", (req, res) => {
    res.render("fw/formats/img3/kbag");
});
router.get("/fw/formats/img3/type", (req, res) => {
    res.render("fw/formats/img3/type");
});
router.get("/fw/formats/img3/vers", (req, res) => {
    res.render("fw/formats/img3/vers");
});
router.get("/fw/formats/ipsw", (req, res) => {
    res.render("fw/formats/ipsw");
});


module.exports = router;