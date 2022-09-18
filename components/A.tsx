/* =============================================================================
 * File:   A.tsx
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

import Link from "next/link";
import PageList from "@data/PageList";
import React from "react";

// TODO: next uses 'url.UrlObject | string' for 'href'; is that needed here?
type AProps = {
    href: string;
    className?: string[];
    children: React.ReactNode;
}

export default function A(props: AProps): React.ReactElement {
    const classes = props.className ?? [];

    // local link?
    if (props.href[0] === "#") {
        return (
            <Link href={props.href}>
                <a className={classes.join(" ")}>{props.children}</a>
            </Link>
        );
    }

    // internal link? (internal links without slash are invalid)
    if (props.href[0] === "/") {
        // add `redlink` if the page doesn't exist (ignore any ID part of the link)
        if (!PageList.includes(props.href.split("#")[0]))
            classes.push("redlink");
        return (
            <Link href={props.href}>
                <a className={classes.join(" ")}>{props.children}</a>
            </Link>
        );
    }

    // it's external
    return <a href={props.href} className={classes.join(" ")} rel="external">{props.children}</a>;
}
