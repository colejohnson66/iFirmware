/* =============================================================================
 * File:   Prebuild.js
 * Author: Cole Tobin
 * =============================================================================
 * Copyright (c) 2022 Cole Tobin
 *
 * This file is part of iFirmware.
 *
 * iFirmware is free software: you can redistribute it and/or modify it under
 *   the terms of the GNU Affero General Public License as published by the Free
 *   Software Foundation, either version 3 of the License, or (at your option)
 *   any later version.
 *
 * iFirmware is distributed in the hope that it will be useful, but WITHOUT ANY
 *   WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 *   FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License more
 *   details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with iFirmware. If not, see <http://www.gnu.org/licenses/>.
 * =============================================================================
 */

// TODO: Convert to TypeScript

import dir from "node-dir";
import fs from "fs";
import path from "path";

console.log("[SCRIPTS] Generating PageList.ts...");
console.log("[SCRIPTS] Generating sitemap.xml...")


const list = [];

const pagesDir = path.join(process.cwd(), "pages");
dir.files(pagesDir, { sync: true }).forEach((entry) => {
    // cleanup directory separator for Windows
    entry = entry.replace(/\\/g, "/");

    if (!entry.endsWith(".tsx"))
        return;

    // get just the URL part
    entry = entry.substring(pagesDir.length);
    entry = entry.substring(0, entry.length - ".tsx".length)

    // filter out
    if (entry === "/_app" || entry === "/404" || entry.endsWith("[build]"))
        return;

    // cleanup indexes
    if (entry.endsWith("index")) {
        entry = entry.substring(0, entry.length - "/index".length);
        if (entry === "")
            entry = "/"; // webroot fix
    }

    list.push(entry);
});

Object.entries(JSON.parse(fs.readFileSync("data/Keys/HasKeys.json", { encoding: "utf8" })))
    .forEach(([device, builds]) => {
        builds.forEach((build) => {
            // skip builds with no keys
            if (!build[2])
                return;

            // get the internal build if the manufacturing build is present
            const parenIdx = build[1].indexOf("(");
            if (parenIdx !== -1) {
                const firstCut = build[1].substring(parenIdx); // "1145 (8M89)" => "(8M89)"
                list.push(`/key/${device}/${firstCut.substring(1, firstCut.length - 1)}`); // "(8M89)" => "8M89"
                return;
            }
            list.push(`/key/${device}/${build[1]}`);
        });
    });

list.sort();


const PageListLines = [
    "// Auto-generated by /scripts/Prebuild.mjs",
    "// Any edits will be lost during the build process",
    "",
    "const List = [",
];
PageListLines.push(...list.map((entry) => `    "${entry}",`));
PageListLines.push(
    "] as const;",
    "",
    "export type PageListType = typeof List[number];",
    "",
    "const PageList: readonly string[] = List;",
    "export default PageList;",
    "");
fs.writeFileSync("data/PageList.ts", PageListLines.join("\n"), { encoding: "utf8" });

const SiteMapLines = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
];
SiteMapLines.push(...list.map((entry) => `    <url><loc>https://ifirmware.dev${entry}</loc></url>`));
SiteMapLines.push(
    "</urlset>",
    "");
fs.writeFileSync("public/sitemap.xml", SiteMapLines.join("\n"), { encoding: "utf8" });

console.log("          Done.");
