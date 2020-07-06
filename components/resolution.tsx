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
import Unit from "./unit";

type ResolutionProps = {
    diagonal: string | number,
    width: string | number,
    height: string | number
};

export default (props: ResolutionProps) => {
    return (
        <span className="text-nowrap"><Unit value={props.diagonal} unit="in" /> diagonal, {props.width}x{props.height} pixels</span>
    );
};
