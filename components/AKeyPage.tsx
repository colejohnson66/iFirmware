/* =============================================================================
 * File:   AKeyPage.tsx
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

type OneDigitNumber = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type DeviceType = "AppleTV" | "Watch" | "iBridge" | "AudioAccessory" | "iPad" | "iPhone" | "iPod";
type DeviceModelNumber = `${"" | "1" | "2"}${OneDigitNumber}`;

type AKeyPageProps = {
    device: `${DeviceType}${DeviceModelNumber},${DeviceModelNumber}`;
    version: string;
    build: string;
}

export default function AKeyPage(props: AKeyPageProps): React.ReactElement {
    return (
        <A href={`/key/${props.build.toLowerCase()}/${props.device.toLowerCase().replace(",", "-")}`}>
            {props.version} ({props.build})
        </A>
    );
}
