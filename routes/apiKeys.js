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


router.get("/api/keys", (req, res) => {
    db.Keys.find({}).then((keys) => {
        res.json(keys);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.post("/api/keys", (req, res) => {
    if (req.body.apiKey !== process.env.IOS_API_KEY)
        return res.status(401).json({ "error": "invalid API key" });

    const keySetArr = req.body.body;
    try {
        keySetArr.forEach((keySet) => {
            let build = keySet.build;
            let device = keySet.device;
            console.log(build, device);
            db.Keys.findOneAndDelete({
                where: {
                    build: sanitize(build),
                    device: sanitize(device)
                }
            }, (delErr, dbRes) => { // TODO: both these are null; it doesn't delete the old entry
                if (delErr)
                    return res.status(500).json(delErr);

                let newDoc = new db.Keys();
                newDoc.version = keySet.version;
                newDoc.build = keySet.build;
                newDoc.device = keySet.device;
                newDoc.codename = keySet.codename;
                newDoc.baseband = keySet.baseband;
                newDoc.ipswUrl = keySet.ipswUrl;
                newDoc.keys = [];
                keySet.keys.forEach((keyPair) => {
                    let newKeyPair = {};
                    newKeyPair.type = keyPair.type;
                    newKeyPair.filepath = keyPair.filepath;
                    newKeyPair.encrypted = keyPair.encrypted;
                    newKeyPair.iv = keyPair.iv;
                    newKeyPair.key = keyPair.key;
                    newKeyPair.kbag = keyPair.kbag;
                    newDoc.keys.push(newKeyPair);
                });

                let syncErr = newDoc.validateSync();
                if (syncErr)
                    return res.status(400).json(syncErr);

                newDoc.save((saveErr) => {
                    if (saveErr)
                        return res.status(500).json(saveErr);
                    res.json(newDoc);
                });
            });
        });
    } catch (ex) {
        res.status(400).json({ "error": "invalid body" });
    }
});

router.get("/api/keys/:device/:build", (req, res) => {
    db.Keys.find({
        device: sanitize(req.params.device),
        build: sanitize(req.params.build)
    }).then((keys) => {
        res.json(keys);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


module.exports = router;