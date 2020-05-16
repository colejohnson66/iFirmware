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
        <Layout navGroup="file" title="IPSW">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>IPSW</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFormat" text="Format" />
                            <TOC.Entry href="#headingExampleNew" text="Example Newer IPSW" />
                            <TOC.Entry href="#headingExampleOld" text="Example Older IPSW" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>IPSW</h1>
                        <p>
                            Originally standing for "<b>iP</b>od <b>S</b>oft<b>w</b>are," IPSW files are the core of the <Link href="/device"><a>iDevice</a></Link> update/restore system.
                            While existing since the second generation <a href="https://en.wikipedia.org/wiki/IPod_Classic" className="external">iPod Classic</a>, the internal structure is different.
                        </p>

                        <h2 id="headingFormat">Format</h2>
                        <p>
                            IPSW files, at least for iDevices, are simply renamed <a href="https://en.wikipedia.org/wiki/Zip_(file_format)" className="external">ZIP</a> files.
                            As such, they can be opened using any ZIP program (some may require the extension to be changed to <code>.zip</code> first).
                        </p>
                        <p>
                            IPSW files follow a very structured format.
                            The root filesystem, ramdisks, kernelcache, and manifests are in the root directory, while everything else is underneath the <code>Firmware</code> folder.
                        </p>

                        <h2 id="headingExampleNew">Example Newer IPSW</h2>
                        <p>
                            Here is the internal structure of the IPSW for the <Link href="/key/[...path]" as="/key/16A366/iPhone11,8"><a>12.0 (build <code>16A366</code>) build for the iPhone XR (<code>iPhone11,8</code>)</a></Link>:
                        </p>
                        <ul>
                            <li><Link href="/file/rootFS"><a><code>048-10776-223.dmg</code></a></Link> (root filesystem)</li>
                            <li><Link href="/file/updateRamdisk"><a><code>048-43107-180.dmg</code></a></Link> (update ramdisk)</li>
                            <li><Link href="/file/updateRamdisk"><a><code>048-42497-181.dmg</code></a></Link> (restore ramdisk)</li>
                            <li><Link href="/file/buildManifest"><a><code>BuildManifest.plist</code></a></Link></li>
                            <li><Link href="/file/kernelcache"><a><code>kernelcache.release.iphone11b</code></a></Link></li>
                            <li><Link href="/file/restore"><a><code>Restore.plist</code></a></Link></li>
                            <li>
                                <code>Firmware</code>
                                <ul>
                                    <li><code>048-10776-223.dmg.trustcache</code></li>
                                    <li><code>048-15811-206.dmg.trustcache</code></li>
                                    <li><code>048-16246-204.dmg.trustcache</code></li>
                                    <li><Link href="/baseband/pmb9955/[version]" as="/baseband/pmg9955/1.00.07"><a><code>ICE18-1.00.07.Release.bbfw</code></a></Link></li>
                                    <li><code>ICE18-1.00.07.Release.bbfw.plist</code></li>
                                    <li><Link href="/file/callanFirmware"><a><code>N841_CallanFirmware.im4p</code></a></Link></li>
                                    <li><Link href="/file/multitouch"><a><code>N841_Multitouch.im4p</code></a></Link></li>
                                    <li><Link href="/file/smartIOFirmware"><a><code>SmartIOFirmwareT8020.im4p</code></a></Link></li>
                                    <li><Link href="/file/vinyl"><a><code>vinyl_05.vnlfw</code></a></Link></li>
                                    <li><code>vinyl_05.plist</code></li>
                                    <li>
                                        <code>agx</code>
                                        <ul>
                                            <li><Link href="/file/armFW"><a><code>armfw_g11p.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>all_flash</code>
                                        <ul>
                                            <li><Link href="/file/appleLogo"><a><code>applelogo@1792~iphone.im4p</code></a></Link></li>
                                            <li><Link href="/file/batteryCharging0"><a><code>batterycharging0@1792~iphone.im4p</code></a></Link></li>
                                            <li><Link href="/file/batteryCharging1"><a><code>batterycharging1@1792~iphone.im4p</code></a></Link></li>
                                            <li><Link href="/file/batteryFull"><a><code>batteryfull@2x~iphone.im4p</code></a></Link></li>
                                            <li><Link href="/file/batteryLow0"><a><code>batterylow0@2x~iphone.im4p</code></a></Link></li>
                                            <li><Link href="/file/batteryLow1"><a><code>batterylow1@2x~iphone.im4p</code></a></Link></li>
                                            <li><Link href="/file/deviceTree"><a><code>DeviceTree.n841ap.im4p</code></a></Link></li>
                                            <li><code>DeviceTree.n841ap.im4p.plist</code></li>
                                            <li><Link href="/file/glyphPlugin"><a><code>glyphplugin@1792~iphone-lightning.im4p</code></a></Link></li>
                                            <li><Link href="/file/iBoot"><a><code>iBoot.n841.RELEASE.im4p</code></a></Link></li>
                                            <li><code>iBoot.n841.RELEASE.im4p.plist</code></li>
                                            <li><Link href="/file/llb"><a><code>LLB.n841.RELEASE.im4p</code></a></Link></li>
                                            <li><code>LLB.n841.RELEASE.im4p.plist</code></li>
                                            <li><Link href="/file/lowPowerMode"><a><code>lowpowermode@1792~iphone-lightning.im4p</code></a></Link></li>
                                            <li><Link href="/file/recoveryMode"><a><code>recoverymode@1792~iphone-lightning.im4p</code></a></Link></li>
                                            <li><Link href="/file/sepFirmware"><a><code>sep-firmware.n841.RELEASE.im4p</code></a></Link></li>
                                            <li><code>sep-firmware.n841.RELEASE.im4p.plist</code></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>ane</code>
                                        <ul>
                                            <li><Link href="/file/ane"><a><code>h11_ane_fw_quin.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>AOP</code>
                                        <ul>
                                            <li><Link href="/file/aopFirmware"><a><code>aopfw-iphone11baop.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>ave</code>
                                        <ul>
                                            <li><Link href="/file/appleAve"><a><code>AppleAVE2FW.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>dfu</code>
                                        <ul>
                                            <li><Link href="/file/iBec"><a><code>iBEC.n841.RELEASE.im4p</code></a></Link></li>
                                            <li><code>iBEC.n841.RELEASE.im4p.plist</code></li>
                                            <li><Link href="/file/iBss"><a><code>iBSS.n841.RELEASE.im4p</code></a></Link></li>
                                            <li><code>iBSS.n841.RELEASE.im4p.plist</code></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>isp</code>
                                        <ul>
                                            <li><Link href="/file/adcPetra"><a><code>adc-petra-n84.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>Maggie</code>
                                        <ul>
                                            <li><Link href="/file/appleMaggie"><a><code>AppleMaggieFirmwareImage.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/file/savage"><a><code>Savage</code></a></Link>
                                        <ul>
                                            <li><code>Savage.B0-Dev.fw</code></li>
                                            <li><code>Savage.B0-Dev.fw.plist</code></li>
                                            <li><code>Savage.B0-Dev.vt.fw</code></li>
                                            <li><code>Savage.B0-Dev.vt.fw.plist</code></li>
                                            <li><code>Savage.B0-Prod.fw</code></li>
                                            <li><code>Savage.B0-Prod.fw.plist</code></li>
                                            <li><code>Savage.B0-Prod.vt.fw</code></li>
                                            <li><code>Savage.B0-Prod.vt.fw.plist</code></li>
                                            <li><code>Savage.B2-Dev.fw</code></li>
                                            <li><code>Savage.B2-Dev.fw.plist</code></li>
                                            <li><code>Savage.B2-Dev.vt.fw</code></li>
                                            <li><code>Savage.B2-Dev.vt.fw.plist</code></li>
                                            <li><code>Savage.B2-Prod.fw</code></li>
                                            <li><code>Savage.B2-Prod.fw.plist</code></li>
                                            <li><code>Savage.B2-Prod.vt.fw</code></li>
                                            <li><code>Savage.B2-Prod.vt.fw.plist</code></li>
                                            <li><code>Savage.BA-Dev.fw</code></li>
                                            <li><code>Savage.BA-Dev.fw.plist</code></li>
                                            <li><code>Savage.BA-Prod.fw</code></li>
                                            <li><code>Savage.BA-Prod.fw.plist</code></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>Stockholm</code>
                                        <ul>
                                            <li><Link href="/file/stockholm"><a><code>Stockholm5.RELEASE.sefw</code></a></Link></li>
                                            <li><code>Stockholm5.RELEASE.sefw.plist</code></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>usr</code>
                                        <ul>
                                            <li><code>local</code> (empty folder)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>WirelessPower</code>
                                        <ul>
                                            <li><Link href="/file/wirelessPower"><a><code>WirelessPower.iphone11b.im4p</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/file/yonkers"><a><code>Yonkers</code></a></Link>
                                        <ul>
                                            <li><code>Yonkers.1A01_2A01_2201_3201_Dev.fw</code></li>
                                            <li><code>Yonkers.1A01_2A01_2201_3201_Dev.fw.plist</code></li>
                                            <li><code>Yonkers.1A01_2A01_2201_3201_Prod.fw</code></li>
                                            <li><code>Yonkers.1A01_2A01_2201_3201_Prod.fw.plist</code></li>
                                            <li><code>Yonkers.EA01_F201_Dev.fw</code></li>
                                            <li><code>Yonkers.EA01_F201_Dev.fw.plist</code></li>
                                            <li><code>Yonkers.EA01_F201_Prod.fw</code></li>
                                            <li><code>Yonkers.EA01_F201_Prod.fw.plist</code></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <h2 id="headingExampleOld">Example Older IPSW</h2>
                        <p>
                            Here is the internal structure of the IPSW for the <Link href="/key/[...path]" as="/key/5A347/iPhone1,1"><a>2.0 (build <code>5A347</code>) build for the original iPhone (<code>iPhone1,1</code>)</a></Link>.
                            Note how fewer files there are:
                        </p>
                        <ul>
                            <li><Link href="/file/rootFS"><a><code>018-3785-2.dmg</code></a></Link> (root filesystem)</li>
                            <li><Link href="/file/restoreRamdisk"><a><code>018-3786-2.dmg</code></a></Link> (restore ramdisk)</li>
                            <li><Link href="/file/kernelcache"><a><code>kernelcache.release.s5l8900x</code></a></Link></li>
                            <li><Link href="/file/restore"><a><code>Restore.plist</code></a></Link></li>
                            <li>
                                <code>Firmware</code>
                                <ul>
                                    <li>
                                        <code>all_flash</code>
                                        <ul>
                                            <li><Link href="/file/appleLogo"><a><code>applelogo.s5l8900x.img3</code></a></Link></li>
                                            <li><Link href="/file/batteryLow0"><a><code>batterylow0.s5l8900x.img3</code></a></Link></li>
                                            <li><Link href="/file/batteryLow1"><a><code>batterylow1.s5l8900x.img3</code></a></Link></li>
                                            <li><Link href="/file/deviceTree"><a><code>DeviceTree.m68ap.img3</code></a></Link></li>
                                            <li><Link href="/file/glyphCharging"><a><code>glyphcharging.s5l8900x.img3</code></a></Link></li>
                                            <li><Link href="/file/glyphPlugin"><a><code>glyphplugin.s5l8900x.img3</code></a></Link></li>
                                            <li><Link href="/file/iBoot"><a><code>iBoot.m68ap.RELEASE.img3</code></a></Link></li>
                                            <li><Link href="/file/llb"><a><code>LLB.m68ap.RELEASE.img3</code></a></Link></li>
                                            <li><code>manifest</code></li>
                                            <li><Link href="/file/needService"><a><code>needservice.s5l8900x.img3</code></a></Link></li>
                                            <li><Link href="/file/recoveryMode"><a><code>recoverymode.s5l8900x.img3</code></a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>dfu</code>
                                        <ul>
                                            <li><Link href="/file/iBec"><a><code>iBEC.m68ap.RELEASE.dfu</code></a></Link></li>
                                            <li><Link href="/file/iBss"><a><code>iBSS.m68ap.RELEASE.dfu</code></a></Link></li>
                                            <li><Link href="/file/wtf"><a><code>WTF.m68ap.RELEASE.dfu</code></a></Link></li>
                                            <li><code>WTF.s5l8900xall.RELEASE.dfu</code></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
