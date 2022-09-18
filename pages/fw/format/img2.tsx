/* =============================================================================
 * File:   img2.tsx
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

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle="IMG2" canonical="/fw/format/img2">
            <Layout.Title title="IMG2" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item>IMG2</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFormat" text="File Format">
                        <Toc.Entry href="#headingImageTypes" text="Known Image Types" />
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    IMG2 files were the original method of holding a payload for <A href="/device"><a>iDevices</a></A>.
                    While the extension <code>.img2</code> was commonly used in <A href="/fw/format/ipsw">IPSW</A> files, these files were actually <A href="/fw/format/8900">8900</A> files wrapping an IMG2 file.
                    IMG2 files can only be parsed by <A href="/fw/file/iboot">iBoot</A>-304 (iPhone OS 2.0 beta 3) or earlier and the S5L8900.
                    Later iBoot versions (and consequently, later processors) have no support for this format.
                </p>

                <Clear />
                <h2 id="headingFormat">File Format</h2>
                <pre>{`Img2 {
   0  uint8[4]     magic     // 'Img2' in little endian
   4  uint8[4]     imageType // `}<A href="#headingImageTypes">contained image</A>{` (in little endian)
   8  uint16;      --unknown
   A  uint16       epoch
   C  uint32       flags1
  10  uint32       payloadLenPadded
  14  uint32       payloadLen
  18  uint32;      --unknown
  1C  uint32       flags2    // 0x01000000 is unset?
  20  uint8[64];   --unknown
  60  uint32;                // possibly the string length of VersionTag.version
  64  uint32       headerChecksum // crc32(file[0:0x64])
  68  uint32       checksum2
  6C  uint32;      --unknown // always 0xFFFFFFFF?
  70  VersionTag   version
  90  uint8[0x370] padding
 400  uint8[]      payload   // sizeof(payload) == payloadLengthPadded
}

VersionTag {
   0  uint8[4]  magic   // 'vers' in little endian
   4  --unknown
   8  uint8[24] version // "EmbeddedImages-##" (terminated with a null and 0xFF)
}`}</pre>

                <h3 id="headingImageTypes">Known Image Types</h3>
                <p>
                    The <code>imageType</code> value (located at offset <code>0x4</code>) specifies what payload is contained in this file.
                    It is stored in little endian form, but presented in big endian;
                    Reverse the four bytes to get the stored form.
                    These are the known possible values:
                </p>
                <ul>
                    <li><code>logo</code>: <A href="/fw/file/apple-logo">AppleLogo</A></li>
                    <li><code>batC</code>: <A href="/fw/file/battery-charging">BatteryCharging</A></li>
                    <li><code>batl</code>: <A href="/fw/file/apple-low">BatteryLow0</A></li>
                    <li><code>batL</code>: <A href="/fw/file/apple-low">BatteryLow1</A></li>
                    <li><code>dtre</code>: <A href="/fw/file/device-tree">DeviceTree</A></li>
                    <li><code>ibot</code>: <A href="/fw/file/iboot">iBoot</A></li>
                    <li><code>llbz</code>: <A href="/fw/file/llb">LLB</A></li>
                    <li><code>nsrv</code>: <A href="/fw/file/need-service">NeedService</A></li>
                    <li><code>recm</code>: <A href="/fw/file/recovery-mode">RecoveryMode</A></li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
