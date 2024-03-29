/* =============================================================================
 * File:   vers.tsx
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
import HexView from "@components/HexView";
import HexViewDetailTable from "@components/HexViewDetailTable";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle={<>Tag: <code>VERS</code></>} canonical="/fw/format/tags/vers">
            <Layout.Title title="Tag: VERS" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/fw/format/tags">Tags</Breadcrumb.Item>
                <Breadcrumb.Item><code>VERS</code></Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format">
                        <Toc.Entry href="#headingTagFormatImg3" text="IMG3" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                </Toc.Root>
                <p>
                    The <code>VERS</code> tag is a string containing the target <A href="/fw/file/iboot">iBoot</A> version of the image.
                    It is unknown if this tag&apos;s value is verified anywhere in the system.
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>

                <h3 id="headingTagFormatImg3">IMG3</h3>
                <pre>{`String {
   0  u32   length
   4  u8[]  string      // \`length\` bytes long; no terminator
}
Img3VersTag {
   0  u32     magic     // 'SREV' ('VERS' in little endian)
   4  u32     fullSize  // including header and padding
   8  u32     size      // including padding
   C  String  value
????  u8[]    padding   // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/fw/file/apple-logo">AppleLogo</A> payload from the <A href="/key/iPhone1,1/5A347">2.0 (build 5A347) build for the iPhone (<code>iPhone1,1</code>)</A>.
                </p>
                <HexView initialOffset={0x1C5C} size={0x20} chunks={[
                    ["h0 53 52 45 56"],
                    [
                        "20 00 00 00",
                        "14 00 00 00",
                        "h1 10 00 00 00",
                        "h2 45 6D 62 65",
                    ],
                    ["h2 64 64 65 64 49 6D 61 67 65 73 2D 39"],
                ]} />
                <HexViewDetailTable entries={[
                    [0x1C5C, 4, <><code>magic</code>: When interpreted in little endian order, these bytes give the string, <code>VERS</code>.</>, 0],
                    [0x1C60, 4, <><code>fullSize</code>: This tag is 0x20 (32) bytes long.</>],
                    [0x1C64, 4, <><code>size</code>: The actual payload (including padding) is 0x14 (20) bytes long.</>],
                    [0x1C68, 4, <><code>value.length</code>: The string is 0x10 (16) bytes long.</>, 1],
                    [0x1C6C, 4, <><code>value.string</code>: The actual string: `<code>EmbeddedImages-9</code>`.</>, 2],
                ]} />
            </Layout.Content>
        </Layout.Root>
    );
}
