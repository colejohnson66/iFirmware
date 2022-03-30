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
import React from "react";
import Toc from "@components/Toc";

function List(args: [string, string, string[]][]): React.ReactElement {
    return (
        <dl>
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {args.map(([deviceSlug, device, devices], rowIdx) => (
                <React.Fragment key={rowIdx}>
                    {/* <dt><A href={`/device${deviceSlug}`}>{device}</A></dt> */}
                    <dt>{device}</dt>
                    {devices && devices.map((device, deviceIdx) => (
                        <dd key={deviceIdx}><A href={`/fw/file/device-tree/${device}`}>{device}</A></dd>
                    ))}
                </React.Fragment>
            ))}
        </dl>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle="DeviceTree" canonical="/fw/file/device-tree">
            <Layout.Title title="DeviceTree" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item>DeviceTree</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFormat" text="Payload Format" />
                    <Toc.Entry href="#headingListAirTags" text="AirTag" />
                    <Toc.Entry href="#headingListAppleTV" text="Apple TV">
                        <Toc.Entry href="#headingListAppleTVAccessories" text="Accessories" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingListAppleWatch" text="Apple Watch" />
                    <Toc.Entry href="#headingListHeadphones" text="Headphones">
                        <Toc.Entry href="#headingListAirPods" text="AirPods" />
                        <Toc.Entry href="#headingListBeats" text="Beats">
                            <Toc.Entry href="#headingListBeatsBeats" text="Beats" />
                            <Toc.Entry href="#headingListBeatsSolo" text="Beats Solo" />
                            <Toc.Entry href="#headingListBeatsStudio" text="Beats Studio" />
                        </Toc.Entry>
                    </Toc.Entry>
                    <Toc.Entry href="#headingHomePod" text="HomePod" />
                    <Toc.Entry href="#headingIPad" text="iPad">
                        <Toc.Entry href="#headingIPadIPad" text="iPad" />
                        <Toc.Entry href="#headingIPadAir" text="iPad Air" />
                        <Toc.Entry href="#headingIPadMini" text="iPad mini" />
                        <Toc.Entry href="#headingIPadPro" text="iPad Pro" />
                        <Toc.Entry href="#headingIPadAccessories" text="Accessories" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingIPhone" text="iPhone" />
                    <Toc.Entry href="#headingIPodTouch" text="iPod touch" />
                </Toc.Root>
                <p>
                    A device tree (or DeviceTree) is a tree containing information about a device&apos;s various ports and peripherals.
                    It is used by bootloaders (<A href="/fw/file/iboot">iBoot</A> in the case of iOS) to provide the kernel with a map of the hardware.
                    In iOS&apos; case, most nodes in the tree file are empty (null), and are instead populated by iBoot before control is passed over to the kernel (XNU).
                </p>
                <p>
                    This file is present in all <A href="/fw/format/ipsw">IPSW</A> files and is believed to be the same for every version of iOS (but different for each device).
                    Despite being the same for every version of iOS, the encryption keys are different each time.
                </p>

                <Clear />

                <h2 id="headingFormat">Payload Format</h2>
                <p>
                    Once extracted from the outer container (<A href="/fw/format/img2">IMG2</A>, <A href="/fw/format/img3">IMG3</A>, or <A href="/fw/format/img4">IMG4</A>), the device tree can be dumped.
                    It follows a simple binary tree format that can be described in just three structures (two if you don&apos;t count the root node):
                </p>
                <pre>{`DeviceTree {
   0  DTreeNode  root;
}

DTreeNode {
   0  uint32          propCount
   4  uint32          childrenCount
   8  DTreeNodeProp[] props
????  DTreeNode[]     children
}

DTreeNodeProp {
   0  uint8[32] name
  20  uint32    length
  24  uint8[]   value    // \`length\` bytes
????  uint8[]   padding  // to multiple of four bytes
}`}
                </pre>

                <h2 id="headingListAirTags">AirTags</h2>
                {List([
                    ["/airtag/1g", "AirTag", ["AirTag1,1"]],
                ])}

                <h2 id="headingListAppleTV">Apple TV</h2>
                <p>
                    The first generation Apple TV is not included as it does not run iOS on ARM, but a trimmed down version of Mac OS X on x86.
                </p>
                {List([
                    ["/tv/2g", "Apple TV (2nd generation)", ["AppleTV2,1"]],
                    ["/tv/3g", "Apple TV (3rd generation)", ["AppleTV3,1", "AppleTV3,2"]],
                    ["/tv/4g", "Apple TV (4th generation)", ["AppleTV5,3"]],
                    ["/tv/4k", "Apple TV 4K", ["AppleTV6,2"]],
                    ["/tv/4k-2g", "Apple TV 4K (2nd generation)", ["AppleTV11,1"]],
                ])}

                <h3 id="headingListAppleTVAccessories">Accessories</h3>
                <p>
                    The internal IDs of the Siri Remotes are unknown, but they are listed for completeness.
                    These entries will be updated should the IDs be discovered.
                </p>
                {List([
                    ["/remote/1g", "Siri Remote", []],
                    ["/remote/2g", "Siri Remote (2nd generation)", []],
                    ["/remote/3g", "Siri Remote (3rd generation)", []],
                ])}

                <h2 id="headingListAppleWatch">Apple Watch</h2>
                {List([
                    ["/watch/1g", "Apple Watch", ["Watch1,1", "Watch1,2"]],
                    ["/watch/series1", "Apple Watch Series 1", ["Watch2,6", "Watch2,7"]],
                    ["/watch/series2", "Apple Watch Series 2", ["Watch2,3", "Watch2,4"]],
                    ["/watch/series3", "Apple Watch Series 3", ["Watch3,1", "Watch3,2", "Watch3,3", "Watch3,4"]],
                    ["/watch/series4", "Apple Watch Series 4", ["Watch4,1", "Watch4,2", "Watch4,3", "Watch4,4"]],
                    ["/watch/series5", "Apple Watch Series 5", ["Watch5,1", "Watch5,2", "Watch5,3", "Watch5,4"]],
                    ["/watch/se", "Apple Watch SE", ["Watch5,9", "Watch5,10", "Watch5,11", "Watch5,12"]],
                    ["/watch/series6", "Apple Watch Series 6", ["Watch6,1", "Watch6,2", "Watch6,3", "Watch6,4"]],
                    ["/watch/series7", "Apple Watch Series 7", ["Watch6,6", "Watch6,7", "Watch6,8", "Watch6,9"]],
                ])}

                <h2 id="headingListHeadphones">Headphones</h2>

                <h3 id="headingListAirPods">AirPods</h3>
                {List([
                    ["/airpods/1g", "AirPods", ["AirPods1,1"]],
                    ["/airpods/2g", "AirPods (2nd generation)", ["AirPods1,2", "AirPods2,1"]],
                    ["/airpods/3g", "AirPods (3rd generation)", ["AirPods1,3", "Audio2,1"]],
                    ["/airpods/pro", "AirPods Pro", ["AirPods2,2", "AirPodsPro1,1", "iProd8,1"]],
                    ["/airpods/max", "AirPods Max", ["AirPodsMax1,1", "iProd8,6"]],
                ])}

                <h3 id="headingListBeats">Beats</h3>
                <p>
                    The internal IDs of Beats headphones are unknown, but they are listed for completeness.
                    These entries will be updated should the IDs be discovered.
                </p>
                {List([
                    ["/beats/x", "Beats X", []],
                    ["/beats/fit-pro", "Beats Fit Pro", []],
                    ["/beats/flex", "Beats Flex", []],
                ])}

                <h4 id="headingListBeatsSolo">Beats Solo</h4>
                {List([
                    ["/beats-solo/3-wireless", "Beats Solo3 Wireless", []],
                    ["/beats-solo/pro", "Beats Solo Pro", []],
                ])}

                <h4 id="headingListBeatsStudio">Beats Studio</h4>
                {List([
                    ["/beats-studio/3-wireless", "Beats Studio3 Wireless", []],
                    ["/beats-studio/buds", "Beats Studio Buds", []],
                ])}

                <h2 id="headingHomePod">HomePod</h2>
                {List([
                    ["/homepod/1g", "HomePod", ["AudioAccessory1,1", "AudioAccessory1,2"]],
                    ["/homepod/mini", "HomePod mini", ["AudioAccessory5,1"]],
                ])}

                <h2 id="headingIPad">iPad</h2>
                <p>
                    Due to the vast amount of iPads available, this devices on this list are split by category.
                </p>

                <h3 id="headingIPadIPad">iPad</h3>
                {List([
                    ["/ipad/1g", "iPad", ["iPad1,1"]],
                    ["/ipad/2g", "iPad 2", ["iPad2,1", "iPad2,2", "iPad2,3", "iPad2,4"]],
                    ["/ipad/3g", "iPad (3rd generation)", ["iPad3,1", "iPad3,2", "iPad3,3"]],
                    ["/ipad/4g", "iPad (4th generation)", ["iPad3,4", "iPad3,5", "iPad3,6"]],
                    ["/ipad/5g", "iPad (5th generation)", ["iPad6,11", "iPad6,12"]],
                    ["/ipad/6g", "iPad (6th generation)", ["iPad7,5", "iPad7,6"]],
                    ["/ipad/7g", "iPad (7th generation)", ["iPad7,11", "iPad7,12"]],
                    ["/ipad/8g", "iPad (8th generation)", ["iPad11,6", "iPad11,7"]],
                    ["/ipad/9g", "iPad (9th generation)", ["iPad12,1", "iPad12,2"]],
                ])}

                <h3 id="headingIPadAir">iPad Air</h3>
                {List([
                    ["/ipad-air/1g", "iPad Air", ["iPad4,1", "iPad4,2", "iPad4,3"]],
                    ["/ipad-air/2g", "iPad Air 2", ["iPad5,3", "iPad5,4"]],
                    ["/ipad-air/3g", "iPad Air (3rd generation)", ["iPad11,3", "iPad11,4"]],
                    ["/ipad-air/4g", "iPad Air (4th generation)", ["iPad13,1", "iPad13,2"]],
                    ["/ipad-air/5g", "iPad Air (5th generation)", ["iPad13,16", "iPad13,17"]],
                ])}

                <h3 id="headingIPadMini">iPad mini</h3>
                {List([
                    ["/ipad-mini/1g", "iPad mini", ["iPad2,5", "iPad2,6", "iPad2,7"]],
                    ["/ipad-mini/2g", "iPad mini 2", ["iPad4,4", "iPad4,5", "iPad4,6"]],
                    ["/ipad-mini/3g", "iPad mini 3", ["iPad4,7", "iPad4,8", "iPad4,9"]],
                    ["/ipad-mini/4g", "iPad mini 4", ["iPad5,1", "iPad5,2"]],
                    ["/ipad-mini/5g", "iPad mini (5th generation)", ["iPad11,1", "iPad11,2"]],
                    ["/ipad-mini/6g", "iPad mini (6th generation)", ["iPad14,1", "iPad14,2"]],
                ])}

                <h3 id="headingIPadPro">iPad Pro</h3>
                {List([
                    ["/ipad-pro/1g", "iPad Pro", ["iPad6,3", "iPad6,4", "iPad6,7", "iPad6,8"]],
                    ["/ipad-pro/2g", "iPad Pro (2nd generation)", ["iPad7,1", "iPad7,2", "iPad7,3", "iPad7,4"]],
                    ["/ipad-pro/3g", "iPad Pro (3rd generation)", ["iPad8,1", "iPad8,2", "iPad8,3", "iPad8,4", "iPad8,5", "iPad8,6", "iPad8,7", "iPad8,8"]],
                    ["/ipad-pro/4g", "iPad Pro (4th generation)", ["iPad8,9", "iPad8,10", "iPad8,11", "iPad8,12"]],
                    ["/ipad-pro/5g", "iPad Pro (5th generation)", ["iPad13,4", "iPad13,5", "iPad13,6", "iPad13,7", "iPad13,8", "iPad13,9", "iPad13,10", "iPad13,11"]],
                ])}

                <h3 id="headingIPadAccessories">Accessories</h3>
                <p>
                    The internal IDs of the Apple Pencils and Smart Keyboards are unknown, but they are listed for completeness.
                    These entries will be updated should the IDs be discovered.
                </p>
                {List([
                    ["/pencil/1g", "Apple Pencil", []],
                    ["/pencil/2g", "Apple Pencil (2nd generation)", []],
                    ["/keyboard/1g", "Smart Keyboard", []],
                    ["/keyboard/folio", "Smart Keyboard Folio", []],
                ])}

                <h2 id="headingIPhone">iPhone</h2>
                {List([
                    ["/iphone/2g", "iPhone", ["iPhone1,1"]],
                    ["/iphone/3g", "iPhone 3G", ["iPhone1,2"]],
                    ["/iphone/3gs", "iPhone 3GS", ["iPhone2,1"]],
                    ["/iphone/4", "iPhone 4", ["iPhone3,1", "iPhone3,2", "iPhone3,3"]],
                    ["/iphone/4s", "iPhone 4S", ["iPhone4,1"]],
                    ["/iphone/5", "iPhone 5", ["iPhone5,1", "iPhone5,2"]],
                    ["/iphone/5c", "iPhone 5c", ["iPhone5,3", "iPhone5,4"]],
                    ["/iphone/5s", "iPhone 5s", ["iPhone6,1", "iPhone6,2"]],
                    ["/iphone/6", "iPhone 6 and 6 Plus", ["iPhone7,1", "iPhone7,2"]],
                    ["/iphone/6s", "iPhone 6s and 6s Plus", ["iPhone8,1", "iPhone8,2"]],
                    ["/iphone/se", "iPhone SE", ["iPhone8,4"]],
                    ["/iphone/7", "iPhone 7 and 7 Plus", ["iPhone9,1", "iPhone9,2", "iPhone9,3", "iPhone9,4"]],
                    ["/iphone/8", "iPhone 8 and 8 Plus", ["iPhone10,1", "iPhone10,2", "iPhone10,4", "iPhone10,5"]],
                    ["/iphone/x", "iPhone X", ["iPhone10,3", "iPhone10,6"]],
                    ["/iphone/xr", "iPhone XR", ["iPhone11,8"]],
                    ["/iphone/xs", "iPhone XS and XS Max", ["iPhone11,2", "iPhone11,4", "iPhone11,6"]],
                    ["/iphone/11", "iPhone 11, 11 Pro, and 11 Pro Max", ["iPhone12,1", "iPhone12,3", "iPhone12,5"]],
                    ["/iphone/se2", "iPhone SE (2nd generation)", ["iPhone12,8"]],
                    ["/iphone/12", "iPhone 12, 12 mini, 12 Pro, and 12 Pro Max", ["iPhone13,1", "iPhone13,2", "iPhone13,3", "iPhone13,4"]],
                    ["/iphone/13", "iPhone 13, 13 mini, 13 Pro, and 13 Pro Max", ["iPhone14,2", "iPhone14,3", "iPhone14,4", "iPhone14,5"]],
                    ["/iphone/se3", "iPhone SE (3rd generation)", ["iPhone14,6"]],
                ])}

                <h2 id="headingIPodTouch">iPod touch</h2>
                {List([
                    ["/ipod-touch/1g", "iPod touch", ["iPod1,1"]],
                    ["/ipod-touch/2g", "iPod touch 2G", ["iPod2,1"]],
                    ["/ipod-touch/3g", "iPod touch 3G", ["iPod3,1"]],
                    ["/ipod-touch/4g", "iPod touch 4G", ["iPod4,1"]],
                    ["/ipod-touch/5g", "iPod touch 5G", ["iPod5,1"]],
                    ["/ipod-touch/6g", "iPod touch 6G", ["iPod7,1"]],
                    ["/ipod-touch/7g", "iPod touch 7G", ["iPod9,1"]],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
