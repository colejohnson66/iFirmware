/* =============================================================================
 * File:   [build].tsx
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

import { FirmwareItem, FirmwareItemType, KeyPage, ReadHasKeys, ReadKeyBundle } from "@library/KeyData";
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";

import A from "@components/A";
import Breadcrumb from "@components/Breadcrumb";
import Layout from "@components/Layout";

function OSNameFromDevice(device: string, version: string): string {
    if (device === "AppleTV5,3" || device === "AppleTV6,11" || device === "AppleTV11,1")
        return "tvOS"; // AppleTV2,1 and AppleTV3,x are iOS

    if (device.startsWith("Watch"))
        return "watchOS";

    if (device.startsWith("iBridge"))
        return "bridgeOS";

    if (device.startsWith("AudioAccessory"))
        return "audioOS";

    if (device.startsWith("iPad")) {
        // iPad1,x through iPad4,x are all iOS
        if (device.startsWith("iPad1,") || device.startsWith("iPad2,") || device.startsWith("iPad3,") || device.startsWith("iPad4,"))
            return "iOS";

        // iPad5,x and up are iOS through 12.x; then iPadOS
        return version.startsWith("8.") || version.startsWith("9.") || version.startsWith("10.") || version.startsWith("11.") || version.startsWith("12.")
            ? "iOS"
            : "iPadOS";
    }

    // iPhone and iPod touch are iPhoneOS through 3.x; then iOS
    return version.startsWith("1.") || version.startsWith("2.") || version.startsWith("3.")
        ? "iPhoneOS"
        : "iOS";
}

const FirmwareItemNames: Record<string, React.ReactNode> = {
    UpdateRamdisk: "Update Ramdisk",
    UpdateRamdiskOTA: "Update Ramdisk (OTA)",
    UpdateRamdiskBeta: "Update Ramdisk (Beta)",
    RestoreRamdisk: "Restore Ramdisk",
    RestoreRamdiskBeta: "Restore Ramdisk (Beta)",
    ACIBTFirmware: <A href="/fw/file/aci-bt-fw">ACI Bluetooth Firmware</A>,
    ACIWiFiFirmware: <A href="/fw/file/aci-wifi-fw">ACI WiFi Firmware</A>,
    ADCPetra: <A href="/fw/file/adc-petra">ADC Petra</A>,
    ANE: <A href="/fw/file/ane">Apple Neural Engine</A>,
    ANSF: <A href="/fw/file/ansf">ANSF</A>,
    AOPFirmware: <A href="/fw/file/aop-fw">AOP Firmware</A>,
    AppleAVE: <A href="/fw/file/apple-ave">Apple Audio/Video Encoder</A>,
    AppleLogo: <A href="/fw/file/apple-logo">Apple Logo</A>,
    AppleMaggie: <A href="/fw/file/apple-maggie">Apple Maggie</A>,
    ARMFW: <A href="/fw/file/arm-fw">ARM Firmware</A>,
    AudioCodecFirmware: <A href="/fw/file/audio-codec">Audio Codec</A>,
    AudioDSP: <A href="/fw/file/audio-dsp">Audio DSP</A>,
    BatteryCharging: <A href="/fw/file/battery-charging">Battery Charging</A>,
    BatteryCharging0: <A href="/fw/file/battery-charging">Battery Charging 0</A>,
    BatteryCharging1: <A href="/fw/file/battery-charging">Battery Charging 1</A>,
    BatteryFull: <A href="/fw/file/battery-full">Battery Full</A>,
    BatteryLow0: <A href="/fw/file/battery-low">Battery Low 0</A>,
    BatteryLow1: <A href="/fw/file/battery-low">Battery Low 1</A>,
    Dali: <A href="/fw/file/dali">DALI</A>,
    DCP: <A href="/fw/file/dcp">DCP</A>,
    DeviceTree: <A href="/fw/file/device-tree">Device Tree</A>,
    GlyphCharging: <A href="/fw/file/glyph-charging">Glyph Charging</A>,
    GlyphPlugin: <A href="/fw/file/glyph-plugin">Glyph Plugin</A>,
    HapticAssets: <A href="/fw/file/haptic-assets">Haptic Assets</A>,
    Homer: <A href="/fw/file/homer">Homer Firmware</A>,
    iBEC: <A href="/fw/file/ibec">iBEC</A>,
    iBoot: <A href="/fw/file/iboot">iBoot</A>,
    iBootData: <A href="/fw/file/iboot-data">iBoot Data</A>,
    iBSS: <A href="/fw/file/ibss">iBSS</A>,
    ISP: <A href="/fw/file/isp">ISP</A>,
    Kernelcache: <A href="/fw/file/kernelcache">Kernelcache</A>,
    LeapHaptics: <A href="/fw/file/leap-haptics">Leap Motion Haptics</A>,
    LiquidDetect: <A href="/fw/file/liquid-detect">Liquid Damage Detection</A>,
    LLB: <A href="/fw/file/llb">LLB</A>,
    LowPowerMode: <A href="/fw/file/low-power-mode">Low Power Mode</A>,
    LowPowerFindMyMode: <A href="/fw/file/low-power-find-my-mode">Low Power &apos;Find My&apos; Mode</A>,
    MConnector: <A href="/fw/file/m-connector">M Connector</A>,
    Multitouch: <A href="/fw/file/multitouch">Multitouch Firmware</A>,
    NeedService: <A href="/fw/file/need-service">Need Service</A>,
    PMP: <A href="/fw/file/pmp">Power Management Processor</A>,
    RANS: <A href="/fw/file/rans">RANS</A>,
    RecoveryMode: <A href="/fw/file/recovery-mode">Recovery Mode</A>,
    RTPFirmware: <A href="/fw/file/rtp-fw">RTP</A>,
    SEPFirmware: <A href="/fw/file/sep-fw">Secure Enclave Processor Firmware</A>,
    SmartIOFirmware: <A href="/fw/file/smart-io-fw">SmartIO Firmware</A>,
    WirelessPower: <A href="/fw/file/wireless-power">Wireless Charging Controller</A>,
};

function FormatSingleFirmwareItem(item: FirmwareItem): React.ReactElement {
    return (
        <ul>
            <li><b>Filename:</b> {item.Filename}</li>
            {!item.Encrypted && <li><b>Not Encrypted</b></li>}
            {item.Encrypted && item.IVKey && <>
                <li><b>IV:</b> <code>{item.IVKey.IV}</code></li>
                <li><b>Key:</b> <code>{item.IVKey.Key}</code></li>
            </>}
            {item.Encrypted && item.KBag && <li><b>KBAG:</b> <code>{item.KBag}</code></li>}
        </ul>
    );
}

function FormatFirmwareItem(type: FirmwareItemType, model1Item?: FirmwareItem, model2Item?: FirmwareItem, models?: [string, string]): React.ReactElement {
    if (!model1Item)
        return <></>;
    return (
        <>
            <h2 id={`heading${type}`}>{FirmwareItemNames[type]}</h2>
            <ul>
                {model2Item
                    ? <>
                        <li>
                            {models && <b>{models[0]}</b>}
                            {FormatSingleFirmwareItem(model1Item)}
                        </li>
                        <li>
                            {models && <b>{models[1]}</b>}
                            {FormatSingleFirmwareItem(model2Item)}
                        </li>
                    </>
                    : FormatSingleFirmwareItem(model1Item)}
            </ul>
        </>
    );
}

export default function Page(props: KeyPage): React.ReactElement {
    return (
        <Layout.Root navGroup="key" pageTitle={`${props.Codename} ${props.Build}`} canonical={`/key/${props.Device}/${props.Build}`}>
            <Layout.Title title={`${props.Codename} ${props.Build} (${props.Device})`} />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/key">Firmware Keys</Breadcrumb.Item>
                <Breadcrumb.Item>{props.Device}</Breadcrumb.Item>
                <Breadcrumb.Item>{props.Codename} {props.Build}</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <table className="border border-gray-400 bg-gray-300 p-2 float-right">
                    <caption className="table-caption">
                        <span className="font-bold">{OSNameFromDevice(props.Device, props.Version)} {props.Version}</span>
                    </caption>
                    <tbody>
                        <tr>
                            <th className="border border-gray-400 p-1 text-center">Build</th>
                            <td className="border border-gray-400 p-1 text-center">{props.Build}</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-400 p-1 text-center">Codename</th>
                            <td className="border border-gray-400 p-1 text-center">{props.Codename}</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-400 p-1 text-center">Device</th>
                            <td className="border border-gray-400 p-1 text-center">
                                {props.Device}
                                {props.Models &&
                                    <>
                                        <br />
                                        ({props.Models[0]} and {props.Models[1]})
                                    </>}
                            </td>
                        </tr>
                        {props.Baseband && <tr>
                            <th className="border border-gray-400 p-1 text-center">Baseband</th>
                            <td className="border border-gray-400 p-1 text-center">{props.Baseband}</td>
                        </tr>}
                        {props.DownloadUrl && <tr>
                            <th className="border border-gray-400 p-1 text-center" colSpan={2}>
                                <A href={props.DownloadUrl}>Download Firmware</A>
                            </th>
                        </tr>}
                    </tbody>
                </table>

                {props.RootFS && <>
                    <h2 id="headingRootFS">Root Filesystem</h2>
                    <ul>
                        <li><b>Filename:</b> {props.RootFS.Filename}</li>
                        {props.RootFS.Encrypted
                            ? <li><b>Key:</b> <code>{props.RootFS.Key}</code></li>
                            : <li><b>Not Encrypted</b></li>}
                    </ul>
                </>}

                {props.RootFSBeta && <>
                    <h2 id="headingRootFSBeta">Root Filesystem (Beta)</h2>
                    {props.RootFSBeta.Encrypted
                        ? <li><b>Key:</b> <code>{props.RootFSBeta.Key}</code></li>
                        : <li><b>Not Encrypted</b></li>}
                </>}

                {FormatFirmwareItem("UpdateRamdisk", props.UpdateRamdisk, props.UpdateRamdisk2, props.Models)}
                {FormatFirmwareItem("UpdateRamdiskOTA", props.UpdateRamdiskOTA, props.UpdateRamdiskOTA2, props.Models)}
                {FormatFirmwareItem("UpdateRamdiskBeta", props.UpdateRamdiskBeta, props.UpdateRamdiskBeta2, props.Models)}
                {FormatFirmwareItem("RestoreRamdisk", props.RestoreRamdisk, props.RestoreRamdisk2, props.Models)}
                {FormatFirmwareItem("RestoreRamdiskBeta", props.RestoreRamdiskBeta, props.RestoreRamdiskBeta2, props.Models)}
                {FormatFirmwareItem("ACIBTFirmware", props.ACIBTFirmware, props.ACIBTFirmware2, props.Models)}
                {FormatFirmwareItem("ACIWiFiFirmware", props.ACIWiFiFirmware, props.ACIWiFiFirmware2, props.Models)}
                {FormatFirmwareItem("ADCPetra", props.ADCPetra, props.ADCPetra2, props.Models)}
                {FormatFirmwareItem("ANE", props.ANE, props.ANE2, props.Models)}
                {FormatFirmwareItem("ANSF", props.ANSF, props.ANSF2, props.Models)}
                {FormatFirmwareItem("AOPFirmware", props.AOPFirmware, props.AOPFirmware2, props.Models)}
                {FormatFirmwareItem("AppleAVE", props.AppleAVE, props.AppleAVE2, props.Models)}
                {FormatFirmwareItem("AppleLogo", props.AppleLogo, props.AppleLogo2, props.Models)}
                {FormatFirmwareItem("AppleMaggie", props.AppleMaggie, props.AppleMaggie2, props.Models)}
                {FormatFirmwareItem("ARMFW", props.ARMFW, props.ARMFW2, props.Models)}
                {FormatFirmwareItem("AudioCodecFirmware", props.AudioCodecFirmware, props.AudioCodecFirmware2, props.Models)}
                {FormatFirmwareItem("AudioDSP", props.AudioDSP, props.AudioDSP2, props.Models)}
                {FormatFirmwareItem("BatteryCharging", props.BatteryCharging, props.BatteryCharging2, props.Models)}
                {FormatFirmwareItem("BatteryCharging0", props.BatteryCharging0, props.BatteryCharging02, props.Models)}
                {FormatFirmwareItem("BatteryCharging1", props.BatteryCharging1, props.BatteryCharging12, props.Models)}
                {FormatFirmwareItem("BatteryFull", props.BatteryFull, props.BatteryFull2, props.Models)}
                {FormatFirmwareItem("BatteryLow0", props.BatteryLow0, props.BatteryLow02, props.Models)}
                {FormatFirmwareItem("BatteryLow1", props.BatteryLow1, props.BatteryLow12, props.Models)}
                {FormatFirmwareItem("Dali", props.Dali, props.Dali2, props.Models)}
                {FormatFirmwareItem("DCP", props.DCP, props.DCP2, props.Models)}
                {FormatFirmwareItem("DeviceTree", props.DeviceTree, props.DeviceTree2, props.Models)}
                {FormatFirmwareItem("GlyphCharging", props.GlyphCharging, props.GlyphCharging2, props.Models)}
                {FormatFirmwareItem("GlyphPlugin", props.GlyphPlugin, props.GlyphPlugin2, props.Models)}
                {FormatFirmwareItem("HapticAssets", props.HapticAssets, props.HapticAssets2, props.Models)}
                {FormatFirmwareItem("Homer", props.Homer, props.Homer2, props.Models)}
                {FormatFirmwareItem("iBEC", props.iBEC, props.iBEC2, props.Models)}
                {FormatFirmwareItem("iBoot", props.iBoot, props.iBoot2, props.Models)}
                {FormatFirmwareItem("iBootData", props.iBootData, props.iBootData2, props.Models)}
                {FormatFirmwareItem("iBSS", props.iBSS, props.iBSS2, props.Models)}
                {FormatFirmwareItem("ISP", props.ISP, props.ISP2, props.Models)}
                {FormatFirmwareItem("Kernelcache", props.Kernelcache, props.Kernelcache2, props.Models)}
                {FormatFirmwareItem("LeapHaptics", props.LeapHaptics, props.LeapHaptics2, props.Models)}
                {FormatFirmwareItem("LiquidDetect", props.LiquidDetect, props.LiquidDetect2, props.Models)}
                {FormatFirmwareItem("LLB", props.LLB, props.LLB2, props.Models)}
                {FormatFirmwareItem("LowPowerMode", props.LowPowerMode, props.LowPowerMode2, props.Models)}
                {FormatFirmwareItem("LowPowerFindMyMode", props.LowPowerFindMyMode, props.LowPowerFindMyMode2, props.Models)}
                {FormatFirmwareItem("MConnector", props.MConnector, props.MConnector2, props.Models)}
                {FormatFirmwareItem("Multitouch", props.Multitouch, props.Multitouch2, props.Models)}
                {FormatFirmwareItem("NeedService", props.NeedService, props.NeedService2, props.Models)}
                {FormatFirmwareItem("PMP", props.PMP, props.PMP2, props.Models)}
                {FormatFirmwareItem("RANS", props.RANS, props.RANS2, props.Models)}
                {FormatFirmwareItem("RecoveryMode", props.RecoveryMode, props.RecoveryMode2, props.Models)}
                {FormatFirmwareItem("RTPFirmware", props.RTPFirmware, props.RTPFirmware2, props.Models)}
                {FormatFirmwareItem("SEPFirmware", props.SEPFirmware, props.SEPFirmware2, props.Models)}
                {FormatFirmwareItem("SmartIOFirmware", props.SmartIOFirmware, props.SmartIOFirmware2, props.Models)}
                {FormatFirmwareItem("WirelessPower", props.WirelessPower, props.WirelessPower2, props.Models)}
            </Layout.Content>
        </Layout.Root>
    );
}

function CleanBuild(hasKeysBuild: string): string {
    // get the internal build if the manufacturing build is present
    const parenIdx = hasKeysBuild.indexOf("(");
    if (parenIdx !== -1) {
        const firstCut = hasKeysBuild.substring(parenIdx); // "1145 (8M89)" => "(8M89)"
        return firstCut.substring(1, firstCut.length - 1); // "(8M89)" => "8M89"
    }
    return hasKeysBuild;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const hasKeys = ReadHasKeys();
    const paths: string[][] = [];
    Object.entries(hasKeys).forEach(([device, builds]) => {
        builds.forEach((build) => {
            if (build[2])
                paths.push([device, CleanBuild(build[1])]);
        });
    });

    return {
        paths: paths.map((build) => ({
            params: {
                device: build[0],
                build: build[1],
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<KeyPage>> {
    const device = context.params.device as string;
    const build = context.params.build as string;
    const bundle = ReadKeyBundle(device);
    if (bundle === undefined || bundle[build] === undefined)
        return { notFound: true };

    return {
        props: bundle[build],
    };
}
