/* =============================================================================
 * File:   index.tsx
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
import Layout from "@components/Layout";
import Toc from "@components/Toc";

function List(args: [string, string, string?][]): React.ReactElement {
    return (
        <ul>
            {args.map(([url, name, paren]) => (
                <li key={url}>
                    <A href={`/device${url}`}>{name}</A>{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="device" pageTitle="Devices" canonical="/device">
            <Layout.Title title="Devices" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Devices</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingListAirTag" text="AirTag" />
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
                    Over the years, Apple has released a variety of &quot;iDevices.&quot;
                    Beginning with the original iPhone in 2007, Apple&apos;s iDevice lineup has expanded to include iPod touches, iPads, and more.
                    In addition, Apple has released a variety of accessories, including AirPods, Apple Pencil, and more.
                </p>

                <Clear />

                <h2 id="headingListAirTag">AirTag</h2>
                {List([
                    ["/airtags/1g", "AirTag"],
                ])}

                <h2 id="headingListAppleTV">Apple TV</h2>
                <p>
                    The first generation Apple TV is not included as it does not run iOS on ARM, but a trimmed down version of Mac OS X on x86.
                </p>
                {List([
                    ["/tv/2g", "Apple TV (2nd generation)"],
                    ["/tv/3g", "Apple TV (3rd generation)"],
                    ["/tv/4g", "Apple TV (4th generation)"],
                    ["/tv/4k", "Apple TV 4K"],
                    ["/tv/4k-2g", "Apple TV 4K (2nd generation)"],
                ])}

                <h3 id="headingListAppleTVAccessories">Accessories</h3>
                {List([
                    ["/remote/1g", "Siri Remote"],
                    ["/remote/2g", "Siri Remote (2nd generation)"],
                ])}

                <h2 id="headingListAppleWatch">Apple Watch</h2>
                {List([
                    ["/watch/1g", "Apple Watch"],
                    ["/watch/series1", "Apple Watch Series 1"],
                    ["/watch/series2", "Apple Watch Series 2"],
                    ["/watch/series3", "Apple Watch Series 3"],
                    ["/watch/series4", "Apple Watch Series 4"],
                    ["/watch/series5", "Apple Watch Series 5"],
                    ["/watch/se", "Apple Watch SE"],
                    ["/watch/series6", "Apple Watch Series 6"],
                    ["/watch/series7", "Apple Watch Series 7"],
                ])}

                <h2 id="headingListHeadphones">Headphones</h2>

                <h3 id="headingListAirPods">AirPods</h3>
                {List([
                    ["/airpods/1g", "AirPods"],
                    ["/airpods/2g", "AirPods (2nd generation)"],
                    ["/airpods/3g", "AirPods (3rd generation)"],
                    ["/airpods/pro", "AirPods Pro"],
                    ["/airpods/max", "AirPods Max"],
                ])}

                <h3 id="headingListBeats">Beats</h3>

                <h4 id="headingListBeatsBeats">Beats</h4>
                {List([
                    ["/beats/x", "Beats X"],
                    ["/beats/fit-pro", "Beats Fit Pro"],
                    ["/beats/flex", "Beats Flex"],
                ])}

                <h4 id="headingListBeatsSolo">Beats Solo</h4>
                {List([
                    ["/beats-solo/3-wireless", "Beats Solo3 Wireless"],
                    ["/beats-solo/pro", "Beats Solo Pro"],
                ])}

                <h4 id="headingListBeatsStudio">Beats Studio</h4>
                {List([
                    ["/beats-studio/3-wireless", "Beats Studio3 Wireless"],
                    ["/beats-studio/buds", "Beats Studio Buds"],
                ])}

                <h2 id="headingHomePod">HomePod</h2>
                {List([
                    ["/homepod/1g", "HomePod"],
                    ["/homepod/mini", "HomePod mini"],
                ])}

                <h2 id="headingIPad">iPad</h2>
                <p>
                    Due to the vast amount of iPads available, this devices on this list are split by category.
                </p>

                <h3 id="headingIPadIPad">iPad</h3>
                {List([
                    ["/ipad/1g", "iPad"],
                    ["/ipad/2g", "iPad 2"],
                    ["/ipad/3g", "iPad (3rd generation)"],
                    ["/ipad/4g", "iPad (4th generation)"],
                    ["/ipad/5g", "iPad (5th generation)"],
                    ["/ipad/6g", "iPad (6th generation)"],
                    ["/ipad/7g", "iPad (7th generation)"],
                    ["/ipad/8g", "iPad (8th generation)"],
                    ["/ipad/9g", "iPad (9th generation)"],
                ])}

                <h3 id="headingIPadAir">iPad Air</h3>
                {List([
                    ["/ipad-air/1g", "iPad Air"],
                    ["/ipad-air/2g", "iPad Air 2"],
                    ["/ipad-air/3g", "iPad Air (3rd generation)"],
                    ["/ipad-air/4g", "iPad Air (4th generation)"],
                    ["/ipad-air/5g", "iPad Air (5th generation)"],
                ])}

                <h3 id="headingIPadMini">iPad mini</h3>
                {List([
                    ["/ipad-mini/1g", "iPad mini"],
                    ["/ipad-mini/2g", "iPad mini 2"],
                    ["/ipad-mini/3g", "iPad mini 3"],
                    ["/ipad-mini/4g", "iPad mini 4"],
                    ["/ipad-mini/5g", "iPad mini (5th generation)"],
                    ["/ipad-mini/6g", "iPad mini (6th generation)"],
                ])}

                <h3 id="headingIPadPro">iPad Pro</h3>
                {List([
                    ["/ipad-pro/1g", "iPad Pro"],
                    ["/ipad-pro/2g", "iPad Pro (2nd generation)"],
                    ["/ipad-pro/3g", "iPad Pro (3rd generation)"],
                    ["/ipad-pro/4g", "iPad Pro (4th generation)"],
                    ["/ipad-pro/5g", "iPad Pro (5th generation)"],
                ])}

                <h3 id="headingIPadAccessories">Accessories</h3>
                {List([
                    ["/pencil/1g", "Apple Pencil"],
                    ["/pencil/2g", "Apple Pencil (2nd generation)"],
                    ["/keyboard/1g", "Smart Keyboard"],
                    ["/keyboard/folio", "Smart Keyboard Folio"],
                ])}

                <h2 id="headingIPhone">iPhone</h2>
                {List([
                    ["/iphone/2g", "iPhone"],
                    ["/iphone/3g", "iPhone 3G"],
                    ["/iphone/3gs", "iPhone 3GS"],
                    ["/iphone/4", "iPhone 4"],
                    ["/iphone/4s", "iPhone 4S"],
                    ["/iphone/5", "iPhone 5"],
                    ["/iphone/5c", "iPhone 5c"],
                    ["/iphone/5s", "iPhone 5s"],
                    ["/iphone/6", "iPhone 6 and 6 Plus"],
                    ["/iphone/6s", "iPhone 6s and 6s Plus"],
                    ["/iphone/se", "iPhone SE"],
                    ["/iphone/7", "iPhone 7 and 7 Plus"],
                    ["/iphone/8", "iPhone 8 and 8 Plus"],
                    ["/iphone/x", "iPhone X"],
                    ["/iphone/xr", "iPhone XR"],
                    ["/iphone/xs", "iPhone XS and XS Max"],
                    ["/iphone/11", "iPhone 11, 11 Pro, and 11 Pro Max"],
                    ["/iphone/se2", "iPhone SE (2nd generation)"],
                    ["/iphone/12", "iPhone 12, 12 mini, 12 Pro, and 12 Pro Max"],
                    ["/iphone/13", "iPhone 13, 13 mini, 13 Pro, and 13 Pro Max"],
                    ["/iphone/se3", "iPhone SE (3rd generation)"],
                ])}

                <h2 id="headingIPodTouch">iPod touch</h2>
                {List([
                    ["/ipod-touch/1g", "iPod touch"],
                    ["/ipod-touch/2g", "iPod touch 2G"],
                    ["/ipod-touch/3g", "iPod touch 3G"],
                    ["/ipod-touch/4g", "iPod touch 4G"],
                    ["/ipod-touch/5g", "iPod touch 5G"],
                    ["/ipod-touch/6g", "iPod touch 6G"],
                    ["/ipod-touch/7g", "iPod touch 7G"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
