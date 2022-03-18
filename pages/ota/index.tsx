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

function List(prefix: string, versions: [string, string[]][]): React.ReactElement {
    return (
        <dd>
            {versions.map(([major, minors]) => (
                <React.Fragment key={major}>
                    <dt>{major}</dt>
                    <dd>
                        {/* each minor version gets its own <dd> row */}
                        {minors.map((minor, idx) => (
                            <React.Fragment key={minor}>
                                <A href={`/key${prefix}/${minor}`}>{minor}</A>
                                {idx !== minors.length - 1 && ", "}
                            </React.Fragment>
                        ))}
                    </dd>
                </React.Fragment>
            ))}
        </dd>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="ota" pageTitle="OTA Updates" canonical="/ota">
            <Layout.Title title="OTA Updates" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="#">Stub</Breadcrumb.Item>
                <Breadcrumb.Item>OTA Updates</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingIssues" text="Issues with Jailbreaking" />
                    <Toc.Entry href="#headingContents" text="Contents">
                        <Toc.Entry href="#headingVersion1" text="Version 1" />
                        <Toc.Entry href="#headingVersion2" text="Version 2" />
                        <Toc.Entry href="#headingVersion3" text="Version 3" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingList" text="List of OTA Updates">
                        <Toc.Entry href="#headingAirPods" text="AirPods" />
                        <Toc.Entry href="#headingAppleTV" text="Apple TV">
                            <Toc.Entry href="#headingAppleTVAccessories" text="Accessories" />
                        </Toc.Entry>
                        <Toc.Entry href="#headingAppleWatch" text="Apple Watch" />
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
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    OTA (over the air) updates were introduced with <A href="/ios/5">iOS 5</A>.
                    They allow a user to update the firmware on their device without the desktop iTunes program.
                </p>

                <Clear />

                <h2 id="headingContents">Contents</h2>
                <p>
                    There are three known versions of the update file containers.
                </p>

                <h3 id="headingVersion1">Version 1</h3>
                <p>
                    Version 1 updates came first, and were replaced with <A href="#headingVersion2">version 2</A> with iOS ???.
                    They contain four main files:
                </p>
                <dd>
                    <dt><code>archive.cpio.gz</code></dt>
                    <dd>The actual encrypted patch archive.</dd>
                    <dd>It is a collection of <code>BSDIFF40</code> and the requisite flashing tools (<code>bbupdater</code>, <code>imeisv</code>, etc.).</dd>

                    <dt><code>Info.plist</code> <span className="font-normal">and</span> <code>Info.plist.signature</code></dt>
                    <dd>Information about the update and an accompanying signature.</dd>

                    <dt><code>libupdate_brain.dylib</code></dt>
                    <dd>A code library for stage 2 of the update process.</dd>
                </dd>

                <h3 id="headingVersion2">Version 2</h3>
                <p>
                    Version 2 updates were introduced with iOS ???.
                    Instead of an <code>archive.cpio.gz</code> file, they contain two folders: <code>added</code> and <code>patches</code>.
                    As their names imply, <code>added</code> contains unencrypted files to be added to the filesystem while <code>patches</code> contains <code>BSDIFF40</code> files of files that need to be patched.
                </p>

                <h3 id="headingVersion3">Version 3</h3>
                <p>
                    Version 3 updates were introduced with iOS ???.
                    Quite a number of changes were made to the structure.
                    The most major changes are listed below:
                </p>
                <ul>
                    <li>
                        The <code>added</code> folder no longer exists.
                    </li>
                    <li>
                        <code>links.txt</code> was added.
                        It contains a list of <a href="https://en.wikipedia.org/wiki/Symbolic_link" className="external">symbolic links</a> (symlinks) to be created.
                    </li>
                    <li>
                        The <code>patches</code> folder contents no longer use the <code>BSDIFF40</code> file format, but a modified version known as <code>BXDIFF41</code>.
                    </li>
                    <li>
                        <code>payload</code> and <code>prepare_payload</code> were added.
                        They hold the filesystem contents in a proprietary format.
                    </li>
                    <li>
                        <code>removed.txt</code> was added.
                        It contains a list of files to be deleted prior to updating.
                    </li>
                </ul>

                <h2 id="headingList">List of OTA Updates</h2>
                <p>
                    This is a comprehensive list of every OTA update that has been released to the public.
                </p>

                <h3 id="headingAirPods">AirPods</h3>
                ...

                <h3 id="headingAppleTV">Apple TV</h3>
                <p>
                    Note: Apple TV updates are organized by their <em>marketing</em> version (the one displayed in the Settings app), not the version of iOS it is based on.
                    Also of note: Apple TVs never received versions marketed as 8.x.
                </p>
                {List("/tv", [
                    ["4.x", ["4.0", "4.1", "4.1.1", "4.2", "4.2.1", "4.2.2", "4.3", "4.4", "4.4.1", "4.4.2", "4.4.3", "4.4.4"]],
                    ["5.x", ["5.0", "5.0.1", "5.0.2", "5.1", "5.1.1", "5.2", "5.2.1", "5.3"]],
                    ["6.x", ["6.0", "6.0.1", "6.0.2", "6.1", "6.1.1", "6.2", "6.2.1"]],
                    ["7.x", ["7.0", "7.0.1", "7.0.2", "7.0.3", "7.1", "7.2", "7.2.1", "7.2.2", "7.3", "7.3.1", "7.4", "7.5", "7.6", "7.6.1", "7.6.2", "7.7", "7.8", "7.9"]],
                    ["9.x", ["9.0", "9.0.1", "9.1", "9.1.1", "9.2", "9.2.1", "9.2.2"]],
                    ["10.x", ["10.0", "10.0.1", "10.1", "10.1.1", "10.2", "10.2.1", "10.2.2"]],
                    ["11.x", ["11.0", "11.1", "11.2", "11.2.1", "11.2.5", "11.2.6", "11.3", "11.4", "11.4.1"]],
                    ["12.x", ["12.0", "12.0.1", "12.1", "12.1.1", "12.1.2", "12.2", "12.2.1", "12.3", "12.4", "12.4.1"]],
                    ["13.x", ["13.0", "13.2", "13.3", "13.3.1", "13.4", "13.4.5", "13.4.6", "13.4.8"]],
                    ["14.x", ["14.0", "14.0.1", "14.0.2", "14.2", "14.3", "14.4", "14.5", "14.6", "14.7"]],
                    ["15.x", ["15.0", "15.1", "15.1.1", "15.2", "15.3", "15.4"]],
                ])}

                <h4 id="headingAppleTVAccessories">Accessories</h4>
                ...

                <h3 id="headingAppleWatch">Apple Watch</h3>
                {List("/watch", [
                    ["1.x", ["1.0.1"]],
                ])}
                ...

                <h3 id="headingHomePod">HomePod</h3>
                ...

                <h3 id="headingIPad">iPad</h3>
                ...

                <h4 id="headingIPadIPad">iPad</h4>
                ...

                <h4 id="headingIPadIPadAir">iPad Air</h4>
                ...

                <h4 id="headingIPadIPadMini">iPad mini</h4>
                ...

                <h4 id="headingIPadIPadPro">iPad Pro</h4>
                ...

                <h4 id="headingIPadIPadAccessories">Accessories</h4>
                ...

                <h3 id="headingIPhone">iPhone</h3>
                ...

                <h3 id="headingIPodTouch">iPod touch</h3>
                ...
            </Layout.Content>
        </Layout.Root>
    );
}
