/* =============================================================================
 * File:   WiFi.tsx
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

import A from "@components/A";
import NoWrap from "./NoWrap";
import React from "react";

// links from https://en.wikipedia.org/wiki/Template:IEEE_standards
const wp = "https://en.wikipedia.org/wiki/";
const hrefMap = {
    legacy: `${wp}IEEE_802.11 (legacy mode)`,
    a: `${wp}IEEE_802.11a-1999`,
    b: `${wp}IEEE_802.11b-1999`,
    c: `${wp}IEEE_802.11c`,
    d: `${wp}IEEE_802.11d-2001`,
    e: `${wp}IEEE_802.11e-2005`,
    f: `${wp}Inter-Access Point Protocol`,
    g: `${wp}IEEE_802.11g-2003`,
    h: `${wp}IEEE_802.11h-2003`,
    i: `${wp}IEEE_802.11i-2004`,
    j: `${wp}IEEE_802.11j-2004`,
    k: `${wp}IEEE_802.11k-2008`,
    n: `${wp}IEEE_802.11n-2009`,
    p: `${wp}IEEE_802.11p`,
    r: `${wp}IEEE_802.11r-2008`,
    s: `${wp}IEEE_802.11s`,
    u: `${wp}IEEE_802.11u`,
    v: `${wp}IEEE_802.11v`,
    w: `${wp}IEEE_802.11w-2009`,
    y: `${wp}IEEE_802.11y-2008`,
    ac: `${wp}IEEE_802.11ac`,
    ad: `${wp}IEEE_802.11ad`,
    af: `${wp}IEEE_802.11af`,
    ah: `${wp}IEEE_802.11ah`,
    ai: `${wp}IEEE_802.11ai`,
    ax: `${wp}IEEE_802.11ax`,
    ay: `${wp}IEEE_802.11ay`,
    be: `${wp}IEEE_802.11be`,
};

const nbh = "\u{2011}";
const brandingMap = {
    n: `Wi${nbh}Fi 4`,
    ac: `Wi${nbh}Fi 5`,
    ax: `Wi${nbh}Fi 6`,
    be: `Wi${nbh}Fi 7`,
};

type WiFiProps = {
    standards: string[];
}

export default function WiFi(props: WiFiProps): React.ReactElement {
    return (
        <NoWrap>
            {props.standards.map((standard, idx) => (
                <React.Fragment key={idx}>
                    {idx !== 0 && " / "}
                    {Object.keys(hrefMap).includes(standard)
                        ? <A href={hrefMap[standard]}>
                            802.11{standard}{Object.keys(brandingMap).includes(standard) && brandingMap[standard]}
                        </A>
                        : `802.11${standard}`}
                </React.Fragment>
            ))}
        </NoWrap>
    );
}
