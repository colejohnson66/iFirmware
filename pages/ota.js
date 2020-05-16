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
import WIP from "../components/wip";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="ota" title="OTA Updates">
            <Container fluid>
                <WIP />
                <Breadcrumb>
                    <Breadcrumb.Item active>OTA Updates</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingIssues" text="Issues with Jailbreaking" />
                            <TOC.Entry href="#headingContents" text="Contents">
                                <TOC.Entry href="#headingVersion1" text="Version 1" />
                                <TOC.Entry href="#headingVersion2" text="Version 2" />
                                <TOC.Entry href="#headingVersion3" text="Version 3" />
                            </TOC.Entry>
                            <TOC.Entry href="#headingList" text="List of OTA Updates">
                                <TOC.Entry href="#headingAirPods" text="AirPods" />
                                <TOC.Entry href="#headingAppleTV" text="Apple TV" />
                                <TOC.Entry href="#headingAppleTVAccessories" text="Apple TV Accessories" />
                                <TOC.Entry href="#headingAppleWatch" text="Apple Watch" />
                                <TOC.Entry href="#headingHomePod" text="HomePod" />
                                <TOC.Entry href="#headingIPad" text="iPad" />
                                <TOC.Entry href="#headingIPadAir" text="iPad Air" />
                                <TOC.Entry href="#headingIPadMini" text="iPad mini" />
                                <TOC.Entry href="#headingIPadAccessories" text="iPad Accessories" />
                                <TOC.Entry href="#headingIPhone" text="iPhone" />
                                <TOC.Entry href="#headingIPodTouch" text="iPod touch" />
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>OTA Updates</h1>
                        <p>
                            OTA (over the air) updates were introduced with <Link href="/iOS/5"><a>iOS 5</a></Link>.
                            They allow a user to update the firmware on their device without the desktop iTunes program.
                        </p>

                        <h2 id="headingContents">Contents</h2>
                        <p>
                            There are three known versions of the update file containers.
                        </p>

                        <h3 id="headingVersion1">Version 1</h3>
                        <p>
                            Version 1 updates came first, and were replaced with <Link href="#headingVersion2"><a>version 2</a></Link> with iOS ???.
                            They contain three main files:
                        </p>
                        <ul>
                            <li>
                                <code>archive.cpio.gz</code>: The actual encrypted patch archive.
                                It is a collection of <code>BSDIFF40</code> and the requisite flashing tools (<code>bbupdater</code>, <code>imeisv</code>, etc.).
                            </li>
                            <li>
                                <code>Info.plist</code> and <code>Info.plist.signature</code>: Contains information about the update along with a signature.
                            </li>
                            <li>
                                <code>libupdate_brain.dylib</code>: A code library for stage 2 of the update process.
                            </li>
                        </ul>

                        <h3 id="headingVersion2">Version 2</h3>
                        <p>
                            Version 2 updates were introduced with iOS ???.
                            Instead of an <code>archive.cpio.gz</code> file, they contain two folders: <code>added</code> and <code>patches</code>.
                            As their names imply, <code>added</code> contains unencrypted files to be added to the filesystem while <code>patches</code> contains <code>BSDIFF40</code> files of files that need to be patched.
                        </p>

                        <h3 id="headingVersion3">Version 3</h3>
                        <p>
                            Version 3 updates were introduced with iOS ???.
                            Quite a number of changes were made to the structure.
                            The most major changes are listed below:
                        </p>
                        <p>
                            Version 3 update files were introduced with iOS ???.
                            Quite a number of changes were made to the folder structure.
                            The most major changes are listed below:
                        </p>
                        <ul>
                            <li>
                                The <code>added</code> folder no longer exists.
                            </li>
                            <li>
                                <code>links.txt</code> was added.
                                It contains a list of <a href="https://en.wikipedia.org/wiki/Symbolic_link" className="external">symbolic links</a> (symlinks) to be created.
                            </li>
                            <li>
                                The <code>patches</code> folder contents no longer use the <code>BSDIFF40</code> file format, but a modified version known as <code>BXDIFF41</code>.
                            </li>
                            <li>
                                <code>payload</code> and <code>prepare_payload</code> were added.
                                They hold the filesystem contents in a proprietary format.
                            </li>
                            <li>
                                <code>removed.txt</code> was added.
                                It contains a list of files to be deleted prior to updating.
                            </li>
                        </ul>

                        <h2 id="headingList">List of OTA Updates</h2>
                        <p>
                            This is a comprehensive list of every OTA update that has been released to the public.
                        </p>
                        <Alert variant="primary">
                            This site does <em>not</em> mirror (host) the actual update archives (ZIP files).
                            All links are to Apple's own CDN servers (whether directly or through Akamai).
                            If you encounter a broken link, please <Link href="/contact"><a>contact me</a></Link> to report the problem.
                        </Alert>

                        <h3 id="headingAirPods">AirPods</h3>
                        <ul>
                            <li><Link href="/ota/airPods/1g"><a>AirPods (1st generation)</a></Link></li>
                            <li><Link href="/ota/airPods/2g"><a>AirPods (2nd generation)</a></Link></li>
                            <li><Link href="/ota/airPods/pro"><a>AirPods Pro</a></Link></li>
                        </ul>

                        <h3 id="headingAppleTV">Apple TV</h3>
                        <Alert variant="primary">
                            Apple TV updates are organized by their <em>marketing</em> version (the version displayed in the Settings app), not the version of iOS it is based on.
                        </Alert>
                        <ul>
                            <li>
                                4.x:{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.0"><a>4.0</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.1"><a>4.1</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.1.1"><a>4.1.1</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.2"><a>4.2</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.2.1"><a>4.2.1</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.2.2"><a>4.2.2</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.3"><a>4.3</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.4"><a>4.4</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.4.1"><a>4.4.1</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.4.2"><a>4.4.2</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.4.3"><a>4.4.3</a></Link>,{" "}
                                <Link href="/ota/appleTV/[version]" as="/ota/appleTV/4.4.4"><a>4.4.4</a></Link>
                            </li>
                            ...
                        </ul>

                        <h3 id="headingAppleTVAccessories">Apple TV Accessories</h3>
                        <ul>
                            <li><Link href="/ota/siriRemote/1g"><a>Siri Remote (1st generation)</a></Link></li>
                            <li><Link href="/ota/siriRemote/2g"><a>Siri Remote (2nd generation)</a></Link></li>
                        </ul>

                        <h3 id="headingAppleWatch">Apple Watch</h3>
                        <ul>
                            <li>
                                1.x:{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/1.0.1"><a>1.0.1</a></Link>
                            </li>
                            <li>
                                2.x:{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/2.0"><a>2.0</a></Link>,{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/2.0.1"><a>2.0.1</a></Link>,{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/2.1"><a>2.1</a></Link>,{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/2.2"><a>2.2</a></Link>,{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/2.2.1"><a>2.2.1</a></Link>,{" "}
                                <Link href="/ota/watch/[version]" as="/ota/watch/2.2.2"><a>2.2.2</a></Link>
                            </li>
                            ...
                        </ul>

                        <h3 id="headingHomePod">HomePod</h3>
                        <ul>
                            <li>
                                11.x:{" "}
                                <Link href="/ota/homePod/[version]" as="/ota/homePod/11.0.2"><a>11.0.2</a></Link>,{" "}
                                <Link href="/ota/homePod/[version]" as="/ota/homePod/11.3"><a>11.3</a></Link>,{" "}
                                <Link href="/ota/homePod/[version]" as="/ota/homePod/11.4"><a>11.4</a></Link>,{" "}
                                <Link href="/ota/homePod/[version]" as="/ota/homePod/11.4.1"><a>11.4.1</a></Link>
                            </li>
                            ...
                        </ul>

                        <h3 id="headingIPad">iPad</h3>
                        ...

                        <h3 id="headingIPadAir">iPad Air</h3>
                        ...

                        <h3 id="headingIPadMini">iPad mini</h3>
                        ...

                        <h3 id="headingIPadAccessories">iPad Accessories</h3>
                        ...

                        <h3 id="headingIPhone">iPhone</h3>
                        ...

                        <h3 id="headingIPodTouch">iPod touch</h3>
                        ...
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
