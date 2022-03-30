/* =============================================================================
 * File:   index.tsx
 * Author: Cole Tobin
 * =============================================================================
 * Copyright (c) 2022 Cole Tobin
 *
 * This file is part of iDecryptIt-Web.
 *
 * iDecryptIt-Web is free software: you can redistribute it and/or modify it
 *   under the terms of the GNU Affero General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or (at your
 *   option) any later version.
 *
 * iDecryptIt-Web is distributed in the hope that it will be useful, but WITHOUT
 *   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *   FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 *   more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with iDecryptIt-Web. If not, see <http://www.gnu.org/licenses/>.
 * =============================================================================
 */

import A from "@components/A";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

function List(args: [string, string, string?][]): React.ReactElement {
    return (
        <ul>
            {args.map(([url, name, paren]) => (
                <li key={url}>
                    <A href={`/fw${url}`}>{name}</A>{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle="Firmware Files" canonical="/fw">
            <Layout.Title title="Firmware Files" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Firmware Files</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFormats" text="IPSW File Formats" />
                    <Toc.Entry href="#headingFiles" text="IPSW Files" />
                </Toc.Root>
                <p>
                    There are many different files contains in an <A href="/fw/format/ipsw">IPSW</A> firmware file.
                </p>

                <Clear />

                <h2 id="headingFormats">IPSW File Formats</h2>
                <p>
                    These are the various file formats used to store payloads inside an IPSW file.
                </p>
                {List([
                    ["/format/ipsw", "IPSW File"],
                    ["/format/dmg", "Apple Disk Image", "DMG"],
                    ["/format/plist", "Apple Property List", "PLIST"],
                    ["/format/8900", "8900"],
                    ["/format/img2", "IMG2"],
                    ["/format/img3", "IMG3"],
                    ["/format/img4", "IMG4"],
                    ["/format/iboot-image", "iBoot Image"],
                ])}

                <h2 id="headingFiles">IPSW Files</h2>
                <p>
                    Each file contained in an IPSW file has a specific purpose.
                    Some are firmwares for the various chips in the device, while others are images (&quot;glyphs&quot;).
                </p>
                {List([
                    ["/file/root-fs", "Root Filesystem"],
                    ["/file/ramdisk", "Update and Restore Ramdisks"],
                    ["/file/aci-bt-fw", "ACI Bluetooth Firmware"],
                    ["/file/aci-wifi-fw", "ACI WiFi Firmware"],
                    ["/file/adc-petra", "ADC Petra", "image signal processor"],
                    ["/file/ane", "Apple Neural Extensions"],
                    ["/file/ansf", "ANSF"], //           Copilot suggests: Apple Network Services Framework
                    ["/file/aop-fw", "\"Always On Processor\" Firmware"],
                    ["/file/apple-ave", "Apple Audio/Video Encoder"],
                    ["/file/apple-logo", "Apple Logo"],
                    ["/file/apple-maggie", "Apple Maggie", "Lattice iCE5LP4K-SWG36"],
                    ["/file/arm-fw", "ARM Firmware"],
                    ["/file/audio-codec", "Audio Codec"],
                    ["/file/audio-dsp", "Audio DSP Firmware"],
                    ["/file/battery-charging", "Battery Charging"],
                    ["/file/battery-full", "Battery Full"],
                    ["/file/battery-low", "Battery Low"],
                    ["/file/dali", "DALI"], // Copilot suggests: Digital Audio Link Interface
                    ["/file/dcp", "DCP"], // Copilot suggests: Device Configuration Profile
                    ["/file/device-tree", "Device Tree"],
                    ["/file/glyph-charging", "Glyph Charging"],
                    ["/file/glyph-plugin", "Glyph Plug-in"],
                    ["/file/haptic-assets", "Haptic Assets"],
                    ["/file/homer", "Homer Firmware"],
                    ["/file/ibec", "iBEC", "iBoot Epoch Change"],
                    ["/file/iboot", "iBoot"],
                    ["/file/iboot-data", "iBoot Data"],
                    ["/file/ibss", "iBSS", "iBoot Single Stage"],
                    ["/file/isp", "ISP"], // Copilot suggests: Image Service Provider
                    ["/file/kernelcache", "Kernelcache"],
                    ["/file/leap-haptics", "Leap Haptics"], // Copilot suggests: Leap Motion Haptics
                    ["/file/liquid-detect", "Liquid Damage Detection"],
                    ["/file/llb", "LLB", "Low Level Bootloader"],
                    ["/file/low-power-mode", "Low Power Mode"],
                    ["/file/low-power-find-my-mode", "Low Power \"Find My\" Mode"],
                    ["/file/mconnector", "M Connector"], // Copilot suggests: Mobile Connector
                    ["/file/multitouch", "Multitouch Firmware"],
                    ["/file/need-service", "Need Service"],
                    ["/file/pmp", "Power Management Processor"],
                    ["/file/rans", "RANS"], // Copilot suggests: Recovery Asset Network Service
                    ["/file/recovery-mode", "Recovery Mode"],
                    ["/file/rtp", "RTP"], // Copilot suggests: Remote Terminal Protocol
                    ["/file/sep-firmware", "Secure Enclave Processor Firmware", "SEP firmware"],
                    ["/file/smart-io-firmware", "SmartIO Firmware"],
                    ["/file/wireless-power", "Wireless Charging Controller"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
