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
import DateTime from "@components/DateTime";
import Layout from "@components/Layout";
import Ref from "@components/Ref";
import Toc from "@components/Toc";

function List(args: [string, string, string?][]): React.ReactElement {
    return (
        <ul>
            {args.map(([url, name, paren]) => (
                <li key={url}>
                    <A href={`/ios${url}`}>{name}</A>{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="ios" pageTitle="iOS" canonical="/ios">
            <Layout.Title title="iOS" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="#">Stub</Breadcrumb.Item>
                <Breadcrumb.Item>iOS</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingHistory" text="History">
                        <Toc.Entry href="#headingName" text="Name" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingArchitecture" text="Architecture" />
                    <Toc.Entry href="#headingBloat" text="Installation Size" />
                    {/* <Toc.Entry href="#headingApps" text="Apps" /> */}
                    <Toc.Entry href="#headingVersions" text="Versions of iOS">
                        <Toc.Entry href="#headingVersionsAppleTV" text="tvOS" />
                        <Toc.Entry href="#headingVersionsWatch" text="watchOS" />
                        <Toc.Entry href="#headingVersionsIPad" text="iPadOS" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingReferences" text="References" />
                </Toc.Root>
                <p>
                    iOS, formally known as iPhone OS, is the operating system for all <A href="/device">iDevices</A>.
                </p>

                <Clear />

                <h2 id="headingHistory">History</h2>
                <p>
                    iPhone OS began in <DateTime value="2005" /> and was announced alongside the <A href="/device/iphone/2g">original iPhone</A> at the Macworld Conference &amp; Expo on <DateTime value="2007-01-09" />.
                    Later that year, on <DateTime value="2007-06-27" />, the original iPhone was released to the world with (what is now) <A href="/ios/1">iPhone OS 1.0</A>.
                </p>

                <h3 id="headingName">Name</h3>
                <p>
                    Initially, iOS didn't even have a name;
                    It was initially just said to run a trimmed down version of <A href="https://en.wikipedia.org/wiki/MacOS">Mac OS X</A> (now <i>macOS</i>).
                    With the release of the <A href="/ios/2">iPhone OS 2</A> and <A href="/ios/sdk">iPhone SDK</A>, Apple dubbed it <i>iPhone OS</i>.
                    Initially chosen as it was what ran on the iPhone, it later was utilized by the iPod touch, iPad, and Apple TV (second generation and newer).
                    As such, iPhone OS was renamed &quot;iOS&quot; with the <A href="/ios/4">fourth major version</A>.
                    This name was utilized for all <A href="/device">iDevices</A> for many years.
                </p>
                <p>
                    With the release of the <A href="/device/watch/1g">original Apple Watch</A> on <DateTime value="2015-04-24" />, Apple released &quot;watchOS&quot;, a trimmed down version of iOS that's designed for the small screen of the Watch.
                    Unlike the (then unreleased) tvOS and iPadOS which kept version number parity with iOS, the original Apple Watch was released with <A href="/ios/watch/1">watchOS 1.0</A>, based on <A href="/ios/8/2">iOS 8.2</A>.
                </p>
                <p>
                    Later that year, with the release of the <A href="/device/tv/4g">fourth generation Apple TV</A> in <DateTime value="2015-10" />, Apple released <A href="/ios/tv/9">&quot;tvOS&quot; 9</A> alongside iOS 9.
                    tvOS, like watchOS, is (internally) still iOS, but designed for a <A href="https://en.wikipedia.org/wiki/10-foot_user_interface">10-foot user interface</A>.
                    The <A href="/device/tv/2g">second</A> and <A href="/device/tv/3g">third</A> generation Apple TVs however, continued to use the &quot;iOS&quot; branding.
                </p>
                <p>
                    Four years after the release of iOS 9, with <A href="/ios/13">iOS 13</A>, Apple again rebranded iOS, but this time for their iPad line of products.
                    The resulting operating system was named &quot;iPadOS&quot;.
                    According to Apple, the change was made to differentiate the iPad from the iPhone and iPod touch lines as it (iPadOS) would contain a greater emphasis on multitasking.
                    <Ref.Link name="AppleUnveilsIPadOS" />
                </p>

                <h2 id="headingArchitecture">Architecture</h2>
                <p>
                    iOS (and watchOS, tvOS, and iPadOS) feature(s) a <A href="http://en.wikipedia.org/wiki/Hybrid_kernel">hybrid kernel</A> known as <A href="https://en.wikipedia.org/wiki/XNU">XNU</A>.
                    It is mostly programmed in ARM assembly, C, C++, Objective-C, and Swift.
                    As XNU is <A href="https://en.wikipedia.org/wiki/Unix-like">Unix-like</A>, it uses "union mounting" (compared to the Windows way of using drive letters).
                    The flash is partitioned into two separate blocks: one for the operating system (mounted at <code>/</code>) and one for the user data (mounted at <code>/private/var</code>).
                </p>

                <h2 id="headingBloat">Installation Size</h2>
                <p>
                    Over the years, iOS has required more and more space as the operating system has become more complex.
                    Initially, iPhone OS required less than half a gigabyte to function, but with almost each major release, the root filesystem partition grew bigger.
                    Currently, <A href="/ios/13">iOS 13</A> will claim over six gigabytes for itself.
                </p>

                <h2 id="headingVersions">Versions of iOS</h2>
                <p>
                    Apple has maintained a steady release schedule with iOS&apos; (and related) major releases;
                    A new major version is released with every new flagship iPhone.
                    Currently, iOS is on it's 15th <em>major</em> release with iOS 16 expected to be announced at WWDC 2022.
                </p>
                {/* <p>
                    Each link below will take you to a page dedicated to that major version and its new features.
                    In addition, each page will contain a full version history of that major version.
                </p> */}
                {List([
                    ["/1", "iPhone OS 1"],
                    ["/2", "iPhone OS 2"],
                    ["/3", "iPhone OS 3"],
                    ["/4", "iOS 4"],
                    ["/5", "iOS 5"],
                    ["/6", "iOS 6"],
                    ["/7", "iOS 7"],
                    ["/8", "iOS 8"],
                    ["/9", "iOS 9"],
                    ["/10", "iOS 10"],
                    ["/11", "iOS 11"],
                    ["/12", "iOS 12"],
                    ["/13", "iOS 13"],
                    ["/14", "iOS 14"],
                    ["/15", "iOS 15"],
                ])}

                <h3 id="headingVersionsAppleTV">tvOS</h3>
                {List([
                    ["/tv/9", "tvOS 9"],
                    ["/tv/10", "tvOS 10"],
                    ["/tv/11", "tvOS 11"],
                    ["/tv/12", "tvOS 12"],
                    ["/tv/13", "tvOS 13"],
                    ["/tv/14", "tvOS 14"],
                    ["/tv/15", "tvOS 15"],
                ])}

                <h3 id="headingVersionsWatch">watchOS</h3>
                {List([
                    ["/watch/1", "watchOS 1"],
                    ["/watch/2", "watchOS 2"],
                    ["/watch/3", "watchOS 3"],
                    ["/watch/4", "watchOS 4"],
                    ["/watch/5", "watchOS 5"],
                    ["/watch/6", "watchOS 6"],
                    ["/watch/7", "watchOS 7"],
                    ["/watch/8", "watchOS 8"],
                ])}

                <h3 id="headingVersionsIPad">iPadOS</h3>
                {List([
                    ["/ipad/13", "iPadOS 13"],
                    ["/ipad/14", "iPadOS 14"],
                    ["/ipad/15", "iPadOS 15"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
