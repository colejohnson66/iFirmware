/* =============================================================================
 * File:   vers.tsx
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
import HexView from "@components/HexView";
import HexViewDetailTable from "@components/HexViewDetailTable";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="file" pageTitle={<>IMG3 Tag: <code>VERS</code></>} canonical="/file/format/img3/vers">
            <Layout.Title title="IMG3 Tag: VERS" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/file">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/file/format/img3">IMG3</Breadcrumb.Item>
                <Breadcrumb.Item><code>VERS</code> Tag</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format" />
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                </Toc.Root>
                <p>
                    The <code>VERS</code> <A href="/file/format/img3">IMG3</A> tag is a string containing the target <A href="/file/file/iboot">iBoot</A> version of the image.
                    It is unknown if this tag&apos;s value is verified anywhere in the system.
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>
                <pre>{`String {
   0  uint32   length
   4  uint8[]  string
}
Img3VersTag {
   0  uint32   magic      // 'SREV' ('VERS' in little endian)
   4  uint32   paddedSize // including header
   8  uint32   size
   C  String   value      // \`size\` bytes
????  uint8[]  padding    // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/file/file/apple-logo">AppleLogo</A> payload from the <A href="/key/5A347/iPhone1,1">2.0 (build 5A347) build for the iPhone (<code>iPhone1,1</code>)</A>.
                </p>
                <HexView initialOffset={0x1C5C} chunks={[
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
                    [0x1C60, 4, <><code>paddedSize</code>: This tag is 0x20 (32) bytes long.</>],
                    [0x1C64, 4, <><code>size</code>: The actual payload is 0x14 (20) bytes long.</>],
                    [0x1C68, 4, <><code>value.length</code>: The string is 0x10 (16) bytes long.</>, 1],
                    [0x1C6C, 4, <><code>value.string</code>: The actual string: `<code>EmbeddedImages-9</code>`.</>, 2],
                ]} />
            </Layout.Content>
        </Layout.Root>
    );
}
