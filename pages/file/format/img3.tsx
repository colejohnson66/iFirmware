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
        <Layout navGroup="file" title="IMG3">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>IMG3</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingImg2Problems" text="Problems with IMG2" />
                            <TOC.Entry href="#headingStructure" text="File Structure" />
                            <TOC.Entry href="#headingFormat" text="File Format">
                                <TOC.Entry href="#headingTags" text="Tags">
                                    <TOC.Entry href="#headingTagFormat" text="Tag Format" />
                                    <TOC.Entry href="#headingTagList" text="List of Known Tags" />
                                </TOC.Entry>
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>IMG3</h1>
                        <p>
                            Initially used in iPhone OS 2.0 beta 4, IMG 3 files were created to address the problems with the older <Link href="/file/format/8900"><a>8900</a></Link>/<Link href="/file/format/img2"><a>IMG2</a></Link> combination.
                            This format was used on all devices using 32-bit processors (<Link href="/processor/s5l8955"><a>S5L8955</a></Link> (A6X) and earlier).
                            All 64-bit processors (<Link href="/processor/s5l8960"><a>S5L8960</a></Link> (A7) and newer) use the <Link href="/file/format/img4"><a>IMG4</a></Link> format.
                        </p>

                        <h2 id="headingImg2Problems">Problems with IMG2</h2>
                        <p>
                            The biggest problem with the <Link href="/file/format/8900"><a>8900</a></Link>/<Link href="/file/format/img2"><a>IMG2</a></Link> format combination was that they all were encrypted with the same key: <Link href="/processor/s5l8900#headingKeys"><a>Key 0x837</a></Link>.
                            IMG3 addressed this glaring security hole by encrypting each payload with its own IV/key.
                            This IV/key pair is stored in the file with the payload, but is <em>itself</em> encrypted with the <a href="https://www.theiphonewiki.com/wiki/GID_Key" className="external">GID key</a>, a key shared by all devices with the same processor.
                            The GID key is burned into the processor and cannot be accessed directly; Instead, every time the key is needed, the processor will be instructed to use it (at no time providing it to the kernel or user code).
                        </p>

                        <h2 id="headingFormat">File Format</h2>
                        <p>
                            Despite requiring a bit more to process, when compared to the <Link href="/file/format/8900"><a>8900</a></Link>/<Link href="/file/format/img2"><a>IMG2</a></Link> combination, the IMG3 file is quite simple.
                            It consists of a 20 byte header followed by a series of <Link href="headingTags"><a>tags</a></Link>, one after the other.
                        </p>
                        <Alert variant="primary">
                            All file offsets are in hexadecimal, and all values are stored in little endian.
                        </Alert>
                        <pre>
                            <code>
                                {`Img3 {
    0  uint32    magic;    // "3gmI" ("Img3" in little endian)
    4  uint32    fileSize;
    8  uint32    tagsSize; // size of file without 0x14 header
    C  uint32    shshTagOffset;
   10  uint32    ident;    // appears to be the same as the TYPE tag's contents
   14  Img3Tag[] tags;
}`}
                            </code>
                        </pre>

                        <h3 id="headingTags">Tags</h3>
                        <p>
                            A "tag" is a block of data consisting of a "magic," some info about its size, its contents (possibly encrypted), and some padding.
                            Each tag serves a unique purpose;
                            For example, the <code>KBAG</code> tag contains the IV and key to decrypt the <code>DATA</code> tag's contents.
                            Not every known tag is present in every firmware file.
                        </p>

                        <h4 id="headingTagsFormat">Tag Format</h4>
                        <Alert variant="primary">
                            All file offsets are in hexadecimal, and all values are stored in little endian.
                        </Alert>
                        <pre>
                            <code>
                                {`Img3Tag {
   0  uint32  magic;
   4  uint32  totalLength; // including padding and header
   8  uint32  dataLength;
   C  uint8[] data;        // sizeof(data) == dataLength
????  uint8[] pad;         // sizeof(pad) == totalLength - dataLength - 12
}`}
                            </code>
                        </pre>

                        <h4 id="headingTagList">List of Known Tags</h4>
                        <p>
                            There exist many different tags, each with their own purpose:
                        </p>
                        <ul>
                            <li><Link href="/file/format/img3/bord"><a><code>BORD</code></a></Link>: Board to be used with</li>
                            <li><Link href="/file/format/img3/cert"><a><code>CERT</code></a></Link>: Certificate</li>
                            <li><Link href="/file/format/img3/cepo"><a><code>CEPO</code></a></Link>: Chip epoch</li>
                            <li><Link href="/file/format/img3/chip"><a><code>CHIP</code></a></Link>: Chip to be used with</li>
                            <li><Link href="/file/format/img3/data"><a><code>DATA</code></a></Link>: Actual payload of the file</li>
                            <li><Link href="/file/format/img3/ecid"><a><code>ECID</code></a></Link>: Exclusive chip ID</li>
                            <li><Link href="/file/format/img3/kbag"><a><code>KBAG</code></a></Link>: Contains the IV and key required to decrypt the <code>DATA</code> tag</li>
                            <li><Link href="/file/format/img3/nonc"><a><code>NONC</code></a></Link>: Nonce used when the file was signed</li>
                            <li><Link href="/file/format/img3/ovrd"><a><code>OVRD</code></a></Link></li>
                            <li><Link href="/file/format/img3/prod"><a><code>PROD</code></a></Link>: Production mode</li>
                            <li><Link href="/file/format/img3/rand"><a><code>RAND</code></a></Link></li>
                            <li><Link href="/file/format/img3/salt"><a><code>SALT</code></a></Link></li>
                            <li><Link href="/file/format/img3/sdom"><a><code>SDOM</code></a></Link>: Security domain</li>
                            <li><Link href="/file/format/img3/sepo"><a><code>SEPO</code></a></Link>: Security epoch</li>
                            <li><Link href="/file/format/img3/shsh"><a><code>SHSH</code></a></Link>: Encrypted hash of the file</li>
                            <li><Link href="/file/format/img3/type"><a><code>TYPE</code></a></Link>: Type of image; should contain the same value as the <code>ident</code> field in the header</li>
                            <li><Link href="/file/format/img3/vers"><a><code>VERS</code></a></Link>: iBoot version of the image</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
