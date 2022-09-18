/* =============================================================================
 * File:   1g.tsx
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
        <Layout.Root navGroup="device" pageTitle="iPod touch" canonical="/device/ipod-touch/1g">
            <Layout.Title title="iPod touch" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/device">Device</Breadcrumb.Item>
                <Breadcrumb.Item>iPod touch</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingSpecs" text="Technical Specs" />
                    <Toc.Entry href="#headingHacking" text="Hacking" />
                    <Toc.Entry href="#headingExternalLinks" text="External Links" />
                </Toc.Root>
                <p>
                    The first generation iPod touch was Apple&apos;s first iPod to run the multi-touch graphical interface, <A href="/ios">iPhone OS</A> (later iOS).
                    It was released on the <DateTime value="2007-09-05" />, just over two months after the <A href="/device/iphone/2g">original iPhone.</A>
                </p>

                <Clear />

                <h2 id="headingUpdates">Software Updates</h2>
                <p>
                    When released, the iPod touch ran <A href="/ios/1/1">iPhone OS 1.1</A>, and was supported up through the end of <A href="/ios/3">iPhone OS 3</A>.
                    However, unlike the <A href="/device/iphone/2g">original iPhone</A> and the <A href="/device/iphone/3g">iPhone 3G</A>, major series upgrades were not free;
                    Upgrading to <A href="/ios/2">iPhone OS 2</A> or <A href="/ios/3">iPhone OS 3</A> cost <A href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/touchLegacyLandingPage">$9.95 (later $4.95).</A>
                    This charge was not imposed on any other device, including the <A href="/device/ipod-touch/2g">second generation iPod touch</A>, despite that coming with iPhone OS 2.
                </p>

                <h2 id="headingSpecs">Technical Specs</h2>
                <dl>
                    <dt>Battery</dt>
                    <dd><NoWrap>580 mA @ 3.7 V</NoWrap> (<NoWrap>2.15 Wh</NoWrap>)</dd>

                    <dt>Colors</dt>
                    <dd>Aluminum (gray)</dd>

                    <dt>CPU</dt>
                    <dd><b>Core</b>: 1&times;<AShort to="wp" title="ARM11">ARM1176JZ(F)-S</AShort></dd>
                    <dd><b>CPU</b>: <A href="/processor/s5l8900">S5L8900</A></dd>
                    <dd><b>Speed</b>: <NoWrap>620 MHz</NoWrap> (downclocked to 400 until <A href="/ios/1/1">iPhone OS 1.1.2</A>; 412 after)</dd>
                    <dd><b>Instruction Set</b>: ARMv6</dd>

                    <dt>Dimensions</dt>
                    <dd>110&times;58&times;7.1 mm (4.3&times;2.3&times;0.28 in)</dd>

                    <dt>Display</dt>
                    <dd><b>Brightness</b>: <NoWrap>500 cd/m<sup>2</sup></NoWrap> maximum</dd>
                    <dd><b>Contrast Ratio</b>: 800:1 typical</dd>
                    <dd><b>Resolution</b>: <NoWrap>3.5 in (89 mm) diagonal (3:2 aspect ratio); 320&times;480 at 165 ppi</NoWrap></dd>
                    <dd><b>Screen</b>: LED backlit TN TFT LCD</dd>

                    <dt>Firmware</dt>
                    <dd><b>Initial</b>: <AKeyPage device="iPod1,1" version="1.1" build="3A100a" /></dd>
                    <dd><b>Last</b>: <AKeyPage device="iPod1,1" version="3.1.3" build="7E18" /></dd>

                    <dt>Internal Name</dt>
                    <dd><code>iPod1,1</code></dd>

                    <dt>RAM</dt>
                    <dd><NoWrap>128 MiB DRAM</NoWrap></dd>

                    <dt>Storage</dt>
                    <dd><NoWrap>8 GB</NoWrap>, <NoWrap>16 GB</NoWrap>, or <NoWrap>32 GB</NoWrap></dd>

                    <dt>Weight</dt>
                    <dd><NoWrap>115 g</NoWrap> (<NoWrap>4.1 oz</NoWrap>)</dd>

                    <dt>Wi-Fi</dt>
                    <dd><WiFi standards={["b", "g"]} /></dd>
                </dl>

                <h2 id="headingHacking">Hacking</h2>
                <p>
                    Because the iPod touch uses the same <A href="/processor/s5l8900">S5L8900 processor</A> as the original iPhone, it is vulnerable to the same exploits as it.
                    These include <A href="/jailbreak/exploit/pwnage">Pwnage</A>, and <A href="/jailbreak/explot/pwnage2">Pwnage 2.0</A>.
                </p>

                <h2 id="headingExternalLinks">External Links</h2>
                <ul>
                    <li><A href="https://www.ifixit.com/Teardown/iPod+Touch+1st+Generation+Teardown/596">iFixIt Teardown</A></li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
