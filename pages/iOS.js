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
import { Alert, Breadcrumb, Col, Container, Row, Table } from "react-bootstrap";

import DateTime from "../components/dateTime";
import Layout from "../components/layout";
import Link from "next/link";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="iOS" title="iOS">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>iOS</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingHistory" text="History">
                                <TOC.Entry href="#headingName" text="Name" />
                            </TOC.Entry>
                            <TOC.Entry href="#headingArchitecture" text="Architecture" />
                            <TOC.Entry href="#headingBloat" text="Installation Size" />
                            <TOC.Entry href="#headingApps" text="Apps" />
                            <TOC.Entry href="#headingVersions" text="Versions of iOS">
                                <TOC.Entry href="#headingVersionsWatch" text="watchOS" />
                                <TOC.Entry href="#headingVersionsAppleTV" text="tvOS" />
                                <TOC.Entry href="#headingVersionsIPad" text="iPadOS" />
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>iOS</h1>
                        <p>
                            iOS, formally known as iPhone OS, is the operating system for all <Link href="/device"><a>iDevices</a></Link>.
                        </p>

                        <h2 id="headingHistory">History</h2>
                        <p>
                            iPhone OS began in <DateTime dateTime="2005" /> and was announced alongside the <Link href="/device/iPhone/2g"><a>original iPhone</a></Link> at the Macworld Conference &amp; Expo on <DateTime dateTime="2007-01-09" />.
                            Later that year, on <DateTime dateTime="2007-06-27" />, the original iPhone was released to the world with <Link href="/iOS/1"><a>iPhone OS 1.0</a></Link>.
                        </p>

                        <h3 id="headingName">Name</h3>
                        <p>
                            Initially, iOS was called "iPhone OS" as it was designed for the iPhone.
                            However it was later utilized by the iPod touch, iPad, and Apple TV (second generation and newer).
                            As such, iPhone OS was renamed "iOS" with the <Link href="/iOS/4"><a>fourth major version</a></Link>.
                            This name was utilized for all <Link href="/device"><a>iDevices</a></Link> for many years.
                        </p>
                        <p>
                            With the release of the <Link href="/device/watch/1g"><a>original Apple Watch</a></Link> on <DateTime dateTime="2015-04-24" />, Apple released <i>watchOS</i>, a trimmed down version of iOS that's designed for the small screen of the Watch.
                            Unlike the (then unreleased) tvOS and iPadOS which kept version number parity with iOS, the original Apple Watch was released with <Link href="/iOS/watchOS/1"><a>watchOS 1.0</a></Link>, based on <Link href="/iOS/8.2"><a>iOS 8.2</a></Link>.
                        </p>
                        <p>
                            Later that year, with the release of the <Link href="/device/appleTV/4g"><a>fourth generation Apple TV</a></Link> in <DateTime dateTime="2015-10" />, Apple released <Link href="/iOS/tvOS/9"><a><i>tvOS</i> 9</a></Link> alongside iOS 9.
                            tvOS, like watchOS, is (internally) still iOS, but designed for a <a href="https://en.wikipedia.org/wiki/10-foot_user_interface" className="external">10-foot user interface</a>.
                            The <Link href="/device/appleTV/2g"><a>second</a></Link> and <Link href="/device/appleTV/3g"><a>third</a></Link> generation Apple TVs however, continued to use the "iOS" branding.
                        </p>
                        <p>
                            Four years after the release of iOS 9, with <Link href="/iOS/13"><a>iOS 13</a></Link>, Apple again rebranded iOS, but this time for their iPad line of products.
                            The resulting operating system was named <i>iPadOS</i>.
                            AccordiPhone OS ing to Apple, the change was made to differentiate the iPad from the iPhone and iPod touch lines as it (iPadOS) would contain a greater emphasis on multitasking.
                            {/* TODO: Reference https://appleinsider.com/articles/19/06/03/apple-supplements-ios-13-with-new-tablet-specific-ipad-os-branch */}
                        </p>

                        <h2 id="headingArchitecture">Architecture</h2>
                        <p>
                            iOS (and watchOS, tvOS, and iPadOS) features a <a href="http://en.wikipedia.org/wiki/Hybrid_kernel" className="external">hybrid kernel</a> known as <a href="https://en.wikipedia.org/wiki/XNU" className="external">XNU</a>.
                            It is mostly programmed in ARM assembly, C, C++, and Objective-C.
                            As XNU is <a href="https://en.wikipedia.org/wiki/Unix-like" className="external">Unix-like</a>, it uses "union mounting" (compared to the Windows way of using drive letters).
                            The flash is partitioned into two separate blocks: one for the operating system (mounted at <Link href="/fs"><a><code>/</code></a></Link>) and one for the user data (mounted at <Link href="/fs/[...path]" as="/fs/private/var"><a><code>/private/var</code></a></Link>).
                        </p>

                        <h2 id="headingBloat">Installation Size</h2>
                        <p>
                            Over the years, iOS has required more and more space as the operating system has become more complex.
                            Initially, iPhone OS required less than half a gigabyte to function, but with almost each major release, the <Link href="/file/rootFS"><a>root filesystem</a></Link> partition grows bigger.
                            Currently, <Link href="/ios/13"><a>iOS 13</a></Link> will claim over six gigabytes for itself.
                        </p>

                        <h2 id="headingApps">Apps</h2>
                        <p>
                            iOS features many built-in apps.
                            Some have been available since <Link href="/iOS/1"><a>the inception</a></Link> (such as <Link href="/iOS/app/phone"><a>Phone</a></Link>), others removed over time, and others added as time goes on.
                        </p>
                        <Alert variant="primary">
                            This list contains almost all the apps available on the <Link href="/iOS/app/springBoard"><a>home screen</a></Link>, not necessarily every app in the <Link href="/fs/[...path]" as="/fs/Applications"><a><code>/Applications</code></a></Link> folder.
                            Apps not included are, but not limited to: GarageBand, iMove, iTunes U, Keynote, Numbers, and Pages.
                        </Alert>
                        <Alert variant="primary">
                            Not every app is available on every device.
                            For example, the <Link href="/iOS/app/compass"><a>Compass</a></Link> app is not available on iPads.
                        </Alert>
                        {/* TODO: add Music/Videos apps */}
                        <Table>
                            <thead>
                                <tr>
                                    <th>App</th>
                                    <th>Availability</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* TODO: populate this using data from an array */}
                                </tr>
                            </tbody>
                        </Table>

                        <h2 id="headingVersions">Versions of iOS</h2>
                        <p>
                            Apple has maintained a steady release schedule with iOS' (and related) major releases;
                            A new major version is released with every new flagship iPhone.
                            Currently, iOS is on it's 13th <em>major</em> release with iOS 14 expected to be announced at WWDC 2020.
                        </p>
                        <p>
                            Each link below will take you to a page dedicated to that major version and its new features.
                            In addition, each page will contain a full version history of that major version.
                        </p>
                        <ul>
                            <li><Link href="/iOS/1"><a>iPhone OS 1</a></Link></li>
                            <li><Link href="/iOS/2"><a>iPhone OS 2</a></Link></li>
                            <li><Link href="/iOS/3"><a>iPhone OS 3</a></Link></li>
                            <li><Link href="/iOS/4"><a>iOS 4</a></Link></li>
                            <li><Link href="/iOS/5"><a>iOS 5</a></Link></li>
                            <li><Link href="/iOS/6"><a>iOS 6</a></Link></li>
                            <li><Link href="/iOS/7"><a>iOS 7</a></Link></li>
                            <li><Link href="/iOS/8"><a>iOS 8</a></Link></li>
                            <li><Link href="/iOS/9"><a>iOS 9</a></Link></li>
                            <li><Link href="/iOS/10"><a>iOS 10</a></Link></li>
                            <li><Link href="/iOS/11"><a>iOS 11</a></Link></li>
                            <li><Link href="/iOS/12"><a>iOS 12</a></Link></li>
                            <li><Link href="/iOS/13"><a>iOS 13</a></Link></li>
                        </ul>

                        <h3 id="headingVersionsWatch">watchOS</h3>
                        <ul>
                            <li><Link href="/iOS/watchOS/1"><a>watchOS 1</a></Link></li>
                            <li><Link href="/iOS/watchOS/2"><a>watchOS 2</a></Link></li>
                            <li><Link href="/iOS/watchOS/3"><a>watchOS 3</a></Link></li>
                            <li><Link href="/iOS/watchOS/4"><a>watchOS 4</a></Link></li>
                            <li><Link href="/iOS/watchOS/5"><a>watchOS 5</a></Link></li>
                            <li><Link href="/iOS/watchOS/6"><a>watchOS 6</a></Link></li>
                        </ul>

                        <h3 id="headingVersionsAppleTV">tvOS</h3>
                        <ul>
                            <li><Link href="/iOS/tvOS/9"><a>tvOS 9</a></Link></li>
                            <li><Link href="/iOS/tvOS/10"><a>tvOS 10</a></Link></li>
                            <li><Link href="/iOS/tvOS/11"><a>tvOS 11</a></Link></li>
                            <li><Link href="/iOS/tvOS/12"><a>tvOS 12</a></Link></li>
                            <li><Link href="/iOS/tvOS/13"><a>tvOS 13</a></Link></li>
                        </ul>

                        <h3 id="headingVersionsIPad">iPadOS</h3>
                        <ul>
                            <li><Link href="/iOS/iPadOS/13"><a>iPadOS 13</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
