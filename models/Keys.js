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