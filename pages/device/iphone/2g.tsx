/* =============================================================================
 * File:   2g.tsx
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
        <Layout.Root navGroup="device" pageTitle="iPhone" canonical="/device/iphone/2g">
            <Layout.Title title="iPhone" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/device">Device</Breadcrumb.Item>
                <Breadcrumb.Item>iPhone</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingName" text="Name" />
                    <Toc.Entry href="#headingSpecs" text="Technical Specs" />
                    <Toc.Entry href="#headingHacking" text="Hacking" />
                    <Toc.Entry href="#headingExternalLinks" text="External Links" />
                </Toc.Root>
                <p>
                    The iPhone (sometimes known as the &quot;iPhone 2G&quot;) was Apple&apos;s first smartphone.
                    It was announced on <DateTime value="2007-01-09" /> and was released on the <DateTime value="2007-06-29" />.
                </p>

                <Clear />

                <h2 id="headingName">Name</h2>
                <p>
                    When announced and released, the iPhone 2G was simply called <i>iPhone</i>.
                    However, with the release of the <A href="/device/iphone/3g">iPhone 3G</A> in <DateTime value="2008" />, the original iPhone became known as the &quot;iPhone <em>2G</em>.&quot;
                    The reasoning is believed to be two-fold: it is the iPhone preceding the &quot;3G&quot; (and 2 is one before 3), and it only supported <AShort to="wp" title="GSM">GSM</AShort> and <AShort to="wp" title="Enhanced_Data_Rates_for_GSM_Evolution">EDGE</AShort> networks (commonly called &quot;2G&quot; networks).
                </p>

                <h2 id="headingSpecs">Technical Specs</h2>
                <dl>
                    <dt>Battery</dt>
                    <dd><NoWrap>1400 mA @ 3.7 V</NoWrap> (<NoWrap>5.18 Wh</NoWrap>)</dd>

                    <dt>Bluetooth</dt>
                    <dd>2.0 + EDR</dd>

                    <dt>Camera</dt>
                    <dd><b>Rear</b>: <NoWrap>1.9 MP</NoWrap> (1600&times;1200); no video support</dd>

                    <dt>Cellular Radio</dt>
                    <dd><b>Processor</b>: <A href="/baseband/pmb8876">PMB8876</A> (&quot;S-Gold 2&quot;)</dd>
                    <dd><b>SIM Card</b>: micro SIM</dd>
                    <dd>
                        <b>Supported Networks</b>:
                        {" "}<AShort to="wp" title="Enhanced_Data_Rates_for_GSM_Evolution">EDGE</AShort>,
                        {" "}<AShort to="wp" title="GSM">Quad-band GSM</AShort> (800, 900, 1800, and 1900 MHz)
                    </dd>

                    <dt>Colors</dt>
                    <dd>Aluminum (gray)</dd>

                    <dt>CPU</dt>
                    <dd><b>Core</b>: 1&times;<AShort to="wp" title="ARM11">ARM1176JZ(F)-S</AShort></dd>
                    <dd><b>CPU</b>: <A href="/processor/s5l8900">S5L8900</A></dd>
                    <dd><b>Speed</b>: <NoWrap>620 MHz</NoWrap> (downclocked to 400 until <A href="/ios/1/1">iPhone OS 1.1.2</A>; 412 after)</dd>
                    <dd><b>Instruction Set</b>: ARMv6</dd>

                    <dt>Dimensions</dt>
                    <dd>115&times;61&times;11.6 mm (4.5&times;2.4&times;0.46 in)</dd>

                    <dt>Display</dt>
                    <dd><b>Bit Depth</b>: <NoWrap>18 bit</NoWrap> (262,144 colors)</dd>
                    <dd><b>Brightness</b>: <NoWrap>500 cd/m<sup>2</sup></NoWrap> maximum</dd>
                    <dd><b>Contrast Ratio</b>: 800:1 typical</dd>
                    <dd><b>Resolution</b>: <NoWrap>3.5 in (89 mm) diagonal (3:2 aspect ratio); 320&times;480 at 163 ppi</NoWrap></dd>
                    <dd><b>Technology</b>: LED backlit TN TFT LCD</dd>

                    <dt>Firmware</dt>
                    <dd><b>Initial</b>: <AKeyPage device="iPhone1,1" version="1.0" build="1A543a" /></dd>
                    <dd><b>Last</b>: <AKeyPage device="iPhone1,1" version="3.1.3" build="7E18" /></dd>

                    <dt>Graphics</dt>
                    <dd><b>GPU</b>: PowerVR MBX Lite 3D</dd>

                    <dt>Internal Name</dt>
                    <dd><code>iPhone1,1</code></dd>

                    <dt>RAM</dt>
                    <dd><NoWrap>128 MiB DRAM</NoWrap></dd>

                    {/* <dt>Regulatory</dt> */}
                    {/* <dd><b>FCC ID</b>: ?</dd> */}

                    {/* <dt>SAR</dt> */}
                    {/* <dd><b>Body</b>: ? W/kg</dd> */}
                    {/* <dd><b>Head</b>: ? W/kg</dd> */}

                    {/* <dt>Sound</dt> */}
                    {/* <dd>?</dd> */}

                    <dt>Storage</dt>
                    <dd><NoWrap>4 GB</NoWrap>, <NoWrap>8 GB</NoWrap>, or <NoWrap>16 GB</NoWrap></dd>

                    <dt>Weight</dt>
                    <dd><NoWrap>135 g</NoWrap> (<NoWrap>4.8 oz</NoWrap>)</dd>

                    <dt>Wi-Fi</dt>
                    <dd><WiFi standards={["b", "g"]} /></dd>
                </dl>

                <h2 id="headingHacking">Hacking</h2>
                <p>
                    Naturally, as a first generation device, the original iPhone is one of the more &quot;hack-friendly&quot; <A href="/device">iDevices</A>.
                    Within two months of its release, <A href="https://www.theiphonewiki.com/wiki/User:Geohot">geohot</A> (George Hotz) &quot;unlocked&quot; the AT&amp;T only phone to <A href="https://www.youtube.com/watch?v=tvJ1RGlxe8Q">work on T-Mobile</A>.
                    A few months later, the <A href="https://www.theiphonewiki.com/wiki/IPhone_Dev_Team">iPhone Dev Team</A> discovered &quot;<A href="/jailbreak/exploit/pwnage">Pwnage</A>,&quot; a bootrom level <A href="/jailbreak#headingTethered"><em>untethered</em></A> exploit that allowed jailbreaking the device on <em>any</em> version of <A href="/ios">iPhone OS</A>.
                </p>

                <h2 id="headingExternalLinks">External Links</h2>
                <ul>
                    <li><A href="https://www.ifixit.com/Teardown/iPhone+1st+Generation+Teardown/599">iFixIt Teardown</A></li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
