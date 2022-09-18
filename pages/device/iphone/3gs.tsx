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
                    <Toc.Entry href="#headingExternalLinks" text="External Links" />
                </Toc.Root>
                <p>
                    The iPhone 3GS was Apple&apos;s third smartphone.
                    Featuring a faster processor and better camera than the <A href="/device/iphone/2g">original</A> and <A href="/device/iphone/3g">3G</A> iPhones, it was released on the <DateTime value="2009-06-19" />.
                </p>

                <Clear />

                <h2 id="headingName">Name</h2>
                <p>
                    The iPhone 3GS, being a spec bump of the iPhone 3G, is named the same, but with an &quot;S&quot; to signify &quot;speed.&quot;
                </p>

                <h2 id="headingSpecs">Technical Specs</h2>
                <dl>
                    <dt>Battery</dt>
                    <dd><NoWrap>1220 mA @ 3.7 V</NoWrap> (<NoWrap>4.51 Wh</NoWrap>)</dd>

                    <dt>Bluetooth</dt>
                    <dd>2.1 + EDR</dd>

                    <dt>Camera</dt>
                    <dd><b>Rear</b>: <NoWrap>3.15 MP</NoWrap> (2048&times;1536) with autofocus; 640&times;480 (VGA) video</dd>

                    <dt>Cellular Radio</dt>
                    <dd><b>Processor</b>: <A href="/baseband/pmb8878">PMB8878</A> (&quot;X-Gold 608&quot;)</dd>
                    <dd><b>SIM Card</b>: micro SIM</dd>
                    <dd>
                        <b>Supported Networks</b>:
                        {" "}<AShort to="wp" title="Enhanced_Data_Rates_for_GSM_Evolution">EDGE</AShort>,
                        {" "}<AShort to="wp" title="GSM">Quad-band GSM</AShort> (850, 900, 1800, and 1900 MHz),
                        {" "}<AShort to="wp" title="UMTS">Tri-band UMTS</AShort> (850, 1900, 2100 MHz) with <AShort to="wp" title="High-Speed_Downlink_Packet_Access">HSDPA</AShort> support
                    </dd>

                    <dt>Colors</dt>
                    <dd>Black or White</dd>

                    <dt>CPU</dt>
                    <dd><b>Core</b>: 1&times;<AShort to="wp" title="ARM Cortex-A8">ARM Cortex-A8</AShort></dd>
                    <dd><b>CPU</b>: <A href="/processor/s5l8920">S5L8920</A></dd>
                    <dd><b>Speed</b>: <NoWrap>600 MHz</NoWrap></dd>
                    <dd><b>Instruction Set</b>: ARMv7</dd>

                    <dt>Dimensions</dt>
                    <dd>115.5&times;62.1&times;12.3 mm (4.5&times;2.4&times;0.48 in)</dd>

                    <dt>Display</dt>
                    <dd><b>Bit Depth</b>: <NoWrap>24 bit</NoWrap> (16.76 million colors)</dd>
                    {/* <dd><b>Brightness</b>: <NoWrap>? cd/m<sup>2</sup></NoWrap> maximum</dd> */}
                    {/* <dd><b>Contrast Ratio</b>: ?:1 typical</dd> */}
                    <dd><b>Resolution</b>: <NoWrap>3.5 in (89 mm) diagonal (3:2 aspect ratio); 320&times;480 at 163 ppi</NoWrap></dd>
                    <dd><b>Technology</b>: LCD</dd>

                    <dt>Firmware</dt>
                    <dd><b>Initial</b>: <AKeyPage device="iPhone2,1" version="3.0" build="7A341" /></dd>
                    <dd><b>Last</b>: <AKeyPage device="iPhone2,1" version="6.1.6" build="10B500" /></dd>

                    <dt>Graphics</dt>
                    <dd><b>GPU</b>: PowerVR SGX535</dd>

                    <dt>Internal Name</dt>
                    <dd><code>iPhone2,1</code></dd>

                    <dt>RAM</dt>
                    <dd><NoWrap>256 MiB DRAM</NoWrap></dd>

                    {/* <dt>Regulatory</dt> */}
                    {/* <dd><b>FCC ID</b>: ?</dd> */}

                    <dt>SAR</dt>
                    <dd><b>Body</b>: 0.67 W/kg</dd>
                    <dd><b>Head</b>: 1.19 W/kg</dd>

                    {/* <dt>Sound</dt> */}
                    {/* <dd>?</dd> */}

                    <dt>Storage</dt>
                    <dd><NoWrap>8 GB</NoWrap>, <NoWrap>16 GB</NoWrap>, or <NoWrap>32 GB</NoWrap></dd>

                    <dt>Weight</dt>
                    <dd><NoWrap>135 g</NoWrap> (<NoWrap>4.8 oz</NoWrap>)</dd>

                    <dt>Wi-Fi</dt>
                    <dd><WiFi standards={["b", "g"]} /></dd>
                </dl>

                <h2 id="headingExternalLinks">External Links</h2>
                <ul>
                    <li><A href="https://www.ifixit.com/Teardown/iPhone+3GS+Teardown/817">iFixIt Teardown</A></li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
