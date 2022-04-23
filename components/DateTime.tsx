/* =============================================================================
 * File:   DateTime.tsx
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

type DateTimeProps = {
    value: string;
    text?: string; // override text
}

export default function DateTime(props: DateTimeProps): React.ReactElement {
    // TODO: verify if `props.dateTime` is valid
    // see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
    return (
        <time dateTime={props.value} className="whitespace-nowrap">
            {props.text ? props.text : props.value}
        </time>
    );
}
