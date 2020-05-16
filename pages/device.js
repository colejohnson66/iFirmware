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
        <Layout navGroup="device" title="Devices">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Device</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingList" text="List of Devices">
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
                        <h1>Devices</h1>
                        <p>
                            Over the years, Apple has released <em>many</em> so-called "iDevices."
                            Beginning with the original iPhone in 2007, Apple's iDevice product line has expanded to include iPod touches, iPads, Apple TVs, and most recently, Apple Watches.
                            In addition to devices, Apple has released many accessories such as AirPods, Apple Pencil, HomePod, Smart Keyboard, and more.
                        </p>

                        <h2 id="headingList">List of Devices</h2>
                        <p>
                            This list includes all iOS related devices. This includes "iDevices" and their accessories such as AirPods, HomePod, etc.
                        </p>

                        <h3 id="headingAirPods">AirPods</h3>
                        <ul>
                            <li><Link href="/device/airPods/1g"><a>AirPods (1st generation)</a></Link></li>
                            <li><Link href="/device/airPods/2g"><a>AirPods (2nd generation)</a></Link></li>
                            <li><Link href="/device/airPods/pro"><a>AirPods Pro</a></Link></li>
                        </ul>

                        <h3 id="headingAppleTV">Apple TV</h3>
                        <Alert variant="primary">
                            The first generation Apple TV is not included as it does not run iOS, but instead a trimmed down version of Mac OS X.
                        </Alert>
                        <ul>
                            <li><Link href="/device/appleTV/2g"><a>Apple TV (2nd generation)</a></Link></li>
                            <li><Link href="/device/appleTV/3g"><a>Apple TV (3rd generation)</a></Link></li>
                            <li><Link href="/device/appleTV/4g"><a>Apple TV (4th generation)</a></Link></li>
                            <li><Link href="/device/appleTV/4k"><a>Apple TV 4k</a></Link></li>
                        </ul>

                        <h3 id="headingAppleTVAccessories">Apple TV Accessories</h3>
                        <ul>
                            <li><Link href="/device/remote/1g"><a>Siri Remote</a></Link></li>
                            <li><Link href="/device/remote/2g"><a>Siri Remote (2nd generation)</a></Link></li>
                        </ul>

                        <h3 id="headingAppleWatch">Apple Watch</h3>
                        <ul>
                            <li><Link href="/device/watch/1g"><a>Apple Watch</a></Link></li>
                            <li><Link href="/device/watch/series1"><a>Apple Watch Series 1</a></Link></li>
                            <li><Link href="/device/watch/series2"><a>Apple Watch Series 2</a></Link></li>
                            <li><Link href="/device/watch/series3"><a>Apple Watch Series 3</a></Link></li>
                            <li><Link href="/device/watch/series4"><a>Apple Watch Series 4</a></Link></li>
                            <li><Link href="/device/watch/series5"><a>Apple Watch Series 5</a></Link></li>
                        </ul>

                        <h3 id="headingHomePod">HomePod</h3>
                        <ul>
                            <li><Link href="/device/homePod/1g"><a>HomePod</a></Link></li>
                        </ul>

                        <h3 id="headingIPad">iPad</h3>
                        <ul>
                            <li><Link href="/device/iPad/1g"><a>iPad</a></Link></li>
                            <li><Link href="/device/iPad/2"><a>iPad 2</a></Link></li>
                            <li><Link href="/device/iPad/3g"><a>iPad (3rd generation)</a></Link></li>
                            <li><Link href="/device/iPad/4g"><a>iPad (4th generation)</a></Link></li>
                            <li><Link href="/device/iPad/5g"><a>iPad (5th generation)</a></Link></li>
                            <li><Link href="/device/iPad/6g"><a>iPad (6th generation)</a></Link></li>
                            <li><Link href="/device/iPad/7g"><a>iPad (7th generation)</a></Link></li>
                        </ul>

                        <h3 id="headingIPadAir">iPad Air</h3>
                        <ul>
                            <li><Link href="/device/iPadAir/1g"><a>iPad Air</a></Link></li>
                            <li><Link href="/device/iPadAir/2"><a>iPad Air 2</a></Link></li>
                            <li><Link href="/device/iPadAir/3g"><a>iPad Air (3rd generation)</a></Link></li>
                        </ul>

                        <h3 id="headingIPadMini">iPad mini</h3>
                        <ul>
                            <li><Link href="/device/iPadMini/1g"><a>iPad mini</a></Link></li>
                            <li><Link href="/device/iPadMini/2"><a>iPad mini 2</a></Link></li>
                            <li><Link href="/device/iPadMini/3"><a>iPad mini 3</a></Link></li>
                            <li><Link href="/device/iPadMini/4"><a>iPad mini 4</a></Link></li>
                            <li><Link href="/device/iPadMini/5g"><a>iPad mini (5th generation)</a></Link></li>
                        </ul>

                        <h3 id="headingIPadPro">iPad Pro</h3>
                        <ul>
                            <li><Link href="/device/iPadPro/1g"><a>iPad Pro</a></Link></li>
                            <li><Link href="/device/iPadPro/2g"><a>iPad Pro (2nd generation)</a></Link></li>
                            <li><Link href="/device/iPadPro/3g"><a>iPad Pro (3rd generation)</a></Link></li>
                            <li><Link href="/device/iPadPro/4g"><a>iPad Pro (4th generation)</a></Link></li>
                        </ul>

                        <h3 id="headingIPadAccessories">iPad Accessories</h3>
                        <ul>
                            <li><Link href="/device/pencil/1g"><a>Apple Pencil</a></Link></li>
                            <li><Link href="/device/pencil/2g"><a>Apple Pencil (2nd generation)</a></Link></li>
                            <li><Link href="/device/keyboard/1g"><a>Smart Keyboard</a></Link></li>
                            <li><Link href="/device/keyboard/folio"><a>Smart Keyboard Folio</a></Link></li>
                        </ul>

                        <h3 id="headingIPhone">iPhone</h3>
                        <ul>
                            <li><Link href="/device/iPhone/2g"><a>iPhone</a></Link></li>
                            <li><Link href="/device/iPhone/3g"><a>iPhone 3G</a></Link></li>
                            <li><Link href="/device/iPhone/3gs"><a>iPhone 3GS</a></Link></li>
                            <li><Link href="/device/iPhone/4"><a>iPhone 4</a></Link></li>
                            <li><Link href="/device/iPhone/4s"><a>iPhone 4S</a></Link></li>
                            <li><Link href="/device/iPhone/5"><a>iPhone 5</a></Link></li>
                            <li><Link href="/device/iPhone/5c"><a>iPhone 5c</a></Link></li>
                            <li><Link href="/device/iPhone/5s"><a>iPhone 5s</a></Link></li>
                            <li><Link href="/device/iPhone/6"><a>iPhone 6 and 6 Plus</a></Link></li>
                            <li><Link href="/device/iPhone/6s"><a>iPhone 6s and 6s Plus</a></Link></li>
                            <li><Link href="/device/iPhone/se"><a>iPhone SE</a></Link></li>
                            <li><Link href="/device/iPhone/7"><a>iPhone 7 and 7 Plus</a></Link></li>
                            <li><Link href="/device/iPhone/8"><a>iPhone 8 and 8 Plus</a></Link></li>
                            <li><Link href="/device/iPhone/x"><a>iPhone X</a></Link></li>
                            <li><Link href="/device/iPhone/xr"><a>iPhone XR</a></Link></li>
                            <li><Link href="/device/iPhone/xs"><a>iPhone XS and XS Max</a></Link></li>
                            <li><Link href="/device/iPhone/11"><a>iPhone 11</a></Link></li>
                            <li><Link href="/device/iPhone/11pro"><a>iPhone 11 Pro and 11 Pro Max</a></Link></li>
                            <li><Link href="/device/iPhone/se2"><a>iPhone SE (2nd generation)</a></Link></li>
                        </ul>

                        <h3 id="headingIPodTouch">iPod touch</h3>
                        <ul>
                            <li><Link href="/device/iPodTouch/1g"><a>iPod touch</a></Link></li>
                            <li><Link href="/device/iPodTouch/2g"><a>iPod touch (2nd generation)</a></Link></li>
                            <li><Link href="/device/iPodTouch/3g"><a>iPod touch (3rd generation)</a></Link></li>
                            <li><Link href="/device/iPodTouch/4g"><a>iPod touch (4th generation)</a></Link></li>
                            <li><Link href="/device/iPodTouch/5g"><a>iPod touch (5th generation)</a></Link></li>
                            <li><Link href="/device/iPodTouch/6g"><a>iPod touch (6th generation)</a></Link></li>
                            <li><Link href="/device/iPodTouch/7g"><a>iPod touch (7th generation)</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
