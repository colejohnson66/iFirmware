/* =============================================================================
 * File:   pmb8876.tsx
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
import BasebandVersionList from "@library/BasebandVersionList";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import NoWrap from "@components/NoWrap";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="baseband" pageTitle="PMB8876" canonical="/processor/pmb8876">
            <Layout.Title title="PMB8876" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/baseband">Baseband</Breadcrumb.Item>
                <Breadcrumb.Item>PMB8876</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFirmwareVersions" text="Known Firmware Versions" />
                </Toc.Root>
                <p>
                    The PMB8876 is the baseband processor used in the <A href="/device/iphone/2g">original iPhone</A>.
                    It is manufactured by Infineon and marketed as the <NoWrap>&quot;S-Gold 2.&quot;</NoWrap>
                </p>

                <Clear />

                <h2 id="headingFirmwareVersions">Known Firmware Versions</h2>
                <p>
                    Some versions are marked with question marks in them.
                    This is because those portions of the version number are unknown.
                </p>
                {BasebandVersionList([
                    ["03.06.01_G", "1.0", "1A420"],
                    ["03.11.02_G", "1.0", "1A543a"],
                    ["03.12.08_G", "1.0.1", "1C25"],
                    ["03.14.08_G", "1.0.2", "1C28"],
                    ["04.01.13_G", "1.1.1", "3A109a"],
                    ["04.02.13_G", "1.1.2", "3B48b"],
                    ["04.03.13_G", "1.1.3", "4A93"],
                    ["04.04.05_G", "1.1.4", "4A102"],
                    ["04.0?.??_G", "1.2 beta", "5A147p"],
                    ["04.05.01_G", "2.0 beta 2", "5A225c"],
                    ["2.0 beta 3", "5A240d"],
                    ["04.05.02_G", "2.0 beta 4", "5A258f"],
                    ["04.05.0?_G", "2.0 beta 5", "5A274d"],
                    ["04.05.0?_G", "2.0 beta 6 Pre-release", "5A292g"],
                    ["04.05.0?_G", "2.0 beta 6 Final", "5A308"],
                    ["04.05.04_G", "2.0 beta 7", "5A331"],
                    ["2.0 GM", "5A345"],
                    ["2.0", "5A347"],
                    ["2.0.1", "5B108"],
                    ["2.0.2", "5C1"],
                    ["2.1 beta", "5F90"],
                    ["2.1 beta 2", "5F97"],
                    ["2.1 beta 3", "5F108"],
                    ["2.1 beta 4", "5F116"],
                    ["2.1", "5F136"],
                    ["2.2 beta", "5G29"],
                    ["2.2 beta 2", "5G53"],
                    ["2.2", "5G77"],
                    ["2.2.1", "5H11"],
                    ["3.0 beta", "7A238j"],
                    ["3.0 beta 2", "7A259g"],
                    ["3.0 beta 3", "7A280f"],
                    ["3.0 beta 4", "7A300g"],
                    ["3.0 beta 5", "7A312g"],
                    ["3.0 GM", "7A341"],
                    ["3.0", "7A341"],
                    ["3.0.1", "7A400"],
                    ["3.1 beta", "7C97d"],
                    ["3.1 beta 2", "7C106c"],
                    ["3.1 beta 3", "7C116a"],
                    ["3.1", "7C144"],
                    ["3.1.2", "7D11"],
                    ["3.1.3", "7E18"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
