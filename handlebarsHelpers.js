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
module.exports = {
    addNum: (a, b) => {
        if (typeof a === "string")
            a = parseInt(a);
        if (typeof b === "string")
            b = parseInt(b);
        return a + b;
    },

    firmwareItemNameMapper: (fwItemName) => {
        if (fwItemName === "rootFS")
            return "Root Filesystem";
        if (fwItemName === "updateRamdisk")
            return "Update Ramdisk";
        return fwItemName;
    },

    // use "function" syntax so "arguments" works
    toArray: function (...params) {
        return params.slice(0, -1);
    }
};