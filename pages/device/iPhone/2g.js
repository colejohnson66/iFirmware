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

import DateTime from "../../../components/dateTime";
import Layout from "../../../components/layout";
import Link from "next/link";
import Resolution from "../../../components/resolution";
import TOC from "../../../components/toc";
import Unit from "../../../components/unit";
import WiFi from "../../../components/wiFi";
import constants from "../../../constants";

export default () => {
    return (
        <Layout navGroup="device" title="iPhone">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/device"><a>Device</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>iPhone</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingName" text="Name" />
                            <TOC.Entry href="#headingSpecs" text="Technical Specs" />
                            <TOC.Entry href="#headingHacking" text="Hacking" />
                            <TOC.Entry href="#headingExternalLinks" text="External Links" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>iPhone</h1>
                        <p>
                            The iPhone (commonly known as the "iPhone 2G") was Apple's first smartphone.
                            It was announced on <DateTime dateTime="2007-01-09" /> and released on <DateTime dateTime="2007-09-29" />.
                        </p>
                        <p>
                            The iPhone used many "off the shelf" components
                        </p>

                        <h2 id="headingName">Name</h2>
                        <p>
                            When announced and released, the iPhone 2G was simply called <i>iPhone</i>.
                            However, with the release of the <Link href="/device/iPhone/3g"><a>iPhone 3G</a></Link> in <DateTime dateTime="2008" />, the original iPhone became commonly known as the "iPhone <em>2G</em>."
                            The reasoning is believed to be two-fold: it is the iPhone preceding the "3G" (and 2 is one before 3), and it only supported <a href="https://en.wikipedia.org/wiki/GSM" className="external">GSM</a> and <a href="https://en.wikipedia.org/wiki/Enhanced_Data_Rates_for_GSM_Evolution" className="external">EDGE</a> networks (commonly called "2G" networks).
                        </p>

                        <h2 id="headingSpecs">Technical Specs</h2>
                        <ul>
                            <li>Battery: <Unit value={1400} unit="mA" /> @ <Unit value={3.7} unit="V" /> (<Unit value={5.18} unit="Wh" />)</li>
                            <li>Bluetooth: 2.0 + EDR</li>
                            <li>
                                Camera:
                                <ul>
                                    <li>Rear: <Unit value={1.9} unit="MP" /></li>
                                </ul>
                            </li>
                            <li>
                                Cellular Radio:
                                <ul>
                                    <li>Processor: <Link href="/baseband/pmb8876"><a>PMB8876</a></Link> (S-Gold 2)</li>
                                    <li>
                                        Supported Networks:
                                        <ul>
                                            <li>EDGE</li>
                                            <li>Quad-band GSM (850, 900, 1800, 1900 MHz)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Colors: Aluminum (gray)</li>
                            <li>
                                CPU:
                                <ul>
                                    <li>Core: <a href="https://en.wikipedia.org/wiki/ARM11" className="external">ARM1176</a>&nbsp;x1</li>
                                    <li>CPU: <Link href="/processor/s5l8900"><a>S5L8900</a></Link></li>
                                    <li>Speed: <Unit value={412} unit="MHz" /> (400 until <Link href="/iOS/1.1"><a>iPhone OS 1.1.2</a></Link>) (capable of <Unit value={620} unit="MHz" />)</li>
                                    <li>Instruction Set: ARMv6</li>
                                </ul>
                            </li>
                            <li>Dimensions: <span className="text-nowrap">4.5x2.4x0.5"</span></li>
                            <li>
                                Firmware:
                                <ul>
                                    <li>Initial: <Link href="/key/[...path]" as="/key/1A543a/iPhone1,1"><a>1.0 (1A543a)</a></Link></li>
                                    <li>Latest: <Link href="/key/[...path]" as="/key/7E18/iPhone1,1"><a>3.1.3 (7E18)</a></Link></li>
                                </ul>
                            </li>
                            <li>Internal Name: <code>iPhone1,1</code></li>
                            <li>RAM: <Unit value={128} unit="MiB" /></li>
                            <li>Screen Resolution: <Resolution diagonal={3.5} width={320} height={480} /></li>
                            {/* TODO: Find a way to use <Unit /> */}
                            <li>Storage: <Unit value={4} unit="GB" /> / <Unit value={8} unit="GB" /> / <Unit value={16} unit="GB" /></li>
                            <li>Weight: <Unit value={4.8} unit="oz" /></li>
                            <li>Wi-Fi: <WiFi standards={["b", "g"]} /></li>
                        </ul>

                        <h2 id="headingHacking">Hacking</h2>
                        <p>
                            Naturally, as a first generation device, the original iPhone is one of the more "hack-friendly" <Link href="/device"><a>iDevices</a></Link>.
                            Within two months of its release, <a href="https://www.theiphonewiki.com/wiki/User:Geohot" className="external">geohot</a> (George Hotz) "unlocked" the AT&amp;T only phone to <a href="https://www.youtube.com/watch?v=tvJ1RGlxe8Q" className="external">work on T-Mobile</a>.
                            A few months later, the <a href="https://www.theiphonewiki.com/wiki/IPhone_Dev_Team" className="external">iPhone Dev Team</a> discovered "<Link href="/jailbreak/exploit/pwnage"><a>Pwnage</a></Link>," a bootrom level <Link href="/jailbreak#headingTethered"><a><em>untethered</em></a></Link> exploit that allowed jailbreaking the device on <em>any</em> version of <Link href="/iOS"><a>iPhone OS</a></Link>.
                        </p>

                        <h2 id="headingExternalLinks">External Links</h2>
                        <ul>
                            <li><a href="https://www.ifixit.com/Teardown/iPhone+1st+Generation+Teardown/599" className="external">iFixIt Teardown</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
