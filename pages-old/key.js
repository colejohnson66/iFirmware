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

import Layout from "../components/layout";
import Link from "next/link";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="key" title="Firmware Keys">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Firmware Keys</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingHistory" text="History">
                                <TOC.Entry href="#headingHistoryRoot" text="Root Filesystem" />
                            </TOC.Entry>
                            <TOC.Entry href="#headingVersions" text="Versions">
                                <TOC.Entry href="#headingVersionsWatch" text="watchOS" />
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Firmware Keys</h1>
                        <p>
                            The "firmware keys" are the keys which decrypt the bootloaders, ramdisks, root filesystem, and more of an iPhone OS, iOS, iPadOS, watchOS, or tvOS firmware.
                        </p>

                        <h2 id="headingHistory">History</h2>
                        <p>
                            With the release of the iPhone came the <Link href="/file/format/img2"><a>IMG2</a></Link> format and its container, the <Link href="/file/format/8900"><a>8900</a></Link> file.
                            They were used on all <Link href="/iOS/1"><a>iPhone OS 1.x</a></Link> firmwares.
                            Initially, only the <Link href="/file/kernelcache"><a>kernelcache</a></Link>, <Link href="/file/iBoot"><a>iBoot</a></Link>, and <Link href="/file/wtf"><a>WTF</a></Link> were encrypted, but beginning with <Link href="/iOS/1.1.0"><a>iPhone OS 1.1.0</a></Link>, all files were encrypted.
                            However, the biggest flaw of these formats was the use of a <Link href="/processor/s5l8900#headingKeys"><a>global key</a></Link> that would decrypt them all.
                        </p>
                        <p>
                            Following IMG2 came the <Link href="/file/format/img3"><a>IMG3</a></Link> file format.
                            They were introduced with iPhone OS 2.0 beta 4, and were used on all 32-bit devices.
                            IMG3 improved over the 8900/IMG2 combo by being encrypted in a way that does not rely on a "global key," but instead requiring the use of the model's unique key stored in the processor.
                        </p>
                        <p>
                            With the introduction of 64-bit processors beginning with the <Link href="/device/iPhone/5s"><a>iPhone 5s</a></Link> (running on the <Link href="/processor/s5l8960"><a>S5L8960</a></Link>), Apple changed the format once again.
                            This time, they introduced the <Link href="/file/format/img4"><a>IMG4</a></Link> file format.
                            Contrary to the 8900, IMG2, and IMG3 file formats where a custom binary format was used, IMG4 files are <a href="https://en.wikipedia.org/wiki/X.690#DER_encoding" className="external">DER</a> encoded <a href="https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One" className="external">ASN.1</a> files.
                        </p>

                        <h3 id="headingHistoryRoot">Root Filesystem</h3>
                        <p>
                            Unlike practically every other firmware file in an <Link href="/file/format/ipsw"><a>IPSW</a></Link>, the <Link href="/file/rootFS"><a>root filesystem</a></Link> is different;
                            It has never used the 8900, IMG2, IMG3, or IMG4 file formats.
                            Instead, the root filesystem is an encrypted <a href="https://en.wikipedia.org/wiki/FileVault" className="external">FileVault</a> volume.
                        </p>

                        <h2 id="headingVersions">Versions</h2>
                        <p>
                            This is a full and comprehensive list of all firmwares that Apple has made available to the public in some way, be it the Developer Center, iTunes, <Link href="/ota"><a>OTA updates</a></Link>, etc.
                            This list also includes firmwares for which there was (as can be told) never an <Link href="/file/format/ipsw"><a>IPSW</a></Link>, such as <Link href="/iOS/4.2.5"><a>iOS 4.2.5</a></Link> for the <Link href="/device/iPhone/4"><a>CDMA iPhone 4 (<code>iPhone3,3</code>)</a></Link>.
                            These builds came preinstalled on the device, but were (as can be told) never available for download, and as such, will not have any keys available.
                        </p>
                        <p>
                            Note that this does <em>not</em> include firmwares discovered on <Link href="/device/prototype"><a>prototype devices</a></Link>.
                            Those were not released to the public.
                        </p>
                        <p>
                            Please select a <em>major</em> iPhone OS, iOS, iPadOS, or tvOS version below.
                            For watchOS, please <Link href="#headingVersionsWatch"><a>scroll down</a></Link>.
                        </p>
                        <Alert variant="primary">
                            iOS versions for the Apple TV are listed according to their <em>marketing</em> version, not the internal version.
                        </Alert>
                        <ul>
                            <li><Link href="/key/1"><a>1.x</a></Link></li>
                            <li><Link href="/key/2"><a>2.x</a></Link></li>
                            <li><Link href="/key/3"><a>3.x</a></Link></li>
                            <li><Link href="/key/4"><a>4.x</a></Link></li>
                            <li><Link href="/key/5"><a>5.x</a></Link></li>
                            <li><Link href="/key/6"><a>6.x</a></Link></li>
                            <li><Link href="/key/7"><a>7.x</a></Link></li>
                            <li><Link href="/key/8"><a>8.x</a></Link></li>
                            <li><Link href="/key/9"><a>9.x</a></Link></li>
                            <li><Link href="/key/10"><a>10.x</a></Link></li>
                            <li><Link href="/key/11"><a>11.x</a></Link></li>
                            <li><Link href="/key/12"><a>12.x</a></Link></li>
                            <li><Link href="/key/13"><a>13.x</a></Link></li>
                        </ul>

                        <h3 id="headingVersionsWatch">watchOS</h3>
                        <p>
                            As watchOS uses a different versioning method, its firmware builds are listed separately.
                        </p>
                        <ul>
                            <li><Link href="/key/watch/1"><a>1.x</a></Link></li>
                            <li><Link href="/key/watch/2"><a>2.x</a></Link></li>
                            <li><Link href="/key/watch/3"><a>3.x</a></Link></li>
                            <li><Link href="/key/watch/4"><a>4.x</a></Link></li>
                            <li><Link href="/key/watch/5"><a>5.x</a></Link></li>
                            <li><Link href="/key/watch/6"><a>6.x</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
