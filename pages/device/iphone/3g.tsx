/* =============================================================================
 * File:   3g.tsx
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
import AKeyPage from "@components/AKeyPage";
import AShort from "@components/AShort";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import DateTime from "@components/DateTime";
import Layout from "@components/Layout";
import NoWrap from "@components/NoWrap";
import Resolution from "@components/Resolution";
import Toc from "@components/Toc";
import WiFi from "@components/WiFi";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="device" pageTitle="iPhone" canonical="/device/iphone/3g">
            <Layout.Title title="iPhone 3G" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/device">Device</Breadcrumb.Item>
                <Breadcrumb.Item>iPhone 3G</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingName" text="Name" />
                    <Toc.Entry href="#headingSpecs" text="Technical Specs" />
                    <Toc.Entry href="#headingHacking" text="Hacking" />
                    <Toc.Entry href="#headingExternalLinks" text="External Links" />
                </Toc.Root>
                <p>
                    The iPhone 3G was Apple&apos;s second smartphone.
                    Featuring support for 3G networks and GPS, it was released on the <DateTime value="2008-06-11" />.
                </p>

                <Clear />

                <h2 id="headingName">Name</h2>
                <p>
                    The iPhone 3G, despite being the second iPhone, is so named due to its ability to use <AShort title="3G" to="wp">3G networks</AShort> (specifically <AShort to="wp" title="High-Speed_Downlink_Packet_Access">HSDPA</AShort>).
                    This is in contrast to the <A href="/device/iphone/2g">original iPhone</A> which only supported <AShort title="GSM" to="wp">GSM</AShort> and <AShort title="Enhanced_Data_Rates_for_GSM_Evolution" to="wp">EDGE</AShort> networks.
                </p>

                <h2 id="headingSpecs">Technical Specs</h2>
                <dl>
                    <dt>Battery</dt>
                    <dd><NoWrap>1150 mA @ 3.7 V</NoWrap> (<NoWrap>4.25 Wh</NoWrap>)</dd>

                    <dt>Bluetooth</dt>
                    <dd>2.0 + EDR (chipset supports 2.1, but is unused)</dd>

                    <dt>Camera</dt>
                    <dd><b>Rear</b>: <NoWrap>1.9 MP</NoWrap> (1600&times;1200); no video support</dd>

                    <dt>Cellular Radio</dt>
                    <dd><b>Processor</b>: <A href="/baseband/pmb8878">PMB8878</A> (&quot;X-Gold 608&quot;)</dd>
                    <dd><b>SIM Card</b>: micro SIM</dd>
                    <dd>
                        <b>Supported Networks</b>:
                        {" "}<AShort to="wp" title="Enhanced_Data_Rates_for_GSM_Evolution">EDGE</AShort>,
                        {" "}<AShort to="wp" title="GSM">Quad-band GSM</AShort> (800, 900, 1800, and 1900 MHz),
                        {" "}<AShort to="wp" title="UMTS">Tri-band UMTS</AShort> (850, 1900, 2100 MHz) with <AShort to="wp" title="High-Speed_Downlink_Packet_Access">HSDPA</AShort> support
                    </dd>

                    <dt>Colors</dt>
                    <dd>Black or White</dd>

                    <dt>CPU</dt>
                    <dd><b>Core</b>: 1&times;<AShort to="wp" title="ARM11">ARM1176JZ(F)-S</AShort></dd>
                    <dd><b>CPU</b>: <A href="/processor/s5l8900">S5L8900</A></dd>
                    <dd><b>Speed</b>: <NoWrap>620 MHz</NoWrap> (downclocked to 412)</dd>
                    <dd><b>Instruction Set</b>: ARMv6</dd>

                    <dt>Dimensions</dt>
                    <dd>115.5&times;62.1&times;12.3 mm (4.5&times;2.4&times;0.48 in)</dd>

                    <dt>Display</dt>
                    <dd><Resolution diagonal={3.5} width={320} height={480} /></dd>

                    <dt>Firmware</dt>
                    <dd><b>Initial</b>: <AKeyPage device="iPhone1,2" version="2.0" build="5A345" /></dd>
                    <dd><b>Last</b>: <AKeyPage device="iPhone1,2" version="4.2.1" build="8C148" /></dd>

                    <dt>Internal Name</dt>
                    <dd><code>iPhone1,2</code></dd>

                    <dt>RAM</dt>
                    <dd><NoWrap>128 MiB</NoWrap></dd>

                    <dt>Storage</dt>
                    <dd><NoWrap>8 GB</NoWrap> (black only) or <NoWrap>16 GB</NoWrap> (both black and white)</dd>

                    <dt>Weight</dt>
                    <dd><NoWrap>133 g</NoWrap> (<NoWrap>4.7 oz</NoWrap>)</dd>

                    <dt>Wi-Fi</dt>
                    <dd><WiFi standards={["b", "g"]} /></dd>
                </dl>

                <h2 id="headingHacking">Hacking</h2>
                <p>
                    Because the iPhone 3G uses the same <A href="/processor/s5l8900">S5L8900 processor</A> as the original iPhone, it is vulnerable to the same exploits as it.
                    These include <A href="/jailbreak/exploit/pwnage">Pwnage</A>, and <A href="/jailbreak/explot/pwnage2">Pwnage 2.0</A>.
                </p>

                <h2 id="headingExternalLinks">External Links</h2>
                <ul>
                    <li><A href="https://www.ifixit.com/Teardown/iPhone+3G+Teardown/600">iFixIt Teardown</A></li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
