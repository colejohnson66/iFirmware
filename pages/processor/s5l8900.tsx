/* =============================================================================
 * File:   s5l8900.tsx
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
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import NoWrap from "@components/NoWrap";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="processor" pageTitle="S5L8900" canonical="/processor/s5l8900">
            <Layout.Title title="S5L8900" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/processor">Processors</Breadcrumb.Item>
                <Breadcrumb.Item>S5L8900</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingExploits" text="Exploits" />
                    <Toc.Entry href="#headingKeys" text="Key 0x837" />
                </Toc.Root>
                <p>
                    The S5L8900 is a 32-bit ARM processor used in the <A href="/device/iphone/2g">original iPhone</A>, <A href="/device/iphone/3g">iPhone 3G</A>, and <A href="/device/ipod/1g">first generation iPod touch</A>.
                    It is an <A href="https://developer.arm.com/documentation/ddi0301/h/">ARM1176JZ(F)-S</A> capable of running at <NoWrap>620 MHz</NoWrap>, but downclocked to <NoWrap>412 MHz</NoWrap> (<NoWrap>400 MHz</NoWrap> until <A href="/ios/1/1">iPhone OS 1.1.2</A>).
                </p>

                <Clear />

                <h2 id="headingExploits">Exploits</h2>
                <p>
                    The S5L8900 is one of the few <A href="/devices">iDevice</A> processors to have an <em>untethered bootrom</em> exploit;
                    The advantage of a bootrom level exploit is the ability to jailbreak <em>any</em> device utilizing the processor, regardless of the version of iPhone OS/iOS installed.
                    By having an <em>un</em>tethered bootrom level exploit, a computer is not needed to assist in booting the device.
                </p>
                <p>
                    There are two known exploits for the S5L8900: <A href="/jailbreak/exploit/pwnage">Pwnage</A> and <A href="/jailbreak/exploit/pwnage2">Pwnage 2.0</A>.
                </p>

                <h2 id="#headerKeys">Key 0x837</h2>
                <p>
                    &quot;Key 0x837&quot; is generated by encrypting the byte string <code>345A2D6C5050D058780DA431F0710E15</code> with the GID key, resulting in <code>188458A6D15034DFE386F23B61D43774</code>.
                    This key is used as the encryption key alongside a zero IV for <A href="/fw/format/8900">8900</A> files.
                    While this key exists in later versions of iPhone OS, the introduction of <A href="/fw/format/img3">IMG3</A> files and <A href="/fw/format/img3/kbag">KBAGs</A> in iPhone OS 2.0 beta 4 rendered this key useless.
                </p>
            </Layout.Content>
        </Layout.Root>
    );
}
