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
        <Layout navGroup="file" title="Firmware Files">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Firmware Files</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFiles" text="List of IPSW Files" />
                            <TOC.Entry href="#headingFormats" text="List of IPSW File Formats" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Firmware Files</h1>
                        <p>
                            There are many different files contained in an <Link href="/file/format/ipsw"><a>IPSW</a></Link> firmware file.
                            These files also come in a variety of formats.
                        </p>

                        <h2 id="headingFiles">List of IPSW Files</h2>
                        <p>
                            The files contained in an IPSW all have a specific purpose.
                            Some are firmware files for the various chips in the device, while others are boot images.
                        </p>
                        <ul>
                            <li><Link href="/file/rootFS"><a>Root Filesystem</a></Link> (commonly referred to as the "Root FS")</li>
                            <li><Link href="/file/updateRamdisk"><a>Update Ramdisk</a></Link></li>
                            <li><Link href="/file/restoreRamdisk"><a>Restore Ramdisk</a></Link></li>
                            <li><Link href="/file/adcPetra"><a>ADC Petra</a></Link></li>
                            <li><Link href="/file/aopFirmware"><a>AOP Firmware</a></Link></li>
                            <li><Link href="/file/appleAve"><a>Apple AVE</a></Link></li>
                            <li><Link href="/file/ane"><a>ANE</a></Link></li>
                            <li><Link href="/file/appleLogo"><a>Apple Logo Image</a></Link> (AppleLogo)</li>
                            <li><Link href="/file/appleMaggie"><a>Apple Maggie</a></Link></li>
                            <li><Link href="/file/armFW"><a>ARM Firmware</a></Link></li>
                            <li><Link href="/file/audioDsp"><a>Audio DSP</a></Link></li>
                            <li><Link href="/file/batteryCharging"><a>Battery Charging Image</a></Link> (BatteryCharging; used in older firmwares)</li>
                            <li><Link href="/file/batteryCharging0"><a>Battery Charging Image 0</a></Link> (BatteryCharging0)</li>
                            <li><Link href="/file/batteryCharging1"><a>Battery Charging Image 1</a></Link> (BatteryCharging1)</li>
                            <li><Link href="/file/batteryFull"><a>Battery Full Image</a></Link> (BatteryFull)</li>
                            <li><Link href="/file/batteryLow0"><a>Battery Low Image 0</a></Link> (BatteryLow0)</li>
                            <li><Link href="/file/batteryLow1"><a>Battery Low Image 1</a></Link> (BatteryLow1)</li>
                            <li><Link href="/file/callanFirmware"><a>Callan Firmware</a></Link></li>
                            <li><Link href="/file/dali"><a>Dali Firmware</a></Link></li>
                            <li><Link href="/file/deviceTree"><a>DeviceTree</a></Link></li>
                            <li><Link href="/file/glyphCharging"><a>Charging Glyph</a></Link> (GlyphCharging)</li>
                            <li><Link href="/file/glyphPlugin"><a>Plugin Device Glyph</a></Link> (GlyphPlugin)</li>
                            <li><Link href="/file/homer"><a>Homer Firmware</a></Link></li>
                            <li><Link href="/file/iBec"><a>iBoot Epoch Change</a></Link> (iBEC)</li>
                            <li><Link href="/file/iBoot"><a>iBoot</a></Link></li>
                            <li><Link href="/file/iBss"><a>iBoot Single Stage</a></Link> (iBSS)</li>
                            <li><Link href="/file/kernelcache"><a>Kernelcache</a></Link></li>
                            <li><Link href="/file/liquidDetect"><a>LiquidDetect</a></Link></li>
                            <li><Link href="/file/llb"><a>Low Level Bootloader</a></Link> (LLB)</li>
                            <li><Link href="/file/lowPowerMode"><a>LowPowerMode</a></Link></li>
                            <li><Link href="/file/multitouch"><a>Multitouch Firmware</a></Link></li>
                            <li><Link href="/file/needService"><a>Need Service</a></Link></li>
                            <li><Link href="/file/recoveryMode"><a>Recovery Mode Firmware</a></Link></li>
                            <li><Link href="/file/sepFirmware"><a>Secure Enclave Processor Firmware</a></Link> (SEP Firmware)</li>
                            <li><Link href="/file/smartIOFirmware"><a>SmartIO Firmware</a></Link></li>
                            <li><Link href="/file/wirelessPower"><a>Wireless Power</a></Link></li>
                            <li><Link href="/file/wtf"><a>What's the Firmware</a></Link> (WTF)</li>
                        </ul>
                        <p>
                            There also exist a few special files containing manifest information among other things:
                        </p>
                        <ul>
                            <li><Link href="/file/buildManifest"><a>BuildManifest.plist</a></Link></li>
                            <li><Link href="/file/restore"><a>Restore.plist</a></Link></li>
                            <li><Link href="/file/trustcache"><a>*.trustcache files</a></Link></li>
                        </ul>

                        <h2 id="headingFormats">List of IPSW File Formats</h2>
                        <ul>
                            <li><Link href="/file/format/ipsw"><a>IPSW</a></Link></li>
                            <li><Link href="/file/format/dmg"><a>Apple Disk Image</a></Link> (DMG)</li>
                            <li><Link href="/file/format/plist"><a>Property List</a></Link> (PLIST)</li>
                            <li><Link href="/file/format/8900"><a>8900</a></Link></li>
                            <li><Link href="/file/format/img2"><a>IMG2</a></Link></li>
                            <li><Link href="/file/format/img3"><a>IMG3</a></Link></li>
                            <li><Link href="/file/format/img4"><a>IMG4</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
