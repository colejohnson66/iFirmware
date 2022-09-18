/* =============================================================================
 * File:   type.tsx
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
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import HexView from "@components/HexView";
import HexViewDetailTable from "@components/HexViewDetailTable";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle={<>Tag: <code>TYPE</code></>} canonical="/fw/format/tags/type">
            <Layout.Title title="Tag: TYPE" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/fw/format/tags">Tags</Breadcrumb.Item>
                <Breadcrumb.Item><code>TYPE</code></Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingTagFormat" text="Tag Format">
                        <Toc.Entry href="#headingTagFormatImg3" text="IMG3" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingExample" text="Example Tag" />
                    <Toc.Entry href="#headingKnownValues" text="Known Values" />
                </Toc.Root>
                <p>
                    The <code>TYPE</code>  tag is a four byte little endian string that states what type of firmare image the payload is.
                </p>

                <Clear />

                <h2 id="headingTagFormat">Tag Format</h2>

                <h3 id="headingTagFormatImg3">IMG3</h3>
                <pre>{`Img3TypeTag {
   0  u32   magic     // 'EPYT' ('TYPE' in little endian)
   4  u32   fullSize  // including header and padding
   8  u32   size      // including padding
   C  u32   value
  10  u8[]  padding   // optional
}`}</pre>

                <h2 id="headingExample">Example Tag</h2>
                <p>
                    The following tag is from the <A href="/fw/file/apple-logo">AppleLogo</A> payload from the <A href="/key/iPad3,6/14A403">10.0.1 (build 14A403) build for the iPad 4 (<code>iPhone3,6</code>)</A>.
                </p>
                <HexView initialOffset={0x14} size={0x20} chunks={[
                    [
                        "h0 45 50 59 54",
                        "20 00 00 00",
                        "04 00 00 00",
                    ],
                    [
                        "h1 6F 67 6F 6C",
                        "00 00 00 00 00 00 00 00 00 00 00 00",
                    ],
                    ["00 00 00 00"],
                ]} />
                <HexViewDetailTable entries={[
                    [0x14, 4, <><code>magic</code>: When interpreted in little endian order, these bytes give the string, <code>TYPE</code>.</>, 0],
                    [0x18, 4, <><code>fullSize</code>: This tag is 0x20 (32) bytes long.</>],
                    [0x1C, 4, <><code>size</code>: The actual payload (including padding) is 4 bytes long.</>],
                    [0x20, 4, <><code>value</code>: The actual value of the tag.
                        When interpreted in little endian order, this gives the ASCII string <code>LOGO</code> (indicating that it&apos;s an <A href="/fw/file/apple-logo">AppleLogo</A> file).</>, 1],
                    [0x24, 16, <><code>padding</code></>],
                ]} />

                <h2 id="headingKnownValues">Known Values</h2>
                <p>
                    The <code>value</code> (located at relative offset <code>0xC</code>) specifies what payload is contained in this file.
                    It is stored in little endian form, but presented in big endian;
                    Reverse the four bytes to get the stored form.
                    These are the known possible values, sorted by <code>value</code>:
                </p>
                <ul>
                    <li><code>0x00</code> (four null bytes): Anything (<em>any</em> image type)</li>
                    <li><code>acfw</code>: Audio Codec Firmware</li>
                    <li><code>acib</code>: <A href="/fw/file/aci-bt-fw">ACI Bluetooth Firmware</A></li>
                    <li><code>aciw</code>: <A href="/fw/file/aci-wifi-fw">ACI Wi-Fi Firmware</A></li>
                    <li><code>almo</code>: Alamo</li>
                    <li><code>anef</code>: <A href="/fw/file/ane">Apple Neural Engine</A></li>
                    <li><code>ansf</code>: <A href="/fw/file/ansf">ANSF</A></li>
                    <li><code>aopf</code>: <A href="/fw/file/aop-fw">&quot;Always On Processor&quot; Firmware</A></li>
                    <li><code>auac</code>: Accessibility Chime</li>
                    <li><code>aubt</code>: Boot Chime</li>
                    <li><code>aupr</code>: Attach Chime</li>
                    <li><code>auxk</code>: Auxiliary <A href="/fw/file/kernelcache">Kernelcache</A></li>
                    <li><code>avef</code>: <A href="/fw/file/apple-ave">Apple Audio/Video Encoder</A></li>
                    <li><code>bat0</code>: <A href="/fw/file/battery-low">BatteryLow0</A></li>
                    <li><code>bat1</code>: <A href="/fw/file/battery-low">BatteryLow1</A></li>
                    <li><code>batF</code>: <A href="/fw/file/battery-full">BatteryFull</A></li>
                    <li><code>bstc</code>: Base System TrustCache</li>
                    <li><code>cfel</code>: CFE Loader</li>
                    <li><code>cgh0</code>: <A href="/fw/file/battery-charging">BatteryCharging0</A></li>
                    <li><code>chg1</code>: <A href="/fw/file/battery-charging">BatteryCharging1</A></li>
                    <li><code>ciof</code></li>
                    <li><code>csys</code>: Base System Volume Root Hash</li>
                    <li><code>daig</code>: Diags</li>
                    <li><code>dali</code>: <A href="/fw/file/dali">DALI</A></li>
                    <li><code>dcpf</code></li>
                    <li><code>dtre</code>: <A href="/fw/file/device-tree">DeviceTree</A></li>
                    <li><code>dtrs</code>: EngineeringTrustCache</li>
                    <li><code>fdrs</code>: FDR Trust Object for SEP</li>
                    <li><code>fdrt</code>: FDR Trust Object for AP</li>
                    <li><code>gfxf</code>: Graphics (GFX) Firmware</li>
                    <li><code>glyC</code>: <A href="/fw/file/glyph-charging">GlyphCharging</A></li>
                    <li><code>glyP</code>: <A href="/fw/file/glyph-plugin">GlyphPlugin</A></li>
                    <li><code>hmmr</code>: PE Hammer</li>
                    <li><code>homr</code>: <A href="/fw/file/homer">Homer Firmware</A></li>
                    <li><code>hypr</code>: Hypervisor</li>
                    <li><code>ibdt</code>: <A href="/fw/file/iboot-data">iBoot Data</A></li>
                    <li><code>ibec</code>: <A href="/fw/file/ibec">iBoot Epoch Change</A> (iBEC)</li>
                    <li><code>ibot</code>: <A href="/fw/file/iboot">iBoot stage 2</A></li>
                    <li><code>ibss</code>: <A href="/fw/file/ibss">iBoot Single Stage</A> (iBSS)</li>
                    <li><code>ienv</code>: Environment Variables</li>
                    <li><code>illb</code>: <A href="/fw/file/llb">Low Level Bootloader</A> (LLB; iBoot stage 1)</li>
                    <li><code>ipdf</code>: Input Device</li>
                    <li><code>ispf</code>: <A href="/fw/file/isp">ISP Firmware</A></li>
                    <li><code>isys</code>: System Volume Root Hash</li>
                    <li><code>itst</code>: iBootTest</li>
                    <li><code>krnl</code>: <A href="/fw/file/kernelcache">Kernelcache</A></li>
                    <li><code>lckr</code>: System Locker</li>
                    <li><code>logo</code>: <A href="/fw/file/apple-logo">AppleLogo</A></li>
                    <li><code>lphp</code>: <A href="/fw/file/leap-haptics">Leap Haptics</A></li>
                    <li><code>lpol</code></li>
                    <li><code>lpw0</code>: LowPowerWallet0</li>
                    <li><code>lpw1</code>: LowPowerWallet1</li>
                    <li><code>lpw2</code>: LowPowerWallet2</li>
                    <li><code>ltrs</code>: LoadableTrustCache</li>
                    <li><code>magg</code>: <A href="/fw/file/apple-maggie">Apple Maggie</A> (vibration motor controller)</li>
                    <li><code>mefi</code>: Mac EFI</li>
                    <li><code>msys</code>: System Volume Canonical Metadata</li>
                    <li><code>mtfw</code>: <A href="/fw/file/multitouch">Multitouch Firmware</A></li>
                    <li><code>nsrv</code>: <A href="/fw/file/need-service">NeedService</A></li>
                    <li><code>nsrv</code></li>
                    <li><code>osrd</code>: <A href="/fw/file/ramdisk">OS Ramdisk</A></li>
                    <li><code>pdmg</code>: Personalized DMG</li>
                    <li><code>pert</code>: PERT OS</li>
                    <li><code>phlt</code>: PHLEET</li>
                    <li><code>pmpf</code>: <A href="/fw/file/pmp">Power Management Processor</A> (PMP)</li>
                    <li><code>rans</code>: <A href="/fw/file/rans">RANS</A></li>
                    <li><code>rbmt</code>: RBM</li>
                    <li><code>rcio</code></li>
                    <li><code>rdcp</code></li>
                    <li><code>rdsk</code>: <A href="/fw/file/ramdisk">Restore Ramdisk</A></li>
                    <li><code>rdtr</code>: Restore <A href="/fw/file/device-tree">DeviceTree</A></li>
                    <li><code>recm</code>: <A href="/fw/file/recovery-mode">RecoveryMode</A></li>
                    <li><code>rkrn</code>: Restore <A href="/fw/file/kernelcache">Kernelcache</A></li>
                    <li><code>rlgo</code>: Restore <A href="/fw/file/apple-logo">AppleLogo</A></li>
                    <li><code>rosi</code>: Restore OS</li>
                    <li><code>rpmp</code></li>
                    <li><code>rsep</code>: Restore <A href="/fw/file/sep-firmware">SEP Firmware</A> (secure enclave processor)</li>
                    <li><code>rtmu</code></li>
                    <li><code>rtpf</code>: <A href="/fw/file/rtp">RTP</A></li>
                    <li><code>rtsc</code>: Restore TrustCache</li>
                    <li><code>scef</code>: SCE</li>
                    <li><code>sepi</code>: <A href="/fw/file/sep-firmware">SEP Firmware</A> (secure enclave processor)</li>
                    <li><code>siof</code>: <A href="/fw/file/smart-io-fw">SmartIO Firmware</A></li>
                    <li><code>tmuf</code></li>
                    <li><code>trst</code>: TrustCache</li>
                    <li><code>tsys</code>: TSYS Tester</li>
                    <li><code>wchf</code>: <A href="/fw/file/wireless-power">Wireless Charging Controller</A></li>
                    <li><code>xbtc</code>: x86 Base System TrustCache</li>
                    <li><code>xsys</code>: x86 System Volume Root Hash</li>
                    {/* xsys is also claimed to be "x86 System Volume Canonical Metadata" */}
                </ul>
            </Layout.Content>
        </Layout.Root>
    );
}
