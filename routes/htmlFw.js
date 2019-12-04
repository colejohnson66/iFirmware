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


router.get("/fw/keys", (req, res) => {
    res.locals.metaTags = {
        title: "Firmware Keys"
    };
    res.render("fw/keys/selectVersion");
});
router.get("/fw/keys/1.x", (req, res) => {
    res.locals.metaTags = {
        title: "Firmware Keys: 1.x"
    };
    res.render("fw/keys/selectBuild", require("../data/firmwares-1x.json"));
});


router.get("/fw/fs", (req, res) => {
    res.locals.metaTags = {
        title: "Filesystem Browser"
    };
    res.render("fw/fs");
});
router.get("/fw/fs/*", (req, res) => {
    // remove trailing slash
    // NOTE: this has the side effect of removing *multiple* trailing slashes instead of 404-ing.
    if (req.url.endsWith("/")) {
        res.redirect(301, req.url.slice(0, -1));
        return;
    }

    const path = req.url.slice("/fw/fs/".length);

    res.locals.metaTags = {
        title: "404"
    };
    res.status(404).render("404");
});


router.get("/fw/decrypt", (req, res) => {
    res.locals.metaTags = {
        title: "Decrypt Firmware"
    };
    res.render("fw/decrypt");
});

router.get("/fw/files", (req, res) => {
    res.locals.metaTags = {
        title: "Firmware Files"
    };
    res.render("fw/fileList");
});
router.get("/fw/files/appleLogo", (req, res) => {
    res.locals.metaTags = {
        title: "AppleLogo"
    };
    res.render("fw/files/appleLogo");
});
router.get("/fw/files/deviceTree", (req, res) => {
    res.locals.metaTags = {
        title: "DeviceTree"
    };
    res.render("fw/files/deviceTree", require("./devices.json"));
});
router.get("/fw/files/deviceTree/iphone/1,1", (req, res) => {
    res.locals.metaTags = {
        title: "DeviceTree: iPhone1,1"
    };
    res.render("fw/files/deviceTree/iphone1,1");
});

router.get("/fw/formats/8900", (req, res) => {
    res.locals.metaTags = {
        title: "8900"
    };
    res.render("fw/formats/8900");
});
router.get("/fw/formats/img2", (req, res) => {
    res.locals.metaTags = {
        title: "IMG2"
    };
    res.render("fw/formats/img2");
});
router.get("/fw/formats/img3", (req, res) => {
    res.locals.metaTags = {
        title: "IMG3"
    };
    res.render("fw/formats/img3");
});
router.get("/fw/formats/img3/kbag", (req, res) => {
    res.locals.metaTags = {
        title: "IMG3 Tag: KBAG"
    };
    res.render("fw/formats/img3/kbag");
});
router.get("/fw/formats/img3/sepo", (req, res) => {
    res.locals.metaTags = {
        title: "IMG3 Tag: SEPO"
    };
    res.render("fw/formats/img3/sepo");
});
router.get("/fw/formats/img3/type", (req, res) => {
    res.locals.metaTags = {
        title: "IMG3 Tag: TYPE"
    };
    res.render("fw/formats/img3/type");
});
router.get("/fw/formats/img3/vers", (req, res) => {
    res.locals.metaTags = {
        title: "IMG3 Tag: VERS"
    };
    res.render("fw/formats/img3/vers");
});
router.get("/fw/formats/ipsw", (req, res) => {
    res.locals.metaTags = {
        title: "IPSW"
    };
    res.render("fw/formats/ipsw");
});
router.get("/fw/formats/plist", (req, res) => {
    res.locals.metaTags = {
        title: "Property List"
    };
    res.render("fw/formats/plist");
});


module.exports = router;