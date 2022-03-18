/* =============================================================================
 * File:   WiFi.tsx
 * Author: Cole Tobin
 * =============================================================================
 * Copyright (c) 2022 Cole Tobin
 *
 * This file is part of iDecryptIt-Web.
 *
 * iDecryptIt-Web is free software: you can redistribute it and/or modify it
 *   under the terms of the GNU Affero General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or (at your
 *   option) any later version.
 *
 * iDecryptIt-Web is distributed in the hope that it will be useful, but WITHOUT
 *   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *   FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 *   more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with iDecryptIt-Web. If not, see <http://www.gnu.org/licenses/>.
 * =============================================================================
 */

import A from "@components/A";
import React from "react";

// links from https://en.wikipedia.org/wiki/Template:IEEE_standards
const wp = "https://en.wikipedia.org/wiki/";
const map = {
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

type WiFiProps = {
    standards: string[];
}

export default function WiFi(props: WiFiProps): React.ReactElement {
    return (
        <span className="whitespace-nowrap">
            {props.standards.map((standard, idx) => (
                <React.Fragment key={idx}>
                    {idx !== 0 && " / "}
                    {Object.keys(map).includes(standard)
                        ? <A href={map[standard]}>802.11{standard}</A>
                        : `802.11${standard}`}
                </React.Fragment>
            ))}
        </span>
    );
}
