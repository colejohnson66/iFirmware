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

import Layout from "../../components/layout";
import Link from "next/link";
import TOC from "../../components/toc";
import constants from "../../constants";

export default () => {
    return (
        <Layout navGroup="file" title="DeviceTree">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>DeviceTree</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFormat" text="Payload Format" />
                            <TOC.Entry href="#headingList" text="Device Trees from iDevices">
                                <TOC.Entry href="#headingListAirPods" text="AirPods" />
                                <TOC.Entry href="#headingListAppleTV" text="Apple TV" />
                                <TOC.Entry href="#headingListAppleTVAccessories" text="Apple TV Accessories" />
                                <TOC.Entry href="#headingListAppleWatch" text="Apple Watch" />
                                <TOC.Entry href="#headingListHomePod" text="HomePod" />
                                <TOC.Entry href="#headingListIPad" text="iPad" />
                                <TOC.Entry href="#headingListIPadAir" text="iPad Air" />
                                <TOC.Entry href="#headingListIPadMini" text="iPad mini" />
                                <TOC.Entry href="#headingListIPadPro" text="iPad Pro" />
                                <TOC.Entry href="#headingListIPadAccessories" text="iPad Accessories" />
                                <TOC.Entry href="#headingListIPhone" text="iPhone" />
                                <TOC.Entry href="#headingListIPodTouch" text="iPod touch" />
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>DeviceTree</h1>
                        <p>
                            A device tree (or DeviceTree) is a tree containing information about a device's various ports and peripherals.
                            It is used by bootloaders (<Link href="/file/iBoot"><a>iBoot</a></Link> in the case of iOS) to provide the kernel with a map of the hardware.
                            In iOS' case, most nodes in the tree file are empty (null), and are instead populated by iBoot before control is passed over to the kernel (XNU).
                        </p>
                        <p>
                            This file is present in all <Link href="/file/format/ipsw"><a>IPSW</a></Link> files and is the same for every version of iOS (but different for each device).
                            Despite being the same for every version of iOS, the encryption keys are different each time.
                        </p>

                        <h2 id="headingFormat">Payload Format</h2>
                        <p>
                            Once extracted from the outer container (<Link href="/file/format/img2"><a>IMG2</a></Link>, <Link href="/file/format/img3"><a>IMG3</a></Link>, or <Link href="/file/format/img4"><a>IMG4</a></Link>), the device tree can be dumped.
                            It follows a simple binary tree format that can be described in just three structures (two if you don't count the root node):
                        </p>
                        <pre>
                            <code>
                                {`DeviceTree {
   0  DTreeNode root;
}`}
                            </code>
                        </pre>
                        <pre>
                            <code>
                                {`DTreeNode {
   0  uint32  propCount;
   4  uint32  childrenCount;
   8  DTreeNodeProp[] props;    // count(props) == propCount
????  DTreeNode[]     children; // count(children) == childrenCount
}`}
                            </code>
                        </pre>
                        <pre>
                            <code>
                                {`DTreeNodeProp {
   0  uint8[32] name;
  20  uint32    length;
  24  uint8[]   value; // sizeof(value) == length
????  uint8[]   pad;   // pad to multiple of four bytes
}`}
                            </code>
                        </pre>

                        <h2 id="headingList">Device Trees from iDevices</h2>
                        <p>
                            Listed below are links to device trees for all <Link href="/device"><a>iDevices</a></Link>.
                            For devices where there are multiple variants with the same identifier (such as <code>iPad6,11</code> with <code>J71sAP</code> and <code>J71tAP</code>), both variants' trees will be listed on the same page.
                        </p>

                        <h3 id="headingListAirPods">AirPods</h3>
                        <ul>
                            <li>
                                AirPods:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AirPods1,1"><a><code>AirPods1,1</code></a></Link>
                            </li>
                            <li>
                                AirPods (2nd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AirPods2,1"><a><code>AirPods2,1</code></a></Link>
                            </li>
                            <li>
                                AirPods Pro:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iProd8,1"><a><code>iProd8,1</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingListAppleTV">Apple TV</h3>
                        <ul>
                            <li>
                                Apple TV (2nd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AppleTV2,1"><a><code>AppleTV2,1</code></a></Link>
                            </li>
                            <li>
                                Apple TV (3rd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AppleTV3,1"><a><code>AppleTV3,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AppleTV3,2"><a><code>AppleTV3,2</code></a></Link>
                            </li>
                            <li>
                                Apple TV (4th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AppleTV5,3"><a><code>AppleTV5,3</code></a></Link>
                            </li>
                            <li>
                                Apple TV 4k:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AppleTV6,2"><a><code>AppleTV6,2</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingListAppleTVAccessories">Apple TV Accessories</h3>
                        <Alert variant="primary">
                            The identifiers of the two generations of Siri Remotes are currently unknown.
                            It is also unknown if they even run any form of iOS at all.
                        </Alert>
                        <ul>
                            <li>
                                Siri Remote:{" "}
                                ???
                            </li>
                            <li>
                                Siri Remote (2nd generation):{" "}
                                ???
                            </li>
                        </ul>

                        <h3 id="headingListAppleWatch">Apple Watch</h3>
                        <ul>
                            <li>
                                Apple Watch:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch1,1"><a><code>Watch1,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch1,2"><a><code>Watch1,2</code></a></Link>
                            </li>
                            <li>
                                Apple Watch Series 1:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch2,6"><a><code>Watch2,6</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch2,7"><a><code>Watch2,7</code></a></Link>
                            </li>
                            <li>
                                Apple Watch Series 2:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch2,3"><a><code>Watch2,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch2,4"><a><code>Watch2,4</code></a></Link>
                            </li>
                            <li>
                                Apple Watch Series 3:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch3,1"><a><code>Watch3,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch3,2"><a><code>Watch3,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch3,3"><a><code>Watch3,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch3,4"><a><code>Watch3,4</code></a></Link>
                            </li>
                            <li>
                                Apple Watch Series 4:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch4,1"><a><code>Watch4,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch4,2"><a><code>Watch4,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch4,3"><a><code>Watch4,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch4,4"><a><code>Watch4,4</code></a></Link>
                            </li>
                            <li>
                                Apple Watch Series 5:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch5,1"><a><code>Watch5,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch5,2"><a><code>Watch5,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch5,3"><a><code>Watch5,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/Watch5,4"><a><code>Watch5,4</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingListHomePod">HomePod</h3>
                        <ul>
                            <li>
                                HomePod:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AudioAccessory1,1"><a><code>AudioAccessory1,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/AudioAccessory1,2"><a><code>AudioAccessory1,2</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingListIPad">iPad</h3>
                        <ul>
                            <li>
                                iPad:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad1,1"><a><code>iPad1,1</code></a></Link>
                            </li>
                            <li>
                                iPad 2:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,1"><a><code>iPad2,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,2"><a><code>iPad2,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,3"><a><code>iPad2,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,4"><a><code>iPad2,4</code></a></Link>
                            </li>
                            <li>
                                iPad 2:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,1"><a><code>iPad2,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,2"><a><code>iPad2,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,3"><a><code>iPad2,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,4"><a><code>iPad2,4</code></a></Link>
                            </li>
                            <li>
                                iPad (3rd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad3,1"><a><code>iPad3,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad3,2"><a><code>iPad3,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad3,3"><a><code>iPad3,3</code></a></Link>
                            </li>
                            <li>
                                iPad (4th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad3,4"><a><code>iPad3,4</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad3,5"><a><code>iPad3,5</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad3,6"><a><code>iPad3,6</code></a></Link>
                            </li>
                            <li>
                                iPad (5th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad6,11"><a><code>iPad6,11</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad6,12"><a><code>iPad6,12</code></a></Link>
                            </li>
                            <li>
                                iPad (6th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,5"><a><code>iPad7,5</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,6"><a><code>iPad7,6</code></a></Link>
                            </li>
                            <li>
                                iPad (7th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,11"><a><code>iPad7,11</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,12"><a><code>iPad7,12</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingIPadAir">iPad Air</h3>
                        <ul>
                            <li>
                                iPad Air:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,1"><a><code>iPad4,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,2"><a><code>iPad4,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,3"><a><code>iPad4,3</code></a></Link>
                            </li>
                            <li>
                                iPad Air 2:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad5,4"><a><code>iPad5,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad5,4"><a><code>iPad5,4</code></a></Link>
                            </li>
                            <li>
                                iPad Air (3rd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad11,3"><a><code>iPad11,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad11,4"><a><code>iPad11,4</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingIPadMini">iPad mini</h3>
                        <ul>
                            <li>
                                iPad mini:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,5"><a><code>iPad2,5</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,6"><a><code>iPad2,6</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad2,7"><a><code>iPad2,7</code></a></Link>
                            </li>
                            <li>
                                iPad mini 2:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,4"><a><code>iPad4,4</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,5"><a><code>iPad4,5</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,6"><a><code>iPad4,6</code></a></Link>
                            </li>
                            <li>
                                iPad mini 3:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,7"><a><code>iPad4,7</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,8"><a><code>iPad4,8</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad4,9"><a><code>iPad4,9</code></a></Link>
                            </li>
                            <li>
                                iPad mini 4:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad5,1"><a><code>iPad5,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad5,2"><a><code>iPad5,2</code></a></Link>
                            </li>
                            <li>
                                iPad mini (5th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad11,1"><a><code>iPad11,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad11,2"><a><code>iPad11,2</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingIPadPro">iPad Pro</h3>
                        <ul>
                            <li>
                                iPad Pro 9.7":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad6,3"><a><code>iPad6,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad6,4"><a><code>iPad6,4</code></a></Link>
                            </li>
                            <li>
                                iPad Pro 12.9":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad6,7"><a><code>iPad6,7</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad6,8"><a><code>iPad6,8</code></a></Link>
                            </li>
                            <li>
                                iPad Pro (2nd generation) 12.9":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,1"><a><code>iPad7,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,2"><a><code>iPad7,2</code></a></Link>
                            </li>
                            <li>
                                iPad Pro (2nd generation) 10.5":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,3"><a><code>iPad7,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad7,4"><a><code>iPad7,4</code></a></Link>
                            </li>
                            <li>
                                iPad Pro (3rd generation) 11":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,1"><a><code>iPad8,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,2"><a><code>iPad8,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,3"><a><code>iPad8,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,4"><a><code>iPad8,4</code></a></Link>
                            </li>
                            <li>
                                iPad Pro (3rd generation) 12.9":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,5"><a><code>iPad8,5</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,6"><a><code>iPad8,6</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,7"><a><code>iPad8,7</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,8"><a><code>iPad8,8</code></a></Link>
                            </li>
                            <li>
                                iPad Pro (4th generation) 11":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,9"><a><code>iPad8,9</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,10"><a><code>iPad8,10</code></a></Link>
                            </li>
                            <li>
                                iPad Pro (4th generation) 12.9":{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,11"><a><code>iPad8,11</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPad8,12"><a><code>iPad8,12</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingListIPadAccessories">iPad Accessories</h3>
                        <Alert variant="primary">
                            The identifiers for the two generations of Apple Pencils and Smart Keyboards are currently unknown.
                            It is also unknown if they even run any form of iOS at all.
                        </Alert>
                        <ul>
                            <li>
                                Apple Pencil:{" "}
                                ???
                            </li>
                            <li>
                                Apple Pencil (2nd generation):{" "}
                                ???
                            </li>
                            <li>
                                Smart Keyboard:{" "}
                                ???
                            </li>
                            <li>
                                Smart Keyboard Folio:{" "}
                                ???
                            </li>
                        </ul>

                        <h3 id="headingListIPhone">iPhone</h3>
                        <ul>
                            <li>
                                iPhone:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone1,1"><a><code>iPhone1,1</code></a></Link>
                            </li>
                            <li>
                                iPhone 3G:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone1,2"><a><code>iPhone1,2</code></a></Link>
                            </li>
                            <li>
                                iPhone 3GS:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone2,1"><a><code>iPhone2,1</code></a></Link>
                            </li>
                            <li>
                                iPhone 4:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone3,1"><a><code>iPhone3,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone3,2"><a><code>iPhone3,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone3,3"><a><code>iPhone3,3</code></a></Link>
                            </li>
                            <li>
                                iPhone 4S:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone4,1"><a><code>iPhone4,1</code></a></Link>
                            </li>
                            <li>
                                iPhone 5:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone5,1"><a><code>iPhone5,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone5,2"><a><code>iPhone5,2</code></a></Link>
                            </li>
                            <li>
                                iPhone 5c:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone5,3"><a><code>iPhone5,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone5,4"><a><code>iPhone5,4</code></a></Link>
                            </li>
                            <li>
                                iPhone 5s:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone6,1"><a><code>iPhone6,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone6,2"><a><code>iPhone6,2</code></a></Link>
                            </li>
                            <li>
                                iPhone 6:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone7,2"><a><code>iPhone7,2</code></a></Link>
                            </li>
                            <li>
                                iPhone 6 Plus:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone7,1"><a><code>iPhone7,1</code></a></Link>
                            </li>
                            <li>
                                iPhone 6s:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone8,1"><a><code>iPhone8,1</code></a></Link>
                            </li>
                            <li>
                                iPhone 6s Plus:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone8,2"><a><code>iPhone8,2</code></a></Link>
                            </li>
                            <li>
                                iPhone SE:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone8,4"><a><code>iPhone8,4</code></a></Link>
                            </li>
                            <li>
                                iPhone 7:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone9,1"><a><code>iPhone9,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone9,3"><a><code>iPhone9,3</code></a></Link>
                            </li>
                            <li>
                                iPhone 7 Plus:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone9,2"><a><code>iPhone9,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone9,4"><a><code>iPhone9,4</code></a></Link>
                            </li>
                            <li>
                                iPhone 8:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone10,1"><a><code>iPhone10,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone10,4"><a><code>iPhone10,4</code></a></Link>
                            </li>
                            <li>
                                iPhone 8 Plus:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone10,2"><a><code>iPhone10,2</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone10,5"><a><code>iPhone10,5</code></a></Link>
                            </li>
                            <li>
                                iPhone 7:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone9,1"><a><code>iPhone9,1</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone9,3"><a><code>iPhone9,3</code></a></Link>
                            </li>
                            <li>
                                iPhone X:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone10,3"><a><code>iPhone10,3</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone10,6"><a><code>iPhone10,6</code></a></Link>
                            </li>
                            <li>
                                iPhone XS:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone11,2"><a><code>iPhone11,2</code></a></Link>
                            </li>
                            <li>
                                iPhone XS Max:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone11,4"><a><code>iPhone11,4</code></a></Link>,{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone11,6"><a><code>iPhone11,6</code></a></Link>
                            </li>
                            <li>
                                iPhone XR:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone11,8"><a><code>iPhone11,8</code></a></Link>
                            </li>
                            <li>
                                iPhone 11:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone12,1"><a><code>iPhone12,1</code></a></Link>
                            </li>
                            <li>
                                iPhone 11 Pro:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone12,3"><a><code>iPhone12,3</code></a></Link>
                            </li>
                            <li>
                                iPhone 11 Pro Max:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone12,5"><a><code>iPhone12,5</code></a></Link>
                            </li>
                            <li>
                                iPhone SE (2nd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPhone12,8"><a><code>iPhone12,8</code></a></Link>
                            </li>
                        </ul>

                        <h3 id="headingListIPodTouch">iPod touch</h3>
                        <ul>
                            <li>
                                iPod touch:{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod1,1"><a><code>iPod1,1</code></a></Link>
                            </li>
                            <li>
                                iPod touch (2nd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod2,1"><a><code>iPod2,1</code></a></Link>
                            </li>
                            <li>
                                iPod touch (3rd generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod3,1"><a><code>iPod3,1</code></a></Link>
                            </li>
                            <li>
                                iPod touch (4th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod4,1"><a><code>iPod4,1</code></a></Link>
                            </li>
                            <li>
                                iPod touch (5th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod5,1"><a><code>iPod5,1</code></a></Link>
                            </li>
                            <li>
                                iPod touch (6th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod7,1"><a><code>iPod7,1</code></a></Link>
                            </li>
                            <li>
                                iPod touch (7th generation):{" "}
                                <Link href="/file/deviceTree/[identifier]" as="/file/deviceTree/iPod9,1"><a><code>iPod9,1</code></a></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
