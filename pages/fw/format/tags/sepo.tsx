/* =============================================================================
 * File:   sepo.tsx
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
        <Layout.Root navGroup="fw" pageTitle={<>Tag: <code>SEPO</code></>} canonical="/fw/format/tags/sepo">
            <Layout.Title title="Tag: SEPO" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/fw/format/tags">Tags</Breadcrumb.Item>
                <Breadcrumb.Item><code>SEPO</code></Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format">
                        <Toc.Entry href="#headingTagFormatImg3" text="IMG3" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                </Toc.Root>
                <p>
                    The <code>SEPO</code> (Security Epoch) tag specifies the security epoch required for the device to load the provided image.
                    It is believed to be used by Apple to prevent devices from loading previously vulnerable firmwares, but this is unconfirmed.
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>

                <h3 id="headingTagFormatImg3">IMG3</h3>
                <pre>{`Img3SepoTag {
   0  uint32   magic      // 'OPES' ('SEPO' in little endian)
   4  uint32   paddedSize // including header and padding
   8  uint32   size       // including padding
   C  uint32   value
  10  uint8[]  padding    // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/fw/file/apple-logo">AppleLogo</A> payload from the <A href="/key/iPhone1,1/5A347">2.0 (build 5A347) build for the iPhone (<code>iPhone1,1</code>)</A>.
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
                    [0x1C84, 4, <><code>size</code>: The actual payload (including padding) is 4 bytes long.</>],
                    [0x1C88, 4, <><code>value</code>: The actual value of the tag: 4.</>, 1],
                ]} />
            </Layout.Content>
        </Layout.Root>
    );
}
