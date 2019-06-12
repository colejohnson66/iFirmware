const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KeysSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    filepath: {
        type: String,
        required: true
    },
    encrypted: Boolean,
    // TODO: Add validation
    iv: String,
    key: String,
    kbag: String
});
const FirmwareSchema = new Schema({
    version: {
        type: String,
        required: true
    },
    build: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true,
        validate: (str) => /[a-zA-Z]+\d+,\d+/.test(str)
    },
    codename: {
        type: String,
        required: true
    },
    baseband: String,
    ipswUrl: String,
    keys: {
        type: [KeysSchema],
        required: true
    }
});

module.exports = mongoose.model("Keys", FirmwareSchema);