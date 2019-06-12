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