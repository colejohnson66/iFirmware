/* =============================================================================
 * File:   xmm6180.tsx
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
        <Layout.Root navGroup="baseband" pageTitle="XMM6180" canonical="/baseband/xmm6180">
            <Layout.Title title="XMM6180" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/baseband">Baseband</Breadcrumb.Item>
                <Breadcrumb.Item>XMM6180</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFirmwareVersions" text="Known Firmware Versions" />
                </Toc.Root>
                <p>
                    The XMM6180 is the baseband processor used in the <A href="/device/ipad/2g">iPad 2</A> (<code>iPad2,2</code> model) and <A href="/device/iphone/4">iPhone 4</A> (<code>iPhone3,1</code> and <code>iPhone3,2</code> models).
                    It is manufactured by Infineon and marketed as the <NoWrap>&quot;X-Gold 618.&quot;</NoWrap>
                </p>

                <Clear />

                <h2 id="headingFirmwareVersions">Known Firmware Versions</h2>
                {BasebandVersionList([
                    ["01.59.00", "4.0", "8A293"],
                    ["4.0.1", "8A306"],
                    ["4.0.2", "8A400"],
                    ["02.07.01", "4.1 beta", "8B5080c"],
                    ["02.10.01", "4.1 beta 2", "8B5091b"],
                    ["4.1 beta 3", "8B5097d"],
                    ["02.10.04", "4.1", "8B117"],
                    ["03.08.00", "4.2 beta", "8C5091e"],
                    ["03.09.00", "4.2 beta 2", "8C5101c"],
                    ["03.10.01", "4.2 beta 3", "8C5115c"],
                    ["4.2 GM", "8C134"],
                    ["4.2.1 GM", "8C148"],
                    ["4.2.1", "8C148"],
                    ["04.08.00", "4.3 beta", "8F5132f"],
                    ["4.3 beta", "8F5148b"],
                    ["04.09.00", "4.3 beta 2", "8F5153d"],
                    ["04.10.01", "4.3 beta 3", "8F5166b"],
                    ["4.3 GM", "8F190"],
                    ["4.3", <>Builds 8F190 and 8F191</>],
                    ["4.3.1", "8G4"],
                    ["4.3.2", "8H7"],
                    ["4.3.3", "8J2"],
                    ["4.3.4", "8K2"],
                    ["4.3.5", "8L1"],
                    ["04.11.04", "5.0 beta", "9A5220p"],
                    ["04.11.06", "5.0 beta 2", "9A5248d"],
                    ["5.0 beta 3", "9A5259f"],
                    ["5.0 beta 4", "9A5274d"],
                    ["04.11.07", "5.0 beta 5", "9A5288d"],
                    ["04.11.08", "5.0 beta 6", "9A5302b"],
                    ["5.0 beta 7", "9A5313e"],
                    ["5.0 GM", "9A334"],
                    ["5.0.1 beta", "9A402"],
                    ["5.0.1 beta 2", "9A404"],
                    ["5.0.1", "9A405"],
                    ["04.12.00", "5.1 beta", "9B5117b"],
                    ["5.1 beta 2", "9B5127c"],
                    ["04.12.01", "5.1 beta 3", "9B5141a"],
                    ["5.1", "9B176"],
                    ["5.1.1", "9B206"],
                    ["04.12.02", "6.0 beta", "10A5316k"],
                    ["6.0 beta 2", "10A5336d"],
                    ["6.0 beta 3", "10A5355d"],
                    ["6.0 beta 4", "10A5376e"],
                    ["6.0 GM", "10A403"],
                    ["6.0", "10A403"],
                    ["6.0.1", "10A523"],
                    ["6.1 beta", "10B5095f"],
                    ["6.1 beta 2", "10B5105c"],
                    ["6.1 beta 3", "10B5117b"],
                    ["6.1 beta 4", "10B5126b"],
                    ["6.1 beta 5", "10B141"],
                    ["6.1 beta 5", "10B144"],
                    ["04.12.05", "6.1", <>Build 10B141 and 10B144</>],
                    ["6.1.1 beta", "10B311"],
                    ["6.1.2", "10B146"],
                    ["6.1.3 beta 2", "10B311"],
                    ["6.1.3", "10B329"],
                    ["04.12.06", "7.0 beta", "11A4372q; iPhone only"],
                    ["7.0 beta 2", "11A4400f"],
                    ["04.12.08", "7.0 beta 3", "11A4414e"],
                    ["7.0 beta 4", "11A4435d"],
                    ["04.12.09", "7.0 beta 5", "11A4449a"],
                    ["7.0 beta 6", "11A4449d"],
                    ["7.0 GM", "11A465"],
                    ["7.0", "11A465"],
                    ["7.0.2", "11A501"],
                    ["7.0.3", "11B511"],
                    ["7.0.4", "11B554a"],
                    ["7.0.6", "11B651"],
                    ["7.1 beta", "11D5099e"],
                    ["7.1 beta 2", "11D5115d"],
                    ["7.1 beta 3", "11D5127c"],
                    ["7.1 beta 4", "11D5134c"],
                    ["7.1 beta 5", "11D5145e"],
                    ["7.1", "11D167 & 11D169"],
                    ["7.1.1", "11D201"],
                    ["7.1.2", "11D257"],
                    ["8.0 beta", "12A4265u"],
                    ["8.0 beta 2", "12A4297e"],
                    ["8.0 beta 3", "12A4318c"],
                    ["8.0 beta 4", "12A4331d"],
                    ["8.0 beta 5", "12A4345d"],
                    ["8.0 GM", "12A365"],
                    ["8.0", "12A365"],
                    ["8.0.1", "12A402"],
                    ["8.0.2", "12A405"],
                    ["8.1 beta", "12B401"],
                    ["8.1 beta 2", "12B407"],
                    ["8.1", "12B410"],
                    ["8.1.1 beta", "12B432"],
                    ["8.1.1", "12B435"],
                    ["8.1.2", "12B440"],
                    ["8.1.3", "12B466"],
                    ["8.2 beta", "12D436"],
                    ["8.2 beta 2", "12D445d"],
                    ["8.2 beta 3", "12D5452a"],
                    ["8.2 beta 4", "12D5461b"],
                    ["8.2 beta 5", "12D5480a"],
                    ["8.2", "12D508"],
                    ["8.3 beta", "12F5027d"],
                    ["8.3 beta 2", "12F5037c"],
                    ["8.3 beta 3", "12F5047f"],
                    ["8.3 beta 4", "12F61"],
                    ["8.3", "12F69"],
                    ["8.4 beta 2", "12H4086d"],
                    ["8.4 beta 3", "12H4098c"],
                    ["8.4 beta 4", "12H4125a"],
                    ["8.4", "12H143"],
                    ["8.4.1 beta", "12H304"],
                    ["8.4.1 beta 2", "12H318"],
                    ["8.4.1", "12H321"],
                    ["9.0 beta", "13A4254v"],
                    ["9.0 beta 2", "13A4280e"],
                    ["9.0 beta 3", "13A4293g"],
                    ["9.0 beta 4", "13A4305g"],
                    ["9.0 beta 5", "13A4325c"],
                    ["9.0 GM", "13A340"],
                    ["9.0", "13A344"],
                    ["9.0.1", "13A404"],
                    ["9.0.2", "13A452"],
                    ["9.1 beta", "13B5110e"],
                    ["9.1 beta 2", "13B5119e"],
                    ["9.1 beta 3", "13B5130b"],
                    ["9.1 beta 4", "13B136"],
                    ["9.1 beta 5", "13B137"],
                    ["9.1", "13B143"],
                    ["9.2 beta", "13C5055d"],
                    ["9.2 beta 2", "13C5060d"],
                    ["9.2 beta 3", "13C71"],
                    ["9.2 beta 4", "13C75"],
                    ["9.2", "13C75"],
                    ["9.2.1 beta", "13D11"],
                    ["9.2.1 beta 2", "13D14"],
                    ["9.2.1", "13D15"],
                    ["9.3 beta", "13E5181d"],
                    ["9.3 beta 1.1", "13E5181f"],
                    ["9.3 beta 2", "13E5191d"],
                    ["9.3 beta 3", "13E5200d"],
                    ["9.3 beta 3", "13E5200d"],
                    ["9.3 beta 4", "13E5214d"],
                    ["9.3 beta 5", "13E5225a"],
                    ["9.3 beta 6", "13E5231a"],
                    ["9.3 beta 7", "13E5233a"],
                    ["9.3", "13E233 & 13E236"],
                    ["9.3.1", "13E238"],
                    ["9.3.2 beta", "13F51a"],
                    ["9.3.2 beta 2", "13F61"],
                    ["9.3.2 beta 3", "13F65"],
                    ["9.3.2 beta 4", "13F68"],
                    ["9.3.2", "13F69"],
                    ["9.3.3 beta", "13G12"],
                    ["9.3.3 beta 2", "13G21"],
                    ["9.3.3 beta 3", "13G29"],
                    ["9.3.3 beta 4", "13G33"],
                    ["9.3.3 beta 5", "13G34"],
                    ["9.3.3", "13G34"],
                    ["9.3.4", "13G35"],
                    ["9.3.5", "13G36"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
