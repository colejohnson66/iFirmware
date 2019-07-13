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

const UpdateSchema = new Schema({
    version: {
        type: String,
        required: true
    },
    build: {
        type: String,
        required: true
    },
    prereqVersion: String,
    prereqBuild: String,
    releaseDate: {
        type: Date,
        required: true
    },
    releaseType: {
        type: String,
        enum: ["Beta", "Carrier", "Normal"],
        required: true
    },
    downloadUrl: {
        type: String,
        required: true,
    },
    downloadSize: Number
});

module.exports = mongoose.model("Ota", UpdateSchema);