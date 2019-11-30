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
    res.render("fw/keys/selectVersion");
});
router.get("/fw/keys/1.x", (req, res) => {
    res.render("fw/keys/selectBuild", require("../data/firmwares-1x.json"));
});


router.get("/fw/fs", (req, res) => {
    res.render("fw/fs");
});


router.get("/fw/decrypt", (req, res) => {
    res.render("fw/decrypt");
});

router.get("/fw/files", (req, res) => {
    res.render("fw/fileList");
});
router.get("/fw/files/appleLogo", (req, res) => {
    res.render("fw/files/appleLogo");
});
router.get("/fw/files/deviceTree", (req, res) => {
    res.render("fw/files/deviceTree", require("./devices.json"));
});
router.get("/fw/files/deviceTree/iphone/1,1", (req, res) => {
    res.render("fw/files/deviceTree/iphone1,1");
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
router.get("/fw/formats/img3/sepo", (req, res) => {
    res.render("fw/formats/img3/sepo");
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
router.get("/fw/formats/plist", (req, res) => {
    res.render("fw/formats/plist");
});


module.exports = router;