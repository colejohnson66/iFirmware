/* =============================================================================
 * File:   Breadcrumb.tsx
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
import { HomeIcon } from "@heroicons/react/24/outline";

type BreadcrumbRootProps = {
    children: React.ReactNode;
}

function BreadcrumbRoot(props: BreadcrumbRootProps): React.ReactElement {
    return (
        <nav aria-label="breadcrumb" id="breadcrumbs" className="shadow bg-white p-4 rounded-md mx-4 sm:mx-0">
            <ul className="list-none ml-0 pl-2">
                <li >
                    <A href="/">
                        <HomeIcon className="inline h-6 w-6" aria-label="home" />
                    </A>
                </li>
                {props.children}
            </ul>
        </nav>
    );
}

type BreadcrumbItemProps = {
    href?: string;
    children: string | React.ReactNode;
}

function BreadcrumbItem(props: BreadcrumbItemProps): React.ReactElement {
    if (props.href) {
        return (
            <li>
                {/* the slash character is inserted through CSS in `global.css` */}
                <A href={props.href}>
                    {props.children}
                </A>
            </li>
        );
    }

    return <li aria-current="true">{props.children}</li>;
}

export default {
    Root: BreadcrumbRoot,
    Item: BreadcrumbItem,
};
