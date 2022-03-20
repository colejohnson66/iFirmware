/* =============================================================================
 * File:   s5l8720.tsx
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
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import NoWrap from "@components/NoWrap";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="processor" pageTitle="S5L8720" canonical="/processor/s5l8720">
            <Layout.Title title="S5L8720" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/processor">Processors</Breadcrumb.Item>
                <Breadcrumb.Item>S5L8720</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingExploits" text="Exploits" />
                    <Toc.Entry href="#headingBootroms" text="Bootroms" />
                </Toc.Root>
                <p>
                    The S5L8720 is the processor used in the <A href="/device/ipod/2g">iPod touch (2nd generation)</A>.
                    It runs at <NoWrap>533 MHz</NoWrap>.
                </p>

                <Clear />

                <h2 id="headingExploits">Exploits</h2>
                <p>
                    The S5L8720 is one of the few <A href="/devices">iDevice</A> processors to have an <em>untethered bootrom</em> exploit;
                    The advantage of a bootrom level exploit is the ability to jailbreak <em>any</em> device utilizing the processor, regardless of the version of iPhone OS/iOS installed.
                    By having an <em>un</em>tethered bootrom level exploit, a computer is not needed to assist in booting the device.
                </p>
                <p>
                    There are two known exploits for the S5L8720: <A href="/jailbreak/exploit/24kpwn">24kPwn (0x24000 Segment Overflow)</A> (untethered; old bootrom only) and <A href="/jailbreak/exploit/steaks4uce"><code>usb_control_msg(0xA1, 1)</code></A> (tethered; both bootroms).
                </p>

                <h2 id="headingBootroms">Bootroms</h2>
                <p>
                    The S5L8720 is one of two processors to have two different bootroms;
                    The other being the <A href="/processor/s5l8920">S5L8920</A>.
                    Roughly seven months after the release of the 24kPwn (0x24000 Segment Overflow), Apple released updated <A href="/device/ipod/2g">iPod touch (2nd generation)</A> devices containing a newer bootrom that was no longer vulnerable;
                    This closed the hole that allowed an untethered bootrom level exploit.
                </p>
                <p>
                    Later, a new exploit, <code>usb_control_msg(0xA1, 1)</code> (sometimes referred to as &quot;steaks4uce&quot;) was discovered.
                    This exploit, when combined with a kernel exploit, allows a <em>tethered</em> jailbreak on newer bootroms.
                </p>
            </Layout.Content>
        </Layout.Root>
    );
}
