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
import React from "react";

export default (props) => {
    // add the index prop to the children
    const newChildren = React.Children.map(props.children, (child, idx) => {
        if (React.isValidElement(child))
            return React.cloneElement(child, { index: idx });
        return child;
    });

    // TODO: support columns
    return (
        <>
            <h2 id="headingReferences">References</h2>
            <ul className="referenceList">
                {newChildren}
            </ul>
        </>
    );
};
