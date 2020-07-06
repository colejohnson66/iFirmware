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

import Cite from "../components/cite";
import DateTime from "../components/dateTime";
import Layout from "../components/layout";
import Link from "next/link";
import Ref from "../components/ref";
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
                            <TOC.Entry href="#headingReferences" text="References" />
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
                            Later that year, on <DateTime dateTime="2007-06-27" />, the original iPhone was released to the world with (what is now) <Link href="/iOS/1"><a>iPhone OS 1.0</a></Link>.
                        </p>

                        <h3 id="headingName">Name</h3>
                        <p>
                            Initially, iOS didn't even have a name;
                            It was initially just said to run a trimmed down version of <a href="https://en.wikipedia.org/wiki/MacOS" className="external">Mac OS X</a> (now <i>macOS</i>).
                            With the release of the <Link href="/iOS/2"><a>iPhone OS 2</a></Link> and <Link href="/iOS/sdk"><a>iPhone SDK</a></Link>, Apple dubbed it <i>iPhone OS</i>.
                            Initially chosen as it was what ran on the iPhone, it later was utilized by the iPod touch, iPad, and Apple TV (second generation and newer).
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
                            According to Apple, the change was made to differentiate the iPad from the iPhone and iPod touch lines as it (iPadOS) would contain a greater emphasis on multitasking.
                            <Ref.Link name="AppleUnveilsIPadOS" />
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
                                    <td><Link href="/iOS/app/appleStore"><a>Apple Store</a></Link></td>
                                    <td>13.0? - present</td>
                                    <td>Apple Store</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/appStore"><a>App Store</a></Link></td>
                                    <td>2.0 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/App_Store_(iOS)" className="external">App Store</a> client</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/books"><a>Books</a></Link><br />(previously <i>iBooks</i>)</td>
                                    <td>8.0 - present</td>
                                    <td>PDF and eBook viewer</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/calculator"><a>Calculator</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Scientific calculator</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/calendar"><a>Calendar</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Calendar</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/camera"><a>Camera</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Camera</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/clips"><a>Clips</a></Link></td>
                                    <td>13.0 - present</td>
                                    <td>Short video (clip) editor</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/clock"><a>Clock</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>World clocks, alarms, and timers</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/compass"><a>Compass</a></Link></td>
                                    <td>3.0 - present</td>
                                    <td>Compass and (in later versions) spirit level</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/contacts"><a>Contacts</a></Link></td>
                                    <td>1.??? - present</td>
                                    <td>Contact book</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/demoApp"><a>Demo App</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Used in demo displays to display a video when the device is not in use</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/faceTime"><a>FaceTime</a></Link></td>
                                    <td>7.0 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/FaceTime" className="external">FaceTime</a> telephony</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/files"><a>Files</a></Link></td>
                                    <td>13.0 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/iCloud" className="external">iCloud</a> file manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/findMy"><a>Find My</a></Link><br />(previously <i>Find My iPhone</i> and <i>Find My Friends</i>)</td>
                                    <td>9.0 - present</td>
                                    <td>Device and friend locator</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/gameCenter"><a>Game Center</a></Link> (<i>app</i>)</td>
                                    <td>4.1 - 9.3.6</td>
                                    <td><Link href="/iOS/gameCenter"><a>Game Center</a></Link> account manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/health"><a>Health</a></Link></td>
                                    <td>8.0 - present</td>
                                    <td>Health informatics</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/home"><a>Home</a></Link></td>
                                    <td>8.0 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/HomeKit" className="external">HomeKit</a> based devices manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/iTunes"><a>iTunes Store</a></Link><br />(previously just <i>iTunes</i>)</td>
                                    <td>1.1 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/ITunes_Store" className="external">iTunes Store</a> client</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/mail"><a>Mail</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Email manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/maps"><a>Maps</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Apple Maps (Google Maps on 5.1.1 and below)</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/measure"><a>Measure</a></Link></td>
                                    <td>11.0 - present</td>
                                    <td>AR based measuring app</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/messages"><a>Messages</a></Link><br />(previously <i>Text</i> and <i>SMS</i>)</td>
                                    <td>1.0 - present</td>
                                    <td>Texting (SMS) and (since <Link href="/iOS/5"><a>iOS 5</a></Link>) iMessage</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/news"><a>News</a></Link></td>
                                    <td>9.0 - present</td>
                                    <td>News</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/nike"><a>Nike+iPod</a></Link></td>
                                    <td>2.2.1 - 8.4.1</td>
                                    <td><a href="https://en.wikipedia.org/wiki/Nike%2B" className="external">Nike+</a> receiver</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/notes"><a>Notes</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Note taking app</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/phone"><a>Phone</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Phone</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/photos"><a>Photos</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Photo library</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/podcasts"><a>Podcasts</a></Link></td>
                                    <td>8.0 - present</td>
                                    <td>Podcast library</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/reminders"><a>Reminders</a></Link></td>
                                    <td>6.0 - present</td>
                                    <td>Reminders manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/safari"><a>Safari</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Web browser</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/settings"><a>Settings</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Device settings manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/setup"><a>Setup</a></Link></td>
                                    <td>5.0 - present</td>
                                    <td>Device setup; Runs after a restore or update</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/siri"><a>Siri</a></Link></td>
                                    <td>4.0 - present</td>
                                    <td>Siri</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/stocks"><a>Stock</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Stock price viewer</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/tips"><a>Tips</a></Link></td>
                                    <td>8.0 - present</td>
                                    <td>Device tips</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/tv"><a>TV</a></Link></td>
                                    <td>13.0 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/Apple_TV%2B" className="external">Apple TV+</a> client</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/voiceMemos"><a>Voice Memos</a></Link></td>
                                    <td>3.0 - present</td>
                                    <td>Audio recorder</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/wallet"><a>Wallet</a></Link><br />(previously <i>Passbook</i>)</td>
                                    <td>6.0 - present</td>
                                    <td><a href="https://en.wikipedia.org/wiki/Apple_Wallet" className="external">Apple Wallet</a></td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/watch"><a>Watch</a></Link></td>
                                    <td>8.0 - present</td>
                                    <td>Apple Watch manager</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/weather"><a>Weather</a></Link></td>
                                    <td>1.0 - present</td>
                                    <td>Weather viewer</td>
                                </tr>
                                <tr>
                                    <td><Link href="/iOS/app/youTube"><a>YouTube</a></Link></td>
                                    <td>1.0 - 5.1.1</td>
                                    <td><a href="https://en.wikipedia.org/wiki/YouTube" className="external">YouTube</a></td>
                                </tr>
                                {/* https://github.com/colejohnson66/idecryptit-web/blob/6b19a1d47d9a6bd3374a350305c6bcac9078f6f9/views/ios.handlebars */}
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

                        <Ref.ListRoot>
                            <Ref.ListEntry name="AppleUnveilsIPadOS">
                                <Cite.Web
                                    author="Wuerthele, Mike"
                                    date="2019-06-03"
                                    url="https://appleinsider.com/articles/19/06/03/apple-supplements-ios-13-with-new-tablet-specific-ipad-os-branch"
                                    title="Apple unveils iPadOS, adding features specifically to iPad"
                                    website="AppleInsider"
                                />
                            </Ref.ListEntry>
                        </Ref.ListRoot>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
