/* =============================================================================
 * File:   kbag.tsx
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
        <Layout.Root navGroup="fw" pageTitle={<>IMG3 Tag: <code>KBAG</code></>} canonical="/fw/format/img3/kbag">
            <Layout.Title title="IMG3 Tag: KBAG" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/fw/format/img3">IMG3</Breadcrumb.Item>
                <Breadcrumb.Item><code>KBAG</code> Tag</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format" />
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                </Toc.Root>
                <p>
                    The <code>KBAG</code> (Key Bag) <A href="/fw/format/img3">IMG3</A> tag is an array of bytes, usually encrypted with the <A href="https://www.theiphonewiki.com/wiki/GID_Key">GID key</A>.
                    It consists of some information about the IV/key pair used to encrypt the payload, and the IV/key pair itself.
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>
                <pre>{`Img3KbagTag {
   0  uint32     magic      // 'GABK' ('KBAG' in little endian)
   4  uint32     paddedSize // including header
   8  uint32     size
   C  uint32     cryptType  // 1: IV/Key are encrypted with the GID key
                            // 2: IV/Key are encrypted with the `}<i>development</i>{` GID key
  10  uint32     aesSize    // the number of bits in the key:
                            //  0x80: AES-128 (16 bytes)
                            //  0xC0: AES-192 (24 bytes)
                            // 0x100: AES-256 (32 bytes)
  14  uint8[16]  iv
  24  uint8[]    key        // \`aesSize / 8\` bytes
????  uint8[]    padding    // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/fw/file/apple-logo">AppleLogo</A> payload from the <A href="/key/5A347/iPhone1,1">2.0 (build 5A347) build for the iPhone (<code>iPhone1,1</code>)</A>.
                </p>
                <HexView initialOffset={0x1C8C} size={0x44} chunks={[
                    ["h0 47 41 42 4B"],
                    [
                        "44 00 00 00",
                        "38 00 00 00",
                        "h1 01 00 00 00",
                        "h2 80 00 00 00",
                    ],
                    ["h3 CA 5C 08 00 96 7C 23 64 8C 1F 24 FE 6A BD 34 19"],
                    ["h4 35 30 CF F9 80 84 9C 41 7F 49 F0 14 D1 2B F2 73"],
                    ["00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"],
                ]} />
                <HexViewDetailTable entries={[
                    [0x1C8C, 4, <><code>magic</code>: When interpreted in little endian order, these bytes give the string, <code>KBAG</code>.</>, 0],
                    [0x1C90, 4, <><code>paddedSize</code>: This tag is 0x44 (68) bytes long.</>],
                    [0x1C94, 4, <><code>size</code>: The actual payload is 0x38 (56) bytes long.</>],
                    [0x1C98, 4, <><code>cryptType</code>: This tag is encrypted with the GID key.</>, 1],
                    [0x1C9C, 4, <><code>aesSize</code>: The key is 0x80 (128) bits long.</>, 2],
                    [0x1CA0, 16, <><code>iv</code>: The encrypted IV.</>, 3],
                    [0x1CB0, 16, <><code>key</code>: The encrypted key.</>, 4],
                    [0x1CC0, 16, <><code>padding</code></>],
                ]} />
            </Layout.Content>
        </Layout.Root>
    );
}
