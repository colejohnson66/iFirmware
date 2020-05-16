/* This file is part of iDecryptIt.
 * Copyright (c) 2020 Cole Johnson
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
// links from https://en.wikipedia.org/wiki/Template:IEEE_standards
const map = {
    a: "https://en.wikipedia.org/wiki/IEEE_802.11a-1999",
    b: "https://en.wikipedia.org/wiki/IEEE_802.11b-1999",
    c: "https://en.wikipedia.org/wiki/IEEE_802.11c",
    d: "https://en.wikipedia.org/wiki/IEEE_802.11d-2001",
    e: "https://en.wikipedia.org/wiki/IEEE_802.11e-2005",
    f: "https://en.wikipedia.org/wiki/Inter-Access_Point_Protocol",
    g: "https://en.wikipedia.org/wiki/IEEE_802.11g-2003",
    h: "https://en.wikipedia.org/wiki/IEEE_802.11h-2003",
    i: "https://en.wikipedia.org/wiki/IEEE_802.11i-2004",
    j: "https://en.wikipedia.org/wiki/IEEE_802.11j-2004",
    k: "https://en.wikipedia.org/wiki/IEEE_802.11k-2008",
    n: "https://en.wikipedia.org/wiki/IEEE_802.11n-2009",
    p: "https://en.wikipedia.org/wiki/IEEE_802.11p",
    r: "https://en.wikipedia.org/wiki/IEEE_802.11r-2008",
    s: "https://en.wikipedia.org/wiki/IEEE_802.11s",
    u: "https://en.wikipedia.org/wiki/IEEE_802.11u",
    v: "https://en.wikipedia.org/wiki/IEEE_802.11v",
    w: "https://en.wikipedia.org/wiki/IEEE_802.11w-2009",
    y: "https://en.wikipedia.org/wiki/IEEE_802.11y-2008",
    ac: "https://en.wikipedia.org/wiki/IEEE_802.11ac",
    ad: "https://en.wikipedia.org/wiki/IEEE_802.11ad",
    af: "https://en.wikipedia.org/wiki/IEEE_802.11af",
    ah: "https://en.wikipedia.org/wiki/IEEE_802.11ah",
    ai: "https://en.wikipedia.org/wiki/IEEE_802.11ai",
    ax: "https://en.wikipedia.org/wiki/IEEE_802.11ax",
    ay: "https://en.wikipedia.org/wiki/IEEE_802.11ay",
    be: "https://en.wikipedia.org/wiki/IEEE_802.11be"
};

export default (props) => {
    if (!Array.isArray(props.standards))
        return <span className="text-danger">ERROR: <code>props.standards</code> must be an array</span>;

    const linksElems = props.standards.map((standard, idx) => {
        if (Object.keys(map).includes(standard))
            return (
                <>
                    {idx !== 0 ? " / " : null}
                    <a href={map[standard]} className="external" key={idx}>802.11{standard}</a>
                </>
            );
        return (
            <>
                {idx !== 0 ? " / " : null}
                <span key={idx}>802.11{standard}</span>
            </>
        );;
    });

    return (
        <span className="text-nowrap">
            {linksElems}
        </span>
    );
};
