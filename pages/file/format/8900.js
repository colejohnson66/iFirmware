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
import constants from "../../../constants";

export default () => {
    return (
        <Layout navGroup="file" title="8900">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>8900</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFormat" text="File Format" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>8900</h1>
                        <p>
                            So called due to both their <a href="https://en.wikipedia.org/wiki/File_format#Magic_number" className="external">magic number</a> and their use on the <Link href="/processor/s5l8900"><a>S5L8900 processor</a></Link>, 8900 files are very basic.
                            Their usage was, as far as is known, to simply provide a wrapper for <Link href="/file/format/img2"><a>IMG2</a></Link> and <Link href="/file/format/dmg"><a>DMG</a></Link> files.
                            They can only be parsed by <Link href="/file/iBoot"><a>iBoot</a></Link>-304 (iPhone OS 2.0 beta 3) or earlier and the S5L8900.
                            Later processors have no support for this format.
                        </p>

                        <h2 id="headingFormat">File Format</h2>
                        <Alert variant="primary">
                            All file offsets are in hexadecimal, and all values except magic and version are stored in little endian.
                        </Alert>
                        <pre>
                            <code>
                                {`Apple8900 {
   0  uint8[4]  magic;   // "8900" in big endian
   4  uint8[3]  version; // "1.0" in big endian
   7  uint8     format;  // 0x1: boot payload encrypted with UID key
                         // 0x2: unencrypted boot payload
                         // 0x3: payload encrypted with `}<Link href="/processor/s5l8900#headingKeys"><a>Key 0x837</a></Link>{`
                         // 0x4: unencrypted payload
   8  uint32;
   C  uint32    payloadLength;
  10  uint32    footerSigOffset;  // ignoring header
  14  uint32    footerCertOffset; // ignoring header
  18  uint32    footerCertLength;
  1C  uint8[32] salt;
  3C  uint16;
  3E  uint16    epoch;
  40  uint8[16] headerSig;  // aes128cbc(sha1(file[0:0x40])[0:0x10], Key0x837, ZeroIV)
  50  uint8[0x7B0] pad;
 800  uint8[]   payload;    // sizeof(payload) == payloadLength
????  uint8[]   footerSig;  // sizeof(footerSig) == footerCertOffset - footerSigOffset
????  uint8[]   footerCert; // sizeof(footerCert) == footerCertLength
}`}
                            </code>
                        </pre>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
