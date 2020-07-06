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
import HexView, { Data } from "../../../../components/hexView";

import DataReader from "../../../../lib/dataReader";
import { GetStaticProps } from "next";
import Layout from "../../../../components/layout";
import Link from "next/link";
import TOC from "../../../../components/toc";
import WIP from "../../../../components/wip";
import constants from "../../../../constants";

type PageProps = {
    example: Data,
};

export default (props: PageProps) => {
    return (
        <Layout navGroup="file" title="AppleLogo">
            <Container fluid>
                <WIP />
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active><Link href="/file/format/img3"><a>IMG3</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>KBAG</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFormat" text="Tag Format" />
                            <TOC.Entry href="#headingExample" text="Example Tag" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>IMG3 Tag: <code>KBAG</code></h1>
                        <p>
                            The <code>KBAG</code> tag is an array of bytes, usually encrypted with the <a href="https://www.theiphonewiki.com/wiki/GID_Key" className="external">GID key</a>.
                            It consists of a "magic," some info about the tag and IV/key pair, and the IV and key themselves.
                        </p>

                        <h2 id="headingFormat">Tag Format</h2>
                        <Alert variant="primary">
                            All file offsets are in hexadecimal, and all values are stored in little endian.
                        </Alert>
                        <pre>
                            <code>
                                {`Img3KbagTag {
   0  uint32  magic;       // "GABK" ("KBAG" in little endian)
   4  uint32  totalLength; // including header
   8  uint32  dataLength;  // excluding this 0xC header and padding
   C  uint32  cryptState;  // 0x1: IV/key are encrypted with the GID key
                           // 0x2: Used with a second KBAG for the `}<Link href="/processor/s5l8920"><a>S5L8920</a></Link>{`; use is unknown
  10  uint32  aesType;     //  0x80: AES-128 (16 byte key)
                           //  0xC0: AES-192 (24 byte key)
                           // 0x100: AES-256 (32 byte key)
  14  uint8[16] iv;
  24  uint8[16/24/32] key; // length depends on "aesType"
????  uint8[] pad;
}`}
                            </code>
                        </pre>

                        <h2 id="headingExample">Example Tag</h2>
                        <p>
                            The following tag is from the <Link href="/file/appleLogo"><a>AppleLogo</a></Link> file from the <Link href="/key/[...path]" as="/key/5A347/iPhone1,1"><a>2.0 (build <code>5A347</code>) build for the original iPhone (<code>iPhone1,1</code>)</a></Link>.
                        </p>
                        <HexView data={props.example} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            example: DataReader("exampleKbag.json")
        }
    };
}
