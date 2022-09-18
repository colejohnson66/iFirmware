/* =============================================================================
 * File:   type.tsx
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
        <Layout.Root navGroup="fw" pageTitle={<>Tag: <code>TYPE</code></>} canonical="/fw/format/tags/type">
            <Layout.Title title="Tag: TYPE" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/fw/format/tags">Tags</Breadcrumb.Item>
                <Breadcrumb.Item><code>TYPE</code></Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format">
                        <Toc.Entry href="#headingTagFormatImg3" text="IMG3" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                </Toc.Root>
                <p>
                    The <code>TYPE</code>  tag is a four byte little endian string that states what type of firmare image the payload is.
                    This tag was not present in earlier versions of iPhone OS/iOS;
                    It is unknown when it was added.
                    Its purpose is also unknown as the <code>ident</code> field in the IMG3 header has the same value.
                </p>
                <p>
                    According to <A href="https://www.theiphonewiki.com/wiki/TYPE">The iPhone Wiki</A>, the bootrom compares it to the second parameter of <code>image_load</code>;
                    If they don&apos;t match, <code>image_load</code> will fail.
                    {/* However, if a zero is passed as the second parameter, the check is bypassed. */}
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>

                <h3 id="headingTagFormatImg3">IMG3</h3>
                <pre>{`Img3TypeTag {
   0  u32   magic     // 'EPYT' ('TYPE' in little endian)
   4  u32   fullSize  // including header and padding
   8  u32   size      // including padding
   C  u32   value
  10  u8[]  padding   // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/fw/file/apple-logo">AppleLogo</A> payload from the <A href="/key/iPad3,6/14A403">10.0.1 (build 14A403) build for the iPad 4 (<code>iPhone3,6</code>)</A>.
                </p>
                <HexView initialOffset={0x14} size={0x20} chunks={[
                    [
                        "h0 45 50 59 54",
                        "20 00 00 00",
                        "04 00 00 00",
                    ],
                    [
                        "h1 6F 67 6F 6C",
                        "00 00 00 00 00 00 00 00 00 00 00 00",
                    ],
                    ["00 00 00 00"],
                ]} />
                <HexViewDetailTable entries={[
                    [0x14, 4, <><code>magic</code>: When interpreted in little endian order, these bytes give the string, <code>TYPE</code>.</>, 0],
                    [0x18, 4, <><code>fullSize</code>: This tag is 0x20 (32) bytes long.</>],
                    [0x1C, 4, <><code>size</code>: The actual payload (including padding) is 4 bytes long.</>],
                    [0x20, 4, <><code>value</code>: The actual value of the tag.
                        When interpreted in little endian order, this gives the ASCII string <code>LOGO</code> (indicating that it&apos;s an <A href="/fw/file/apple-logo">AppleLogo</A> file).</>, 1],
                    [0x24, 16, <><code>padding</code></>],
                ]} />
            </Layout.Content>
        </Layout.Root>
    );
}
