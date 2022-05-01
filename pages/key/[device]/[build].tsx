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
import { useRouter } from "next/router";

function FormatFirmwareItem(type: FirmwareItemType, item: FirmwareItem): React.ReactElement {
    return (
        <>
            <h2 id={`heading${type}`}>{type}</h2>
            <ul>
                <li><b>Filename:</b> {item.Filename}</li>
                {!item.Encrypted && <li><b>Not Encrypted</b></li>}
                {item.Encrypted && item.IVKey && <>
                    <li><b>IV:</b> <code>{item.IVKey.IV}</code></li>
                    <li><b>Key:</b> <code>{item.IVKey.Key}</code></li>
                </>}
                {item.Encrypted && item.KBag && <li><b>KBAG:</b> <code>{item.KBag}</code></li>}
            </ul>
        </>
    );
}

export default function Page(props: KeyPage): React.ReactElement {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <Layout.Root navGroup="key" pageTitle="Loading..." canonical="">
                <Layout.Title title="Loading..." />
                <Breadcrumb.Root>
                    <Breadcrumb.Item href="/key">Firmware Keys</Breadcrumb.Item>
                    <Breadcrumb.Item>...</Breadcrumb.Item>
                </Breadcrumb.Root>
            </Layout.Root>
        );
    }

    const title = `${props.Codename} ${props.Build} (${props.Device})`;
    return (
        <Layout.Root navGroup="key" pageTitle={title} canonical={`/key/${props.Device}/${props.Build}`}>
            <Layout.Title title={title} />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/key">Firmware Keys</Breadcrumb.Item>
                {/* TODO: add device group and device type? (eg. /key/AppleTV2,1) */}
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <table className="border border-gray-400 bg-gray-300 p-2 float-right">
                    <caption className="table-caption">
                        <span className="font-bold">iOS {props.Version}</span>
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
                            {/* TODO: Models */}
                            <th className="border border-gray-400 p-1 text-center">Device</th>
                            <td className="border border-gray-400 p-1 text-center">{props.Device}</td>
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
                {props.UpdateRamdisk && FormatFirmwareItem("UpdateRamdisk", props.UpdateRamdisk)}
                {props.UpdateRamdisk2 && FormatFirmwareItem("UpdateRamdisk2", props.UpdateRamdisk2)}

                {props.UpdateRamdiskOTA && FormatFirmwareItem("UpdateRamdiskOTA", props.UpdateRamdiskOTA)}
                {props.UpdateRamdiskOTA2 && FormatFirmwareItem("UpdateRamdiskOTA2", props.UpdateRamdiskOTA2)}

                {props.UpdateRamdiskBeta && FormatFirmwareItem("UpdateRamdiskBeta", props.UpdateRamdiskBeta)}
                {props.UpdateRamdiskBeta2 && FormatFirmwareItem("UpdateRamdiskBeta2", props.UpdateRamdiskBeta2)}

                {props.RestoreRamdisk && FormatFirmwareItem("RestoreRamdisk", props.RestoreRamdisk)}
                {props.RestoreRamdisk2 && FormatFirmwareItem("RestoreRamdisk2", props.RestoreRamdisk2)}

                {props.RestoreRamdiskBeta && FormatFirmwareItem("RestoreRamdiskBeta", props.RestoreRamdiskBeta)}
                {props.RestoreRamdiskBeta2 && FormatFirmwareItem("RestoreRamdiskBeta2", props.RestoreRamdiskBeta2)}

                {props.ACIBTFirmware && FormatFirmwareItem("ACIBTFirmware", props.ACIBTFirmware)}
                {props.ACIBTFirmware2 && FormatFirmwareItem("ACIBTFirmware2", props.ACIBTFirmware2)}

                {props.ACIWiFiFirmware && FormatFirmwareItem("ACIWiFiFirmware", props.ACIWiFiFirmware)}
                {props.ACIWiFiFirmware2 && FormatFirmwareItem("ACIWiFiFirmware2", props.ACIWiFiFirmware2)}

                {props.ADCPetra && FormatFirmwareItem("ADCPetra", props.ADCPetra)}
                {props.ADCPetra2 && FormatFirmwareItem("ADCPetra2", props.ADCPetra2)}

                {props.ANE && FormatFirmwareItem("ANE", props.ANE)}
                {props.ANE2 && FormatFirmwareItem("ANE2", props.ANE2)}

                {props.ANSF && FormatFirmwareItem("ANSF", props.ANSF)}
                {props.ANSF2 && FormatFirmwareItem("ANSF2", props.ANSF2)}

                {props.AOPFirmware && FormatFirmwareItem("AOPFirmware", props.AOPFirmware)}
                {props.AOPFirmware2 && FormatFirmwareItem("AOPFirmware2", props.AOPFirmware2)}

                {props.AppleAVE && FormatFirmwareItem("AppleAVE", props.AppleAVE)}
                {props.AppleAVE2 && FormatFirmwareItem("AppleAVE2", props.AppleAVE2)}

                {props.AppleLogo && FormatFirmwareItem("AppleLogo", props.AppleLogo)}
                {props.AppleLogo2 && FormatFirmwareItem("AppleLogo2", props.AppleLogo2)}

                {props.AppleMaggie && FormatFirmwareItem("AppleMaggie", props.AppleMaggie)}
                {props.AppleMaggie2 && FormatFirmwareItem("AppleMaggie2", props.AppleMaggie2)}

                {props.ARMFW && FormatFirmwareItem("ARMFW", props.ARMFW)}
                {props.ARMFW2 && FormatFirmwareItem("ARMFW2", props.ARMFW2)}

                {props.AudioCodecFirmware && FormatFirmwareItem("AudioCodecFirmware", props.AudioCodecFirmware)}
                {props.AudioCodecFirmware2 && FormatFirmwareItem("AudioCodecFirmware2", props.AudioCodecFirmware2)}

                {props.AudioDSP && FormatFirmwareItem("AudioDSP", props.AudioDSP)}
                {props.AudioDSP2 && FormatFirmwareItem("AudioDSP2", props.AudioDSP2)}

                {props.BatteryCharging && FormatFirmwareItem("BatteryCharging", props.BatteryCharging)}
                {props.BatteryCharging2 && FormatFirmwareItem("BatteryCharging2", props.BatteryCharging2)}

                {props.BatteryCharging0 && FormatFirmwareItem("BatteryCharging0", props.BatteryCharging0)}
                {props.BatteryCharging02 && FormatFirmwareItem("BatteryCharging02", props.BatteryCharging02)}

                {props.BatteryCharging1 && FormatFirmwareItem("BatteryCharging1", props.BatteryCharging1)}
                {props.BatteryCharging12 && FormatFirmwareItem("BatteryCharging12", props.BatteryCharging12)}

                {props.BatteryFull && FormatFirmwareItem("BatteryFull", props.BatteryFull)}
                {props.BatteryFull2 && FormatFirmwareItem("BatteryFull2", props.BatteryFull2)}

                {props.BatteryLow0 && FormatFirmwareItem("BatteryLow0", props.BatteryLow0)}
                {props.BatteryLow02 && FormatFirmwareItem("BatteryLow02", props.BatteryLow02)}

                {props.BatteryLow1 && FormatFirmwareItem("BatteryLow1", props.BatteryLow1)}
                {props.BatteryLow12 && FormatFirmwareItem("BatteryLow12", props.BatteryLow12)}

                {props.Dali && FormatFirmwareItem("Dali", props.Dali)}
                {props.Dali2 && FormatFirmwareItem("Dali2", props.Dali2)}

                {props.DCP && FormatFirmwareItem("DCP", props.DCP)}
                {props.DCP2 && FormatFirmwareItem("DCP2", props.DCP2)}

                {props.DeviceTree && FormatFirmwareItem("DeviceTree", props.DeviceTree)}
                {props.DeviceTree2 && FormatFirmwareItem("DeviceTree2", props.DeviceTree2)}

                {props.GlyphCharging && FormatFirmwareItem("GlyphCharging", props.GlyphCharging)}
                {props.GlyphCharging2 && FormatFirmwareItem("GlyphCharging2", props.GlyphCharging2)}

                {props.GlyphPlugin && FormatFirmwareItem("GlyphPlugin", props.GlyphPlugin)}
                {props.GlyphPlugin2 && FormatFirmwareItem("GlyphPlugin2", props.GlyphPlugin2)}

                {props.HapticAssets && FormatFirmwareItem("HapticAssets", props.HapticAssets)}
                {props.HapticAssets2 && FormatFirmwareItem("HapticAssets2", props.HapticAssets2)}

                {props.Homer && FormatFirmwareItem("Homer", props.Homer)}
                {props.Homer2 && FormatFirmwareItem("Homer2", props.Homer2)}

                {props.iBEC && FormatFirmwareItem("iBEC", props.iBEC)}
                {props.iBEC2 && FormatFirmwareItem("iBEC2", props.iBEC2)}

                {props.iBoot && FormatFirmwareItem("iBoot", props.iBoot)}
                {props.iBoot2 && FormatFirmwareItem("iBoot2", props.iBoot2)}

                {props.iBootData && FormatFirmwareItem("iBootData", props.iBootData)}
                {props.iBootData2 && FormatFirmwareItem("iBootData2", props.iBootData2)}

                {props.iBSS && FormatFirmwareItem("iBSS", props.iBSS)}
                {props.iBSS2 && FormatFirmwareItem("iBSS2", props.iBSS2)}

                {props.ISP && FormatFirmwareItem("ISP", props.ISP)}
                {props.ISP2 && FormatFirmwareItem("ISP2", props.ISP2)}

                {props.Kernelcache && FormatFirmwareItem("Kernelcache", props.Kernelcache)}
                {props.Kernelcache2 && FormatFirmwareItem("Kernelcache2", props.Kernelcache2)}

                {props.LeapHaptics && FormatFirmwareItem("LeapHaptics", props.LeapHaptics)}
                {props.LeapHaptics2 && FormatFirmwareItem("LeapHaptics2", props.LeapHaptics2)}

                {props.LiquidDetect && FormatFirmwareItem("LiquidDetect", props.LiquidDetect)}
                {props.LiquidDetect2 && FormatFirmwareItem("LiquidDetect2", props.LiquidDetect2)}

                {props.LLB && FormatFirmwareItem("LLB", props.LLB)}
                {props.LLB2 && FormatFirmwareItem("LLB2", props.LLB2)}

                {props.LowPowerMode && FormatFirmwareItem("LowPowerMode", props.LowPowerMode)}
                {props.LowPowerMode2 && FormatFirmwareItem("LowPowerMode2", props.LowPowerMode2)}

                {props.LowPowerFindMyMode && FormatFirmwareItem("LowPowerFindMyMode", props.LowPowerFindMyMode)}
                {props.LowPowerFindMyMode2 && FormatFirmwareItem("LowPowerFindMyMode2", props.LowPowerFindMyMode2)}

                {props.MConnector && FormatFirmwareItem("MConnector", props.MConnector)}
                {props.MConnector2 && FormatFirmwareItem("MConnector2", props.MConnector2)}

                {props.Multitouch && FormatFirmwareItem("Multitouch", props.Multitouch)}
                {props.Multitouch2 && FormatFirmwareItem("Multitouch2", props.Multitouch2)}

                {props.NeedService && FormatFirmwareItem("NeedService", props.NeedService)}
                {props.NeedService2 && FormatFirmwareItem("NeedService2", props.NeedService2)}

                {props.PMP && FormatFirmwareItem("PMP", props.PMP)}
                {props.PMP2 && FormatFirmwareItem("PMP2", props.PMP2)}

                {props.RANS && FormatFirmwareItem("RANS", props.RANS)}
                {props.RANS2 && FormatFirmwareItem("RANS2", props.RANS2)}

                {props.RecoveryMode && FormatFirmwareItem("RecoveryMode", props.RecoveryMode)}
                {props.RecoveryMode2 && FormatFirmwareItem("RecoveryMode2", props.RecoveryMode2)}

                {props.RTPFirmware && FormatFirmwareItem("RTPFirmware", props.RTPFirmware)}
                {props.RTPFirmware2 && FormatFirmwareItem("RTPFirmware2", props.RTPFirmware2)}

                {props.SEPFirmware && FormatFirmwareItem("SEPFirmware", props.SEPFirmware)}
                {props.SEPFirmware2 && FormatFirmwareItem("SEPFirmware2", props.SEPFirmware2)}

                {props.SmartIOFirmware && FormatFirmwareItem("SmartIOFirmware", props.SmartIOFirmware)}
                {props.SmartIOFirmware2 && FormatFirmwareItem("SmartIOFirmware2", props.SmartIOFirmware2)}

                {props.WirelessPower && FormatFirmwareItem("WirelessPower", props.WirelessPower)}
                {props.WirelessPower2 && FormatFirmwareItem("WirelessPower2", props.WirelessPower2)}
            </Layout.Content>
        </Layout.Root>
    );
}

// function CleanBuild(hasKeysBuild: string): string {
//     // get the internal build if the manufacturing build is present
//     const parenIdx = hasKeysBuild.indexOf("(");
//     if (parenIdx !== -1) {
//         const firstCut = hasKeysBuild.substring(parenIdx); // "1145 (8M89)" => "(8M89)"
//         return firstCut.substring(1, firstCut.length - 1); // "(8M89)" => "8M89"
//     }
//     return hasKeysBuild;
// }

// export async function getStaticPaths(): Promise<GetStaticPathsResult> {
//     const hasKeys = ReadHasKeys();
//     const paths: string[][] = [];
//     Object.entries(hasKeys).forEach(([device, builds]) => {
//         builds.forEach((build) => {
//             if (build[2])
//                 paths.push([device, CleanBuild(build[1])]);
//         });
//     });

//     return {
//         paths: paths.map((build) => ({
//             params: {
//                 device: build[0],
//                 build: build[1],
//             },
//         })),
//         fallback: true,
//     };
// }

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: [],
        fallback: "blocking",
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
