/* =============================================================================
 * File:   2g.tsx
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
import AKeyPage from "@components/AKeyPage";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import DateTime from "@components/DateTime";
import Layout from "@components/Layout";
import Resolution from "@components/Resolution";
import Toc from "@components/Toc";
import Unit from "@components/Unit";
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
                    <Toc.Entry href="#headingHistory" text="History" />
                    <Toc.Entry href="#headingExternalLinks" text="External Links" />
                </Toc.Root>
                <p>
                    The iPhone (sometimes known as the &quot;iPhone 2G&quot;) was Apple&apos;s first smartphone.
                    It was announced on <DateTime value="2007-01-09" /> and was released on the <DateTime value="2007-09-29" />.
                </p>

                <Clear />

                <h2 id="headingName">Name</h2>
                <p>
                    When announced and released, the iPhone 2G was simply called <i>iPhone</i>.
                    However, with the release of the <A href="/device/iphone/3g">iPhone 3G</A> in <DateTime value="2008" />, the original iPhone became known as the &quot;iPhone <em>2G</em>&quot;.
                    The reasoning is believed to be two-fold: it is the iPhone preceding the "3G" (and 2 is one before 3), and it only supported <A href="https://en.wikipedia.org/wiki/GSM">GSM</A> and <A href="https://en.wikipedia.org/wiki/Enhanced_Data_Rates_for_GSM_Evolution">EDGE</A> networks (commonly called &quot;2G&quot; networks).
                </p>

                <h2 id="headingSpecs">Technical Specs</h2>
                <dl>
                    <dt>Battery</dt>
                    <dd><Unit value={1400} unit="mA" /> @ <Unit value={3.7} unit="V" /> (<Unit value={5.18} unit="Wh" />)</dd>

                    <dt>Bluetooth</dt>
                    <dd>2.0 + EDR</dd>

                    <dt>Camera</dt>
                    <dd><b>Rear</b>: <Unit value={1.9} unit="MP" /></dd>

                    <dt>Cellular Radio</dt>
                    <dd><b>Processor</b>: <A href="/baseband/pmb8876">PMB8876</A> (&quot;S-Gold 2&quot;)</dd>
                    <dd>
                        <b>Supported Networks</b>:
                        {" "}<A href="https://en.wikipedia.org/wiki/Enhanced_Data_Rates_for_GSM_Evolution">EDGE</A>,
                        {" "}<A href="https://en.wikipedia.org/wiki/GSM">Quad-band GSM</A> (800, 900, 1800, and 1900 MHz)
                    </dd>

                    <dt>Colors</dt>
                    <dd>Aluminum (gray)</dd>

                    <dt>CPU</dt>
                    <dd><b>Core</b>: 1&times;<A href="https://en.wikipedia.org/wiki/ARM11">ARM1176JZ(F)-S</A></dd>
                    <dd><b>CPU</b>: <A href="/processor/s5l8900">S5L8900</A></dd>
                    <dd><b>Speed</b>: <Unit value={620} unit="MHz" /> (downclocked to 400 until <A href="/ios/1/1">iPhone OS 1.1.2</A>, and 412 after)</dd>
                    <dd><b>Instruction Set</b>: ARMv6</dd>

                    <dt>Dimensions</dt>
                    <dd>115&times;61&times;11.6 mm (4.5&times;2.4&times;0.46 in)</dd>

                    <dt>Display</dt>
                    <dd><Resolution diagonal={3.5} width={320} height={480} /></dd>

                    <dt>Firmware</dt>
                    <dd>Initial: <AKeyPage device="iPhone1,1" version="1.0" build="1A543a" /></dd>
                    <dd>Last: <AKeyPage device="iPhone1,1" version="3.1.3" build="7E18" /></dd>

                    <dt>Internal Name</dt>
                    <dd><code>iPhone1,1</code></dd>

                    <dt>RAM</dt>
                    <dd><Unit value={128} unit="MiB" /></dd>

                    <dt>Storage</dt>
                    <dd><Unit value={4} unit="GB" />, <Unit value={8} unit="GB" />, or <Unit value={16} unit="GB" /></dd>

                    <dt>Weight</dt>
                    <dd><Unit value={135} unit="g" /> (<Unit value={4.8} unit="oz" />)</dd>

                    <dt>Wi-Fi</dt>
                    <dd><WiFi standards={["b", "g"]} /></dd>
                </dl>

                <h2 id="headingHacking">Hacking</h2>
                <p>
                    Naturally, as a first generation device, the original iPhone is one of the more "hack-friendly" <A href="/device">iDevices</A>.
                    Within two months of its release, <A href="https://www.theiphonewiki.com/wiki/User:Geohot">geohot</A> (George Hotz) "unlocked" the AT&amp;T only phone to <A href="https://www.youtube.com/watch?v=tvJ1RGlxe8Q">work on T-Mobile</A>.
                    A few months later, the <A href="https://www.theiphonewiki.com/wiki/IPhone_Dev_Team">iPhone Dev Team</A> discovered "<A href="/jailbreak/exploit/pwnage">Pwnage</A>," a bootrom level <A href="/jailbreak#headingTethered"><em>untethered</em></A> exploit that allowed jailbreaking the device on <em>any</em> version of <A href="/ios">iPhone OS</A>.
                </p>

                <h2 id="headingExternalLinks">External Links</h2>
                <ul>
                    <li><A href="https://www.ifixit.com/Teardown/iPhone+1st+Generation+Teardown/599">iFixIt Teardown</A></li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
