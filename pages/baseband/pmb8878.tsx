/* =============================================================================
 * File:   pmb8878.tsx
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
import BasebandVersionList from "@library/BasebandVersionList";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import NoWrap from "@components/NoWrap";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="baseband" pageTitle="PMB8878" canonical="/baseband/pmb8878">
            <Layout.Title title="PMB8878" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/baseband">Baseband</Breadcrumb.Item>
                <Breadcrumb.Item>PMB8878</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFirmwareVersions" text="Known Firmware Versions">
                        <Toc.Entry href="#headingFirmwareVersionsIPad" text="iPad" />
                        <Toc.Entry href="#headingFirmwareVersionsIPhone" text="iPhone 3G and 3GS" />
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    The PMB8878 is the baseband processor used in the <A href="/device/ipad/1g">original iPad</A>, <A href="/device/iphone/3g">iPhone 3G</A>, and <A href="/device/iphone/3gs">iPhone 3GS</A>.
                    It is manufactured by Infineon and marketed as the <NoWrap>&quot;X-Gold 608.&quot;</NoWrap>
                </p>

                <Clear />

                <h2 id="headingFirmwareVersions">Known Firmware Versions</h2>
                <p>
                    Some versions are marked with question marks in them.
                    This is because those portions of the version number are unknown.
                </p>

                <h3 id="headingFirmwareVersionsIPad">iPad</h3>
                {BasebandVersionList([
                    ["06.15.00", "3.2", "7B367"],
                    ["3.2.1", "7B405"],
                    ["3.2.2", "7B500"],
                    ["07.08.00", "4.2 beta", "8C5091e"],
                    ["07.09.00", "4.2 beta 2", "8C5101"],
                    ["07.10.00", "4.2 beta 3", "8C5115c"],
                    ["4.2", <>Builds 8C134 and 8C134b</>],
                    ["4.2.1 GM", "8C148"],
                    ["4.2.1", "8C148"],
                    ["07.11.00", "4.3 beta", "8F5148b"],
                    ["4.3 beta 2", "8F5153d"],
                    ["4.3 beta 3", "8F5166b"],
                    ["4.3 GM", "8F190"],
                    ["4.3", "8F190"],
                    ["07.11.01", "4.3.1", "8G4"],
                    ["4.3.2", "8H7"],
                    ["4.3.3", "8J3"],
                    ["4.3.4", "8K2"],
                    ["4.3.5", "8L1"],
                    ["5.0 beta", "9A5220p"],
                    ["5.0 beta 2", "9A5248d"],
                    ["5.0 beta 3", "9A5258f"],
                    ["5.0 beta 4", "8A5274d"],
                    ["5.0 beta 5", "8A5288d"],
                    ["5.0 beta 6", "8A5302b"],
                    ["5.0 beta 7", "8A5313e"],
                    ["5.0 GM", "9A334"],
                    ["5.0.1 beta", "9A402"],
                    ["5.0.1 beta 2", "9A404"],
                    ["5.0.1", "9A405"],
                    ["5.1 beta", "9B5117b"],
                    ["5.1 beta 2", "9B5127c"],
                    ["5.1 beta 3", "9B5141a"],
                    ["5.1", "9B176"],
                    ["5.1.1", "9B206"],
                ])}

                <h3 id="headingFirmwareVersionsIPhone">iPhone 3G and 3GS</h3>
                {BasebandVersionList([
                    ["01.43.00", "2.0 beta 7", "5A331; Internal Beta"],
                    ["01.43.02", "2.0", "Unknown; Internal Beta"],
                    ["01.45.00", "2.0", "5A345"],
                    ["01.45.00", "2.0", "5A347"],
                    ["01.48.02", "2.0.1", "5B108"],
                    ["02.08.01", "2.0.2", "5C1"],
                    ["02.11.07", "2.1", "5F136"],
                    ["02.??.??", "2.2 beta", "5G29"],
                    ["02.??.??", "2.2 beta 2", "5G53"],
                    ["02.28.00", "2.2", "5G77"],
                    ["02.30.03", "2.2.1", "5H11"],
                    ["04.20.01", "3.0 beta", "7A238j"],
                    ["04.22.01", "3.0 beta 2", "7A259g"],
                    ["04.24.02", "3.0 beta 3", "7A280f"],
                    ["04.26.04", "3.0 beta 4", "7A300g"],
                    ["04.26.08", "3.0 beta 5", "7A312g"],
                    ["3.0 GM", "7A341"],
                    ["3.0", "7A341"],
                    ["3.0.1", "7A400"],
                    ["05.08.01", "3.1 beta", "7C97d"],
                    ["05.10.01", "3.1 beta 2", "7C106c"],
                    ["05.11.04", "3.1 beta 3", "7C116a"],
                    ["05.11.07", "3.1", "7C144"],
                    ["3.1.2", "7D11"],
                    ["05.12.01", "3.1.3", "7E18"],
                    ["05.13.03", "4.0 beta", "8A230m"],
                    ["4.0 beta 2", "8A248c"],
                    ["05.13.04", "4.0 beta 3   ", "8A260b"],
                    ["4.0 beta 4", "8A274b"],
                    ["4.0 GM", "8A293"],
                    ["4.0", "8A293"],
                    ["4.0.1", "8A306"],
                    ["4.0.2", "8A400"],
                    ["4.1 beta", "8B5080c"],
                    ["05.14.01", "4.1 beta 2", "8B5091b"],
                    ["4.1 beta 3", "8B5097d"],
                    ["05.14.02", "4.1", "8B117"],
                    ["05.15.01", "4.2 beta", "8C5091e"],
                    ["4.2 beta 2", "8C5101c"],
                    ["05.15.04", "4.2 beta 3", "8C5115c"],
                    ["4.2 GM", "8C134"],
                    ["4.2.1 GM", "8C148"],
                    ["4.2.1", "8C148a"],
                    ["05.16.00", "4.3 beta", "8F5148b"],
                    ["4.3 beta 2", "8F5153d"],
                    ["4.3 beta 3", "8F5166b"],
                    ["4.3 GM", "8F190"],
                    ["05.16.01", "4.3", "8F190"],
                    ["05.16.02", "4.3.1", "8G4"],
                    ["4.3.2", "8H7"],
                    ["4.3.3", "8J2"],
                    ["4.3.4", "8K2"],
                    ["4.3.5", "8L1"],
                    ["5.0 beta", "9A5220p"],
                    ["5.0 beta 2", "9A5248d"],
                    ["5.0 beta 3", "9A5258f"],
                    ["5.0 beta 4", "9A5274d"],
                    ["05.16.05", "5.0 beta 5", "9A5288d"],
                    ["5.0 beta 6", "9A5302b"],
                    ["5.0 beta 7", "9A5313e"],
                    ["5.0 GM", "9A334"],
                    ["5.0.1 beta", "9A402"],
                    ["5.0.1 beta 2", "9A404"],
                    ["5.0.1", "9A405"],
                    ["5.1 beta", "9B5117b"],
                    ["5.1 beta 2", "9B5127c"],
                    ["5.1 beta 3", "9B5141a"],
                    ["5.1", "9B176"],
                    ["5.1.1", "9B206"],
                    ["05.16.06", "6.0 beta", "10A5316k"],
                    ["6.0 beta 2", "10A5336d"],
                    ["6.0 beta 3", "10A5355d"],
                    ["6.0 beta 4", "10A5376e"],
                    ["05.16.07", "6.0 GM", "10A403"],
                    ["6.0", "10A403"],
                    ["6.0.1", "10A523"],
                    ["6.1 beta", "10B5095f"],
                    ["6.1 beta 2", "10B5105c"],
                    ["6.1 beta 3", "10B5117b"],
                    ["6.1 beta 4", "10B5126b"],
                    ["6.1 beta 5", "10B141"],
                    ["6.1", "10B141"],
                    ["6.1.1 beta", "10B311"],
                    ["05.16.08", "6.1.2", "10B146"],
                    ["6.1.3 beta 2", "10B318"],
                    ["6.1.3", "10B329"],
                    ["6.1.6", "10B500"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
