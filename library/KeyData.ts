/* =============================================================================
 * File:   KeyData.ts
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

import { existsSync, readFileSync } from "fs";

import path from "path";

export type HasKeys = Record<string, [string, string, boolean][]>;

export function ReadHasKeys(): HasKeys {
    const file = path.join(process.cwd(), "data", "Keys", "HasKeys.json");
    const contents = readFileSync(file, { encoding: "utf8" });
    return JSON.parse(contents);
}

type FirmwareItemTypeNo2 = "UpdateRamdisk" | "UpdateRamdiskOTA" | "UpdateRamdiskBeta" | "RestoreRamdisk" |
    "RestoreRamdiskBeta" | "ACIBTFirmware" | "ACIWiFiFirmware" | "ADCPetra" | "ANE" | "ANSF" | "AOPFirmware" |
    "AppleAVE" | "AppleLogo" | "AppleMaggie" | "ARMFW" | "AudioCodecFirmware" | "AudioDSP" | "BatteryCharging" |
    "BatteryCharging0" | "BatteryCharging1" | "BatteryFull" | "BatteryLow0" | "BatteryLow1" | "Dali" | "DCP" |
    "DeviceTree" | "GlyphCharging" | "GlyphPlugin" | "HapticAssets" | "Homer" | "iBEC" | "iBoot" | "iBootData" |
    "iBSS" | "ISP" | "Kernelcache" | "LeapHaptics" | "LiquidDetect" | "LLB" | "LowPowerMode" | "LowPowerFindMyMode" |
    "MConnector" | "Multitouch" | "NeedService" | "PMP" | "RANS" | "RecoveryMode" | "RTPFirmware" | "SEPFirmware" |
    "SmartIOFirmware" | "WirelessPower";
export type FirmwareItemType = FirmwareItemTypeNo2 | `${FirmwareItemTypeNo2}2`;

export type RootFS = {
    Filename?: string;
    Encrypted: false;
} | {
    Filename?: string;
    Encrypted: true;
    Key?: string;
}
export type FirmwareItem = {
    Filename?: string;
    Encrypted: false;
} | {
    Filename?: string;
    Encrypted: true;
    IVKey?: {
        IV: string;
        Key: string;
    };
    KBag?: string;
}
export type KeyPage = {
    Version: string;
    Build: string;
    Device: string;
    Codename: string;
    Baseband?: string;
    DownloadUrl?: string;
    Models?: [string, string];
    RootFS?: RootFS;
    RootFSBeta?: RootFS;
} & Record<FirmwareItemType, FirmwareItem>;

export type KeyBundle = Record<string, KeyPage>;

export function ReadKeyBundle(device: string): KeyBundle | undefined {
    const file = path.join(process.cwd(), "data", "Keys", `${device}.json`);
    if (!existsSync(file))
        return undefined;
    const contents = readFileSync(file, { encoding: "utf8" });
    return JSON.parse(contents);
}
export function ReadKeys(device: string, build: string): KeyPage | undefined {
    const bundle = ReadKeyBundle(device);
    if (!bundle || !Object.keys(bundle).includes(build))
        return undefined;
    return bundle[build];
}
