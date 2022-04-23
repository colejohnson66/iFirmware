/* =============================================================================
 * File:   8900.tsx
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
        <Layout.Root navGroup="fw" pageTitle="8900" canonical="/fw/format/8900">
            <Layout.Title title="8900" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item>8900</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFormat" text="File Format" />
                </Toc.Root>
                <p>
                    So called due to both their <A href="https://en.wikipedia.org/wiki/File_format#Magic_number">magic number</A> and their use on the <A href="/processor/s5l8900">S5L8900 processor</A>, 8900 files are very basic.
                    Their usage was, as far as is known, to simply provide a wrapper for <A href="/fw/format/img2">IMG2</A> and <A href="/fw/format/dmg">DMG</A> files.
                    They can only be parsed by <A href="/fw/file/iboot">iBoot</A>-304 (iPhone OS 2.0 beta 3) or earlier and the S5L8900.
                    Later processors have no support for this format.
                </p>

                <Clear />

                <h2 id="headingFormat">File Format</h2>
                <pre>{`Apple8900 {
   0  uint8[4]     magic             // '8900' in big endian
   4  uint8[3]     version           // '1.0' in big endian
   7  uint8        format            // 1: boot payload encrypted with UID key
                                     // 2: unencrypted boot payload
                                     // 3: generic payload encrypted with `}<A href="/processor/s5l8900#headingKeys">key 0x837</A>{`
                                     // 4: unencrypted generic payload
   8  uint32       --unknown
   C  uint32       payloadLength
  10  uint32       footerSigOffset   // ignoring header
  14  uint32       footerCertOffset  // ignoring header
  18  uint32       footerCertLength
  1C  uint8[32]    salt
  3C  uint16       --unknown
  3E  uint16       epoch
  40  uint8[16]    headerSignature   // SHA1 hash of first 0x40 bytes, truncated to 16 bytes (drop last four)
                                     // AES-128-CBC of above hash with key 0x837 and a zero IV
  50  uint8[0x7B0] padding
 800  uint8[]      payload
????  uint8[]      footerSignature   // \`footerCertOffset - footerSigOffset\` bytes
????  uint8[]      footerCertificate // \`footerCertLength\` bytes
}`}</pre>
            </Layout.Content>
        </Layout.Root>
    );
}
