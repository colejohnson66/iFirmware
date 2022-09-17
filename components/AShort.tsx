/* =============================================================================
 * File:   AShort.tsx
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

import A from "./A";
import React from "react";

type AProps = {
    to: "wp";
    title: string;
    children: React.ReactNode;
}

/**
 * A simple wrapper around `<A>` for common link destinations.
 *
 * @param props.title The portion of the URL for the destination website.
 * @param props.to What website to go to:
 *     * `wp`: English Wikipedia
 */
export default function AWikipedia(props: AProps): React.ReactElement {
    if (props.to === "wp")
        return <A href={`https://en.wikipedia.org/wiki/${props.title}`}>{props.children}</A>;
    throw "";
}
