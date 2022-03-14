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
import Unit from "@components/Unit";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="baseband" pageTitle="Baseband" canonical="/baseband">
            <Layout.Title title="Baseband" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Baseband</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingList" text="List of Baseband Processors" />
                </Toc.Root>
                <p>
                    A baseband processor is a chip that manages the cellular radio functions of a device.
                    In the case of iDevices, the baseband processor has its own RAM and firmware, separate to the main processor.
                </p>

                <Clear />

                <h2 id="headingList">List of Baseband Processors</h2>
                <p>
                    Over the years, Apple has used many different baseband processors.
                    Specifically, Broadcom and Intel are the most common, but Infineon has been used before.
                    Recently, Apple has begun utilizing two processors at the same time.
                    In other words, newer devices support two processors (one Broadcom, one Intel), but which one is used in <em>your</em> device depends on many factors.
                </p>
                <p>
                    This list is sorted <em>roughly</em> in chronological order.
                    The devices listed to the right of each processor model number are the devices it is used in.
                </p>
                <dl>
                    <dt><A href="/baseband/pmb8876">PMB8876</A> (&quot;S-Gold 2&quot;)</dt>
                    <dd><A href="/device/iphone/2g">iPhone 2G</A></dd>

                    <dt><A href="/baseband/pmb8878">PMB8878</A> (&quot;X-Gold 608&quot;)</dt>
                    <dd><A href="/device/iphone/3g">iPhone 3G</A></dd>
                    <dd><A href="/device/iphone/3gs">iPhone 3GS</A></dd>
                    <dd><A href="/device/ipad/1g">iPad</A> (cellular model)</dd>

                    <dt><A href="/baseband/xmm6180">XMM6180</A> (&quot;X-Gold 618&quot;)</dt>
                    <dd><A href="/device/ipad/2g">iPad 2</A> (<code>iPad2,2</code> model)</dd>
                    <dd><A href="/device/iphone/4">iPhone 4</A> (<code>iPhone3,1</code> and <code>iPhone3,2</code> models)</dd>

                    <dt><A href="/baseband/mdm6600">MDM6800</A></dt>
                    <dd><A href="/device/ipad/2g">iPad 2</A> (<code>iPad2,3</code> model)</dd>
                    <dd><A href="/device/iphone/4">iPhone 4</A> (<code>iPhone3,4</code> model)</dd>

                    <dt><A href="/baseband/mdm6610">MDM6610</A></dt>
                    <dd><A href="/device/iphone/4s">iPhone 4S</A></dd>

                    <dt><A href="/baseband/mdm9600">MDM9600</A></dt>
                    <dd><A href="/device/ipad/3g">iPad (3rd generation)</A></dd>

                    <dt><A href="/baseband/mdm9615">MDM9615</A></dt>
                    <dd><A href="/device/ipad/4g">iPad (4th generation)</A></dd>
                    <dd><A href="/device/ipad-air/1g">iPad Air</A></dd>
                    <dd><A href="/device/ipad-mini/1g">iPad mini</A></dd>
                    <dd><A href="/device/ipad-mini/2g">iPad mini (2nd generation)</A></dd>
                    <dd><A href="/device/ipad-mini/3g">iPad mini (3rd generation)</A></dd>
                    <dd><A href="/device/iphone/5">iPhone 5</A></dd>
                    <dd><A href="/device/iphone/5c">iPhone 5c</A></dd>
                    <dd><A href="/device/iphone/5s">iPhone 5s</A></dd>

                    <dt><A href="/baseband/mdm9625">MDM9625</A></dt>
                    <dd><A href="/device/ipad/5g">iPad (5th generation)</A></dd>
                    <dd><A href="/device/ipad-air/2g">iPad Air 2</A></dd>
                    <dd><A href="/device/ipad-pro/1g">iPad Pro</A> (<Unit value={12.9} unit="inch" /> model)</dd>
                    <dd><A href="/device/iphone/6">iPhone 6 and 6 Plus</A></dd>
                    <dd><A href="/device/iphone/se">iPhone SE</A></dd>

                    <dt><A href="/baseband/mdm9630">MDM9635</A></dt>
                    <dd><A href="/device/watch/series3">Apple Watch Series 3</A> (cellular models)</dd>
                    <dd><A href="/device/ipad/6g">iPad (6th generation)</A></dd>
                    <dd><A href="/device/ipad-pro/1g">iPad Pro</A> (<Unit value={9.7} unit="inch" /> model)</dd>
                    <dd><A href="/device/iphone/6s">iPhone 6s and 6s Plus</A></dd>

                    <dt><A href="/baseband/mdm9645">MDM9645</A></dt>
                    <dd><A href="/device/ipad-pro/2g">iPad Pro</A> (2nd generation)</dd>
                    <dd><A href="/device/iphone/7">iPhone 7 and 7 Plus</A></dd>

                    <dt><A href="/baseband/pmb9943">PMB9943</A> (&quot;X-Gold 736&quot;)</dt>
                    <dd><A href="/device/iphone/7">iPhone 7 and 7 Plus</A></dd>

                    <dt><A href="/baseband/mdm9655">MDM9655</A></dt>
                    <dd><A href="/device/iphone/8">iPhone 8 and 8 Plus</A></dd>
                    <dd><A href="/device/iphone/x">iPhone X</A></dd>

                    <dt><A href="/baseband/mdm9655">MDM9655</A></dt>
                    <dd><A href="/device/watch/series4">Apple Watch Series 4</A> (cellular models)</dd>
                    <dd><A href="/device/watch/series5">Apple Watch Series 5</A> (cellular models)</dd>
                    <dd><A href="/device/watch/se">Apple Watch SE</A> (cellular models)</dd>
                    <dd><A href="/device/watch/series6">Apple Watch Series 6</A> (cellular models)</dd>
                    <dd><A href="/device/watch/series7">Apple Watch Series 7</A> (cellular models)</dd>
                    <dd><A href="/device/ipad/7g">iPad (7th generation)</A></dd>
                    <dd><A href="/device/ipad/8g">iPad (8th generation)</A></dd>
                    <dd><A href="/device/ipad-air/3g">iPad Air (3rd generation)</A></dd>
                    <dd><A href="/device/ipad-pro/3g">iPad Pro (3rd generation)</A></dd>
                    <dd><A href="/device/ipad-mini/5g">iPad mini (5th generation)</A></dd>
                    <dd><A href="/device/iphone/xr">iPhone XR</A></dd>
                    <dd><A href="/device/iphone/xs">iPhone XS and XS Max</A></dd>

                    <dt><A href="/baseband/pmb9960">PMB9960</A> (&quot;X-Gold 766&quot;)</dt>
                    <dd><A href="/device/ipad-air/4g">iPad Air (4th generation)</A></dd>
                    <dd><A href="/device/ipad-pro/4g">iPad Pro (4th generation)</A></dd>
                    <dd><A href="/device/iphone/11">iPhone 11, 11 Pro, and 11 Pro Max</A></dd>
                    <dd><A href="/device/iphone/se2">iPhone SE (2nd generation)</A></dd>

                    <dt><A href="/baseband/sdx55m">SDX55M</A></dt>
                    <dd><A href="/device/ipad-pro/5g">iPad Pro (5th generation)</A></dd>
                    <dd><A href="/device/iphone/12">iPhone 12, 12 mini, 12 Pro, and 12 Pro Max</A></dd>

                    <dt><A href="/baseband/sdx60m">SDX60M</A></dt>
                    <dd><A href="/device/ipad-mini/6g">iPad mini (6th generation)</A></dd>
                    <dd><A href="/device/iphone/13">iPhone 13, 13 mini, 13 Pro, and 13 Pro Max</A></dd>
                    <dd><A href="/device/iphone/se3">iPhone SE (3rd generation)</A></dd>
                </dl>
            </Layout.Content>
        </Layout.Root>
    );
}
