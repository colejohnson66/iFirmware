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
const moment = require("moment");

module.exports = {
    addNum: (a, b) => {
        if (typeof a === "string")
            a = parseInt(a);
        if (typeof b === "string")
            b = parseInt(b);
        return a + b;
    },

    arr: (...params) => {
        const params2 = params.slice(0, -1);
        // TODO: FIXME: returns object instead of an array
        return params2;
    },

    breadcrumbs: (...params) => {
        const params2 = params.slice(0, -1);
        console.log(params2);

        if (params2.length === 0)
            return "ERROR1";
        // TODO: check that all but the last are of type Array
        if (typeof params2[params2.length - 1] !== "string")
            return "ERROR2";

        var ret = "<nav aria-label=\"breadcrumb\">\r\n"
        ret += "        <ol class=\"breadcrumb\">\r\n";

        // minus 1 on the range to ignore the last breadcrumb (it's handled below the for loop)
        for (let i = 0; i < params2.length - 1; i++) {
            // TODO: FIXME: should be an array (see `arr` above)
            if (typeof params2[i] !== "object")
                return "ERROR3";
            ret += `            <li class="breadcrumb-item"><a href="${params2[i][1]}">${params2[i][0]}</a></li>\r\n`
        }

        ret += `            <li class="breadcrumb-item active" aria-current="page">${params2[params2.length - 1]}</li>\r\n`;

        ret += "        </ol>\r\n"
        ret += "    </nav>";
        return ret;
    },

    date: (str) => {
        return "<span class=\"date\">" +
            moment(str).format("D MMM YYYY") +
            "</span>";
    },

    dateAndTime: (str) => {
        return "<span class=\"date\">" +
            moment(str).format("D MMM YYYY, h:mm:ss A") +
            "</span>";
    },

    firmwareItemNameMapper: (fwItemName) => {
        if (fwItemName === "rootFS")
            return "Root Filesystem";
        if (fwItemName === "updateRamdisk")
            return "Update Ramdisk";
        return fwItemName;
    },

    moment: (str) => {
        return "<span class=\"date\">" +
            moment(str).format() +
            "</span>";
    }
};