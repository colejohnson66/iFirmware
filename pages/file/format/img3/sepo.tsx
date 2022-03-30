/* =============================================================================
 * File:   sepo.tsx
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
        <Layout.Root navGroup="file" pageTitle={<>IMG3 Tag: <code>SEPO</code></>} canonical="/file/format/img3/sepo">
            <Layout.Title title="IMG3 Tag: SEPO" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/file">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/file/format/img3">IMG3</Breadcrumb.Item>
                <Breadcrumb.Item><code>SEPO</code> Tag</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format" />
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                </Toc.Root>
                <p>
                    The <code>SEPO</code> (Security Epoch) <A href="/file/format/img3">IMG3</A> tag specifies the security epoch required for the device to load the provided image.
                    It is believed to be used to allow Apple to prevent devices from loading previously vulnerable firmwares.
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>
                <pre>{`Img3SepoTag {
   0  uint32   magic      // 'OPES' ('SEPO' in little endian)
   4  uint32   paddedSize // including header
   8  uint32   size
   C  uint32   value
  10  uint8[]  padding    // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/file/file/apple-logo">AppleLogo</A> payload from the <A href="/key/5A347/iPhone1,1">2.0 (build 5A347) build for the iPhone (<code>iPhone1,1</code>)</A>.
                </p>
                <HexView initialOffset={0x1C7C} size={0x10} chunks={[
                    ["h0 45 50 45 53"],
                    [
                        "10 00 00 00",
                        "04 00 00 00",
                        "h1 04 00 00 00",
                    ],
                ]} />
                <HexViewDetailTable entries={[
                    [0x1C7C, 4, <><code>magic</code>: When interpreted in little endian order, these bytes give the string, <code>SEPO</code>.</>, 0],
                    [0x1C80, 4, <><code>paddedSize</code>: This tag is 0x10 (16) bytes long.</>],
                    [0x1C84, 4, <><code>size</code>: The actual payload is 4 bytes long.</>],
                    [0x1C88, 4, <><code>value</code>: The actual value of the tag: 4.</>, 1],
                ]} />
            </Layout.Content>
        </Layout.Root>
    );
}
