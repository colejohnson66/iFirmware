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
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout";
import Link from "next/link";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="baseband" title="Baseband">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Baseband</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingList" text="List of Baseband Processors" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Baseband</h1>
                        <p>
                            A baseband processor is a chip that manages the cellular radio functions of a device.
                            In the case of <Link href="/device"><a>iDevices</a></Link>, the baseband processor has its own RAM and firmware, separate to the main processor.
                        </p>

                        <h2 id="headingList">List of Baseband Processors</h2>
                        <p>
                            Over the years, Apple has used many different baseband processors.
                            Specifically, Broadcom and Intel are the most common, but Infineon has been used before.
                            Recently, Apple has begun utilizing two processors at the same time.
                            In other words, newer devices support two processors (one Broadcom, one Intel), but which one is used in <em>your</em> device depends on many factors.
                        </p>
                        <p>
                            This list is sorted <em>roughly</em> in chronological order.
                            The devices listed to the right of each processor model number are the devices it is used in.
                        </p>
                        <ul>
                            <li>
                                <Link href="/baseband/pmb8876"><a>PMB8876</a></Link> "S-Gold 2":{" "}
                                <Link href="/device/iPhone/2g"><a>iPhone</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/pmb8878"><a>PMB8878</a></Link> "X-Gold 608":{" "}
                                <Link href="/device/iPhone/3g"><a>iPhone 3G</a></Link>,{" "}
                                <Link href="/device/iPhone/3gs"><a>iPhone 3GS</a></Link>,{" "}
                                <Link href="/device/iPad/1g"><a>iPad</a></Link> (3G model)
                            </li>
                            <li>
                                <Link href="/baseband/xmm6180"><a>XMM6180</a></Link> "X-Gold 618":{" "}
                                <Link href="/device/iPhone/4"><a>iPhone 4</a></Link> (<code>iPhone3,1</code> and <code>iPhone3,2</code> models),{" "}
                                <Link href="/device/iPad/2"><a>iPad 2</a></Link> (<code>iPad2,2</code> model)
                            </li>
                            <li>
                                <Link href="/baseband/mdm6600"><a>MDM6600</a></Link>:{" "}
                                <Link href="/device/iPhone/4"><a>iPhone 4</a></Link> (<code>iPhone3,3</code> model),{" "}
                                <Link href="/device/iPad/2"><a>iPad 2</a></Link> (<code>iPad2,3</code> model)
                            </li>
                            <li>
                                <Link href="/baseband/mdm6610"><a>MDM6610</a></Link>:{" "}
                                <Link href="/device/iPhone/4s"><a>iPhone 4S</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/mdm9600"><a>MDM9600</a></Link>:{" "}
                                <Link href="/device/iPad/3g"><a>iPad (3rd gen)</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/mdm9615"><a>MDM9615</a></Link>:{" "}
                                <Link href="/device/iPad/4g"><a>iPad (4th gen)</a></Link>,{" "}
                                <Link href="/device/iPadAir/1g"><a>iPad Air</a></Link>,{" "}
                                <Link href="/device/iPadMini/1g"><a>iPad mini</a></Link>,{" "}
                                <Link href="/device/iPadMini/2"><a>iPad mini 2</a></Link>,{" "}
                                <Link href="/device/iPadMini/3"><a>iPad mini 3</a></Link>,{" "}
                                <Link href="/device/iPhone/5"><a>iPhone 5</a></Link>,{" "}
                                <Link href="/device/iPhone/5c"><a>iPhone 5c</a></Link>,{" "}
                                <Link href="/device/iPhone/5s"><a>iPhone 5s</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/mdm9625"><a>MDM9625</a></Link>:
                                <Link href="/device/iPadAir/2"><a>iPad Air 2</a></Link>,{" "}
                                <Link href="/device/iPadPro/1g"><a>iPad Pro</a></Link> (12.9&nbsp;in model),{" "}
                                <Link href="/device/iPad/5g"><a>iPad (5th gen)</a></Link>,{" "}
                                <Link href="/device/iPadMini/4"><a>iPad mini 4</a></Link>,{" "}
                                <Link href="/device/iPhone/6"><a>iPhone 6 and 6 Plus</a></Link>,{" "}
                                <Link href="/device/iPhone/se"><a>iPhone SE</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/mdm9635"><a>MDM9635</a></Link>:{" "}
                                <Link href="/device/watch/series3"><a>Apple Watch Series 3</a></Link>,{" "}
                                <Link href="/device/iPadPro/1g"><a>iPad Pro</a></Link> (9.7&nbsp;in model),{" "}
                                <Link href="/device/iPad/6g"><a>iPad (6th gen)</a></Link>,{" "}
                                <Link href="/device/iPhone/6s"><a>iPhone 6s and 6s Plus</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/mdm9645"><a>MDM9645</a></Link>:{" "}
                                <Link href="/device/iPadPro/2g"><a>iPad Pro (2nd gen)</a></Link>,{" "}
                                <Link href="/device/iPhone/7"><a>iPhone 7 and 7 Plus</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/pmb9943"><a>PMB9943</a></Link> "X-Gold 736":{" "}
                                <Link href="/device/iPhone/7"><a>iPhone 7 and 7 Plus</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/mdm9655"><a>MDM9655</a></Link>:{" "}
                                <Link href="/device/iPhone/8"><a>iPhone 8 and 8 Plus</a></Link>,{" "}
                                <Link href="/device/iPhone/x"><a>iPhone X</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/pmb9948"><a>PMB9948</a></Link> "X-Gold 748":{" "}
                                <Link href="/device/iPhone/8"><a>iPhone 8 and 8 Plus</a></Link>,{" "}
                                <Link href="/device/iPhone/x"><a>iPhone X</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/pmb9955"><a>PMB9955</a></Link> "X-Gold 756":{" "}
                                <Link href="/device/iPadAir/3g"><a>iPad Air (3rd gen)</a></Link>,{" "}
                                <Link href="/device/iPadPro/3g"><a>iPad Pro (3rd gen)</a></Link>,{" "}
                                <Link href="/device/iPad/7g"><a>iPad (7th gen)</a></Link>,{" "}
                                <Link href="/device/iPadMini/5g"><a>iPad mini (5th gen)</a></Link>,{" "}
                                <Link href="/device/iPhone/xr"><a>iPhone XR</a></Link>,{" "}
                                <Link href="/device/iPhone/xs"><a>iPhone XS and XS Max</a></Link>
                            </li>
                            <li>
                                <Link href="/baseband/pmb9960"><a>PMB9960</a></Link> "X-Gold 766":{" "}
                                <Link href="/device/iPhone/11"><a>iPhone 11</a></Link>,{" "}
                                <Link href="/device/iPhone/11pro"><a>iPhone 11 Pro and 11 Pro Max</a></Link>,{" "}
                                <Link href="/device/iPadPro/4g"><a>iPad Pro (4th gen)</a></Link>,{" "}
                                <Link href="/device/iPhone/se2"><a>iPhone SE (2nd gen)</a></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
