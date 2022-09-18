/* =============================================================================
 * File:   ipsw.tsx
 * Author: Cole Tobin
 * =============================================================================
 * Copyright (c) 2022 Cole Tobin
 *
 * This file is part of iFirmware.
 *
 * iFirmware is free software: you can redistribute it and/or modify it under
 *   the terms of the GNU Affero General Public License as published by the Free
 *   Software Foundation, either version 3 of the License, or (at your option)
 *   any later version.
 *
 * iFirmware is distributed in the hope that it will be useful, but WITHOUT ANY
 *   WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 *   FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License more
 *   details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with iFirmware. If not, see <http://www.gnu.org/licenses/>.
 * =============================================================================
 */

import A from "@components/A";
import AShort from "@components/AShort";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle="IPSW" canonical="/fw/format/ipsw">
            <Layout.Title title="IPSW" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="#">Stub</Breadcrumb.Item>
                <Breadcrumb.Item>IPSW</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFormat" text="Format" />
                    <Toc.Entry href="#headingExample" text="Examples">
                        <Toc.Entry href="#headingExampleNew" text="Newer IPSW" />
                        <Toc.Entry href="#headingExampleOld" text="Older IPSW" />
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    IPSW files are the core of the <A href="/device">iDevice</A> update/restore system, next to <A href="/ota">OTA updates</A>.
                    An abbreviation of &quot;<b>iP</b>od <b>S</b>oft<b>w</b>are,&quot; IPSW files are, despite their name, for more than just iPods.
                    Also, despite existing since the second generation <AShort to="wp" title="iPod_Classic">iPod Classic</AShort>, the internal structure of IPSW files for iDevices is <em>very</em> different from those for &quot;legacy&quot; iPods.
                </p>

                <Clear />

                <h2 id="headingFormat">Format</h2>
                <p>
                    IPSW files, at least for iDevices, are nothing more than renamed <AShort to="wp" title="Zip_(file_format)">ZIP</AShort> files.
                    As such, they can be opened using any ZIP program, but some may require the extension to be changed to <code>.zip</code> first.
                </p>
                <p>
                    The files follow a very structured format;
                    The root filesystem, ramdisks, kernelcache, and manifests are in the root directory, while everything else is underneath the <code>Firmware</code> folder.
                </p>

                <h2 id="headingExample">Examples</h2>
                <p>
                    Following are two IPSW files, <A href="#headingExampleNew">the former</A> being from iOS 12.0 (build <code>16A366</code> for the iPhone XR, and the latter being from iPhone OS 2.0 (build <code>5A347</code>) for the original iPhone.
                </p>



                <h3 id="headingExampleNew">Newer IPSW</h3>
                <p>
                    This is the internal structure of the IPSW for the <A href="/key/iPhone11,8/16A366">12.0 (build <code>16A366</code>) build for the iPhone XR (<code>iPhone11,8</code>)</A>.
                </p>
                <ul>
                    {/* TODO: create a <DirectoryTree> component */}
                    <li><A href="/fw/file/root-fs"><code>048-10776-223.dmg</code></A> (root filesystem)</li>
                    <li><A href="/fw/file/ramdisk"><code>048-43107-180.dmg</code></A> (update ramdisk)</li>
                    <li><A href="/fw/file/ramdisk"><code>048-42497-181.dmg</code></A> (restore ramdisk)</li>
                    <li><code>BuildManifest.plist</code></li>
                    <li><A href="/fw/file/kernelcache"><code>kernelcache.release.iphone11b</code></A></li>
                    <li><code>Restore.plist</code></li>
                    <li>
                        <code>Firmware</code>
                        <ul>
                            <li><code>048-10776-223.dmg.trustcache</code></li>
                            <li><code>048-15811-206.dmg.trustcache</code></li>
                            <li><code>048-16246-204.dmg.trustcache</code></li>
                            <li><A href="/baseband/pmb9955"><code>ICE18-1.00.07.Release.bbfw</code></A></li>
                            <li><code>ICE18-1.00.07.Release.bbfw.plist</code></li>
                            <li><code>N841_CallanFirmware.im4p</code></li>
                            <li><A href="/file/multitouch"><code>N841_Multitouch.im4p</code></A></li>
                            <li><A href="/file/smart-io-firmware"><code>SmartIOFirmwareT8020.im4p</code></A></li>
                            <li><code>vinyl_05.vnlfw</code></li>
                            <li><code>vinyl_05.plist</code></li>
                            <li>
                                <code>agx</code>
                                <ul>
                                    <li><A href="/file/arm-fw"><code>armfw_g11p.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>all_flash</code>
                                <ul>
                                    <li><A href="/fw/file/appleLogo"><code>applelogo@1792~iphone.im4p</code></A></li>
                                    <li><A href="/fw/file/battery-charging"><code>batterycharging0@1792~iphone.im4p</code></A></li>
                                    <li><A href="/fw/file/battery-charging"><code>batterycharging1@1792~iphone.im4p</code></A></li>
                                    <li><A href="/fw/file/batteryFull"><code>batteryfull@2x~iphone.im4p</code></A></li>
                                    <li><A href="/fw/file/battery-low"><code>batterylow0@2x~iphone.im4p</code></A></li>
                                    <li><A href="/fw/file/battery-low"><code>batterylow1@2x~iphone.im4p</code></A></li>
                                    <li><A href="/fw/file/device-tree"><code>DeviceTree.n841ap.im4p</code></A></li>
                                    <li><code>DeviceTree.n841ap.im4p.plist</code></li>
                                    <li><A href="/fw/file/glyph-plugin"><code>glyphplugin@1792~iphone-lightning.im4p</code></A></li>
                                    <li><A href="/fw/file/iboot"><code>iBoot.n841.RELEASE.im4p</code></A></li>
                                    <li><code>iBoot.n841.RELEASE.im4p.plist</code></li>
                                    <li><A href="/fw/file/llb"><code>LLB.n841.RELEASE.im4p</code></A></li>
                                    <li><code>LLB.n841.RELEASE.im4p.plist</code></li>
                                    <li><A href="/fw/file/low-power-mode"><code>lowpowermode@1792~iphone-lightning.im4p</code></A></li>
                                    <li><A href="/fw/file/recovery-mode"><code>recoverymode@1792~iphone-lightning.im4p</code></A></li>
                                    <li><A href="/fw/file/sep-firmware"><code>sep-firmware.n841.RELEASE.im4p</code></A></li>
                                    <li><code>sep-firmware.n841.RELEASE.im4p.plist</code></li>
                                </ul>
                            </li>
                            <li>
                                <code>ane</code>
                                <ul>
                                    <li><A href="/fw/file/ane"><code>h11_ane_fw_quin.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>AOP</code>
                                <ul>
                                    <li><A href="/fw/file/aop-fw"><code>aopfw-iphone11baop.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>ave</code>
                                <ul>
                                    <li><A href="/fw/file/apple-ave"><code>AppleAVE2FW.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>dfu</code>
                                <ul>
                                    <li><A href="/fw/file/ibec"><code>iBEC.n841.RELEASE.im4p</code></A></li>
                                    <li><code>iBEC.n841.RELEASE.im4p.plist</code></li>
                                    <li><A href="/fw/file/ibss"><code>iBSS.n841.RELEASE.im4p</code></A></li>
                                    <li><code>iBSS.n841.RELEASE.im4p.plist</code></li>
                                </ul>
                            </li>
                            <li>
                                <code>isp</code>
                                <ul>
                                    <li><A href="/file/adc-petra"><code>adc-petra-n84.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>Maggie</code>
                                <ul>
                                    <li><A href="/file/apple-maggie"><code>AppleMaggieFirmwareImage.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>Savage</code>
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
                                    <li><code>Stockholm5.RELEASE.sefw</code></li>
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
                                    <li><A href="/file/wireless-power"><code>WirelessPower.iphone11b.im4p</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>Yonkers</code>
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

                <h2 id="headingExampleOld">Older IPSW</h2>
                <p>
                    Here is the internal structure of the IPSW for the <A href="/key/iPhone1,1/5A347">2.0 (build <code>5A347</code>) build for the original iPhone (<code>iPhone1,1</code>)</A>.
                    Note how fewer files there are compared to the <A href="#headingExampleNew">newer one</A>.
                </p>
                <ul>
                    {/* TODO: create a <DirectoryTree> component */}
                    <li><A href="/file/root-fs"><code>018-3785-2.dmg</code></A> (root filesystem)</li>
                    <li><A href="/file/ramdisk"><code>018-3786-2.dmg</code></A> (restore ramdisk)</li>
                    <li><A href="/file/kernelcache"><code>kernelcache.release.s5l8900x</code></A></li>
                    <li><code>Restore.plist</code></li>
                    <li>
                        <code>Firmware</code>
                        <ul>
                            <li>
                                <code>all_flash</code>
                                <ul>
                                    <li><A href="/file/apple-logo"><code>applelogo.s5l8900x.img3</code></A></li>
                                    <li><A href="/file/battery-low"><code>batterylow0.s5l8900x.img3</code></A></li>
                                    <li><A href="/file/battery-low"><code>batterylow1.s5l8900x.img3</code></A></li>
                                    <li><A href="/file/device-tree"><code>DeviceTree.m68ap.img3</code></A></li>
                                    <li><A href="/file/glyph-charging"><code>glyphcharging.s5l8900x.img3</code></A></li>
                                    <li><A href="/file/glyph-plugin"><code>glyphplugin.s5l8900x.img3</code></A></li>
                                    <li><A href="/file/iboot"><code>iBoot.m68ap.RELEASE.img3</code></A></li>
                                    <li><A href="/file/llb"><code>LLB.m68ap.RELEASE.img3</code></A></li>
                                    <li><code>manifest</code></li>
                                    <li><A href="/file/need-service"><code>needservice.s5l8900x.img3</code></A></li>
                                    <li><A href="/file/recovery-mode"><code>recoverymode.s5l8900x.img3</code></A></li>
                                </ul>
                            </li>
                            <li>
                                <code>dfu</code>
                                <ul>
                                    <li><A href="/file/ibec"><code>iBEC.m68ap.RELEASE.dfu</code></A></li>
                                    <li><A href="/file/ibss"><code>iBSS.m68ap.RELEASE.dfu</code></A></li>
                                    <li><A href="/file/wtf"><code>WTF.m68ap.RELEASE.dfu</code></A></li>
                                    <li><code>WTF.s5l8900xall.RELEASE.dfu</code></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
