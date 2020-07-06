/* This file is part of iDecryptIt.
 * Copyright (c) 2020 Cole Johnson
 * 
 * This program is free software: you can redistribute it and/or modify it under
 *   the terms of the GNU Affero General Public License as published by the Free
 *   Software Foundation, either version 3 of the License, or (at your option)
 *   any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 *   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *   FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 *   for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License along
 *   with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { Alert, Breadcrumb, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../components/layout";
import Link from "next/link";
import TOC from "../../../components/toc";
import WIP from "../../../components/wip";
import constants from "../../../constants";

export default () => {
    return (
        <Layout navGroup="file" title="IMG2">
            <Container fluid>
                <WIP />
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>IMG2</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFormat" text="File Format">
                                <TOC.Entry href="#headingImageTypes" text="Known Image Types" />
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>IMG2</h1>
                        <p>
                            IMG2 files were the original method of holding a payload for <Link href="/device"><a>iDevices</a></Link>.
                            While the extension <code>.img2</code> was commonly used in <Link href="/file/format/ipsw"><a>IPSW</a></Link> files, these files are actually <Link href="/file/format/8900"><a>8900</a></Link> files wrapping an IMG2 file.
                            These files can only be parsed by <Link href="/file/iBoot"><a>iBoot</a></Link>-304 (iPhone OS 2.0 beta 3) or earlier and the S5L8900.
                            Later processors have no support for this format.
                        </p>

                        <h2 id="headingFormat">File Format</h2>
                        <Alert variant="primary">
                            All file offsets are in hexadecimal, and all values are stored in little endian.
                        </Alert>
                        <pre>
                            <code>
                                {`Img2 {
   0  uint8[4] magic;     // "2gmI" ("Img2" in little endian)
   4  uint8[4] imageType; // little endian; eg. "ogol" ("logo") for `}<Link href="/file/appleLogo"><a>AppleLogo</a></Link>{`
   8  uint16;
   A  uint16   epoch;
   C  uint32   flags1;
  10  uint32   payloadLengthPadded;
  14  uint32   payloadLength;
  18  uint32;
  1C  uint32   flags2; // 0x01000000 has to be unset
  20  uint8[64];
  60  uint32;          // possibly the string length of VersionTag.version
  64  uint32   headerChecksum; // crc32(file[0:0x64])
  68  uint32   checksum2;
  6C  uint32;          // always 0xFFFFFFFF?
  70  VersionTag {
        70  uint8[4]  magic;   // "srev" ("vers" in little endian)
        74  uint32;
        78  uint8[24] version; // "EmbeddedImages-##" (terminated with a null and 0xFF)
      } version;
  90  uint8[0x370] pad;
 400  uint8[]  payload; // sizeof(payload) == payloadLengthPadded
}`}
                            </code>
                        </pre>

                        <h3 id="headingImageTypes">Known Image Types</h3>
                        <p>
                            The <code>imageType</code> value (located at offset <code>0x4</code>) specifies what payload is contained in this file.
                            These are the known possible values (in big endian; flip the order for stored order):
                        </p>
                        <ul>
                            <li><code>logo</code>: <Link href="/file/appleLogo"><a>AppleLogo</a></Link></li>
                            ...
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
