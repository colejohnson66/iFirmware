/* =============================================================================
 * File:   BasebandVersionList.tsx
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

import React from "react";

function VersionAndBuild(key: number, version: React.ReactNode, build: React.ReactNode): React.ReactElement {
    if (typeof build === "string")
        return <dd key={key}>{version} (Build {build})</dd>;
    return <dd key={key}>{version} ({build})</dd>;
}

/**
 * A baseband version to iOS version listing.
 * This generates a `<dl>` (definition list) tag with a `<dt>` tag for each baseband version, and a `<dd>` tag for each
 *   iOS version.
 *
 * @param args An array of arrays.
 *   Each inner array contains an iOS version and, optionally, a baseband version.
 *   If the inner array is two elements long, it is treated as a tuple of the iOS version and build number.
 *   If it's three elements long, it is treated as a tuple of a (new) baseband version, iOS version, and iOS build
 *     number.
 *
 *   In each row, if the last element is a string, it has the word "Build" prepended to it.
 *   However, if it's a JSX node, it is untouched, so the "Build(s)" string must be explicitly included.
 */
export default function BasebandVersionList(args: (string | React.ReactNode)[][]): React.ReactElement {
    const tags: React.ReactElement[] = [];

    args.forEach((row, idx) => {
        if (row.length === 3) {
            tags.push(<dt key={idx * 2}>{row[0]}</dt>);
            tags.push(VersionAndBuild(idx * 2 + 1, row[1], row[2]));
        } else
            tags.push(VersionAndBuild(idx * 2, row[0], row[1]));
    });

    return <dl>{tags}</dl>;
}
