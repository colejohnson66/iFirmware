/* =============================================================================
 * File:   index.tsx
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
import Toc from "@components/Toc";

function List(args: [string, string, string?][]): React.ReactElement {
    return (
        <ul>
            {args.map(([url, name, paren]) => (
                <li key={url}>
                    <A href={`/key${url}`}>{name}</A>{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="key" pageTitle="Firmware Keys" canonical="/key">
            <Layout.Title title="Firmware Keys" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Firmware Keys</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingHistory" text="History">
                        <Toc.Entry href="#headingHistoryRootFS" text="Root Filesystem" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingVersions" text="Versions">
                        <Toc.Entry href="#headingVersionsWatch" text="watchOS" />
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    &quot;Firmware keys&quot; are the keys which decrypt the bootloaders, ramdisks, root filesystem, and more of an iPhone OS, iOS, iPadOS, watchOS, or tvOS firmware.
                </p>

                <Clear />

                <h2 id="headingHistory">History</h2>
                <p>
                    With the release of the iPhone came the <A href="/fw/format/img2">IMG2</A> format and its container, the <A href="/fw/format/8900">8900</A> file.
                    They were used on all <A href="/ios/1">iPhone OS 1.x</A> firmwares.
                    Initially, only the <A href="/fw/file/kernelcache">kernelcache</A>, <A href="/fw/file/iboot">iBoot</A>, and <A href="/fw/wtf">WTF</A> were encrypted, but beginning with <A href="/ios/1/1">iPhone OS 1.1</A>, all files were encrypted.
                    However, the biggest flaw of these formats was the use of a <A href="/processor/s5l8900#headingKeys">global key</A> that would decrypt them all.
                </p>
                <p>
                    Following IMG2 came the <A href="/fw/format/img3">IMG3</A> file format.
                    They were introduced with <A href="/ios/2/0">iPhone OS 2.0 beta 4</A>, and were used on all 32-bit devices.
                    IMG3 improved over the 8900/IMG2 combo by being encrypted in a way that does not rely on a &quot;global key,&quot; but instead requiring the use of the model&apos;s unique key stored inside the processor.
                </p>
                <p>
                    With the introduction of 64-bit processors, beginning with the <A href="/device/iphone/5s">iPhone 5s</A> (running on the <A href="/processor/s5l8960">S5L8960</A>), Apple changed the format once again.
                    This time, they introduced the <A href="/fw/format/img4">IMG4</A> file format.
                    Contrary to the 8900, IMG2, and IMG3 file formats where a custom binary format was used, IMG4 files are nothing more than <A href="https://en.wikipedia.org/wiki/X.690#DER_encoding">DER</A> encoded <A href="https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One">ASN.1</A> files.
                </p>

                <h3 id="headingHistoryRoot">Root Filesystem</h3>
                <p>
                    Unlike practically every other firmware file in an <A href="/fw/format/ipsw">IPSW</A>, the <A href="/fw/rootFS">root filesystem</A> is different;
                    It has never used the 8900, IMG2, IMG3, or IMG4 file formats.
                    Instead, encrypted root filesystems are actually <A href="https://en.wikipedia.org/wiki/FileVault">FileVault</A> volumes;
                    Unencrypted filesystems are <A href="https://en.wikipedia.org/wiki/Apple_Disk_Image">Apple Disk Image</A> (DMG) files.
                </p>

                <h2 id="headingVersions">Versions</h2>
                <p>
                    This is a full and comprehensive list of all firmwares that Apple has made available to the public in some way, be it the Developer Center, iTunes, <A href="/ota">OTA updates</A>, etc.
                    This list also includes firmwares for which there was (as can be told) never an <A href="/fw/format/ipsw">IPSW</A>, such as <A href="/ios/4/2">iOS 4.2.5</A> for the <A href="/device/iphone/4">CDMA iPhone 4</A> (<code>iPhone3,3</code>).
                    These builds came preinstalled on the device, but were (as can be told) never available for download, and as such, will not have any keys available.
                </p>
                <p>
                    Note that this does <em>not</em> include firmwares discovered on <A href="/device/prototype">prototype devices</A>.
                    Those were not released to the public.
                </p>
                {List([
                    ["/ios/1", "iPhone OS 1.x"],
                    ["/ios/2", "iPhone OS 2.x"],
                    ["/ios/3", "iPhone OS 3.x"],
                    ["/ios/4", "iOS 4.x"],
                    ["/ios/5", "iOS 5.x"],
                    ["/ios/6", "iOS 6.x"],
                    ["/ios/7", "iOS 7.x"],
                    ["/ios/8", "iOS 8.x"],
                    ["/ios/9", "iOS 9.x"],
                    ["/ios/10", "iOS 10.x"],
                    ["/ios/11", "iOS 11.x"],
                    ["/ios/12", "iOS 12.x"],
                    ["/ios/13", "iOS 13.x"],
                    ["/ios/14", "iOS 14.x"],
                    ["/ios/15", "iOS 15.x"],
                    ["/ios/16", "iOS 16.x"],
                ])}

                <h3 id="headingVersionsWatch">watchOS</h3>
                <p>
                    As watchOS uses a different versioning method, its firmware builds are listed separately.
                </p>
                {List([
                    ["/watch/1", "watchOS 1.x"],
                    ["/watch/2", "watchOS 2.x"],
                    ["/watch/3", "watchOS 3.x"],
                    ["/watch/4", "watchOS 4.x"],
                    ["/watch/5", "watchOS 5.x"],
                    ["/watch/6", "watchOS 6.x"],
                    ["/watch/7", "watchOS 7.x"],
                    ["/watch/8", "watchOS 8.x"],
                    ["/watch/9", "watchOS 9.x"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
