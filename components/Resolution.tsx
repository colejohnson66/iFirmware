/* =============================================================================
 * File:   Resolution.tsx
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

import NoWrap from "./NoWrap";
import React from "react";

type ResolutionProps = {
    diagonal: string | number;
    width: string | number;
    height: string | number;
}

export default function Resolution(props: ResolutionProps): React.ReactElement {
    return (
        <>
            <NoWrap>{props.diagonal} in diagonal, {props.width}&times;{props.height} pixels</NoWrap>
        </>
    );
}
