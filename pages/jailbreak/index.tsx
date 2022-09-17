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
                    <A href={`/jailbreak${url}`}>{name}</A>{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="jailbreak" pageTitle="Jailbreaks" canonical="/jailbreak">
            <Layout.Title title="Jailbreaks" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Jailbreaks</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingHistory" text="History" />
                    <Toc.Entry href="#headingSecurity" text="Security">
                        <Toc.Entry href="#headingScams" text="Scams" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingTypes" text="Types of Jailbreaks">
                        <Toc.Entry href="#headingBareBones" text="Bare Bones" />
                        <Toc.Entry href="#headingTethered" text="Tethered vs. Untethered" />
                        <Toc.Entry href="#headingSemiTethered" text="Semi-Tethered" />
                    </Toc.Entry>
                    <Toc.Entry href="#headingCompatibility" text="Jailbreak Compatibility">
                        <Toc.Entry href="#headingCompatibilityIOS" text="iPhone OS, iOS, and iPad OS" />
                        <Toc.Entry href="#headingCompatibilityTV" text="Apple TV (iOS and tvOS)" />
                        <Toc.Entry href="#headingCompatibilityWatchOS" text="watchOS" />
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    Jailbreaking is the process of patching iOS to break out of the &quot;jail&quot; imposed by the system on the user.
                    The jail is used to prevent access to the device as a <A href="https://en.wikipedia.org/wiki/Superuser">root</A> user.
                    This, in turn, prevents the user from changing system files and installing software not available through the official <A href="/ios/app/appStore">App Store</A>.
                </p>
                <p>
                    Apple&apos;s purported purpose of patching the holes is to prevent users from security vulnerabilities.
                    However, many have speculated that the real reason is to enforce distribution on the App Store, where Apple charges US$99 per year and takes up to 30% of the revenue.
                </p>

                <Clear />

                <h2 id="headingHistory">History</h2>
                <p>
                    Within days of the release of the <A href="/device/iphone/2g">original iPhone</A>, some people managed to break out of the jail.
                    Over the years, many jailbreaks have been released, with Apple playing a <A href="https://en.wikipedia.org/wiki/Cat_and_mouse">cat and mouse</A> game in attempts to patch the &quot;holes&quot; used to jailbreak.
                </p>

                <h2 id="headingSecurity">Security</h2>
                <p>
                    The security around jailbreaks is often a point of contention, with Apple claiming that doing so increases the risk of malware.
                    These malicious programs commonly come out after the release of a jailbreak and use the same vulnerabilities to access the device.
                    As such, many newer jailbreaks will include patches that close the security hole they used to access the device.
                </p>

                <h3 id="headingScams">Scams</h3>
                <p>
                    Over the years, there have been hundreds of jailbreaking scams.
                    These scams commonly come in the form of charging for a free jailbreak tool, or charging for a &quot;new&quot; tool that supports devices and iOS versions with no published exploits.
                    Other times, they are simply malware for your computer.
                </p>

                <h2 id="headingTypes">Types of Jailbreaks</h2>
                <p>
                    There exist many types of jailbreaks.
                    These range from being useless for the average user and are more for a proof of concept, to jailbreaks that only require the computer to install.
                </p>

                <h3 id="headingBareBones">Bare Bones</h3>
                <p>
                    The most simple form of jailbreaking involves patching <code>/private/var/fstab</code> to mount the root filesystem as read-write (instead of read-only).
                    This is most commonly used as a proof of concept.
                    An example involves the <A href="/device/tv/2g">second generation Apple TV</A>;
                    When it was first released, the first jailbreak tools only existed to perform a bare bones jailbreak.
                </p>
                <p>
                    With <A href="/ios/7">iOS 7</A>, Apple added a security feature that prevents the system from booting if it detects a modified <code>/private/var/fstab</code>.
                </p>

                <h3 id="headingTethered">Tethered vs. Untethered</h3>
                <p>
                    Whenever the device boots up, the kernel must be patched in order to allow &quot;unsigned&quot; software to run.
                    This is accomplished in many different ways, but some require a computer for every boot. This distinction has given rise to the terms &quot;untethered&quot; and &quot;tethered&quot; jailbreaks.
                </p>
                <p>
                    A &quot;tethered&quot; jailbreak is the most common kind.
                    Whenever the device boots up, it will detect the patched kernel and refuse to boot, instead going into <A href="https://www.theiphonewiki.com/wiki/Recovery_Mode">recovery mode</A>.
                    The way to fix this involves using a tool (typically provided with the jailbreaking software) to upload a temporary patch that will allow the device to boot.
                    As such, the name comes from the fact that your device must be &quot;tethered&quot; (connected) to a computer in order to boot.
                </p>
                <p>
                    In contrast, an &quot;untethered&quot; jailbreak does <em>not</em> require a computer to boot up.
                    These commonly utilize exploits in the bootrom that patch the code signing requirement.
                </p>

                <h3 id="headingSemiTethered">Semi-Tethered</h3>
                <p>
                    More recently, as Apple&apos;s system has become more strict, two new forms of jailbreaks have appeared: &quot;semi-tethered&quot; and &quot;semi-untethered.&quot;
                    As their names imply they are &quot;tethered&quot; in some sorts, and require software to patch the kernel every boot.
                    However, they are unique in that the device will boot and function normally without needing a patch on every boot.
                </p>
                <p>
                    A &quot;semi-tethered&quot; jailbreak is one where the device, in the absence of an exploit, will boot and function as if there is no jailbreak.
                    It will not have a patched kernel, and, as such, attempts to run unsigned apps like <A href="/ios/app/cydia">Cydia</A> will fail.
                    In order to fix this, the device must be rebooted and patched with the help of software external to the device (commonly provided with the jailbreaking software).
                </p>
                <p>
                    A &quot;semi-untethered&quot; jailbreak is similar to a semi-tethered one, but with a minor difference: the tool to run the exploits is on the device.
                    In other words, when a device is booted up, it will function as stock, but one can run an app that is present on the device to reboot and path the device.
                </p>

                <h2 id="headingCompatibility">Jailbreak Compatibility</h2>
                <h3 id="headingCompatibilityIOS">iPhone OS, iOS, and iPad OS</h3>
                {List([
                    ["/ios/1", "1.x"],
                    ["/ios/2", "2.x"],
                    ["/ios/3", "3.x"],
                    ["/ios/4", "4.x"],
                    ["/ios/5", "5.x"],
                    ["/ios/6", "6.x"],
                    ["/ios/7", "7.x"],
                    ["/ios/8", "8.x"],
                    ["/ios/9", "9.x"],
                    ["/ios/10", "10.x"],
                    ["/ios/11", "11.x"],
                    ["/ios/12", "12.x"],
                    ["/ios/13", "13.x"],
                    ["/ios/14", "14.x"],
                    ["/ios/15", "15.x"],
                    ["/ios/16", "16.x"],
                ])}

                <h3 id="headingCompatibilityTV">Apple TV (iOS and tvOS)</h3>
                {List([
                    ["/tv/4", "4.x"],
                    ["/tv/5", "5.x"],
                    ["/tv/6", "6.x"],
                    ["/tv/7", "7.x"],
                    ["/tv/8", "8.x"],
                    ["/tv/9", "9.x"],
                    ["/tv/10", "10.x"],
                    ["/tv/11", "11.x"],
                    ["/tv/12", "12.x"],
                    ["/tv/13", "13.x"],
                    ["/tv/14", "14.x"],
                    ["/tv/15", "15.x"],
                    ["/tv/16", "16.x"],
                ])}

                <h3 id="headingCompatibilityWatch">watchOS</h3>
                {List([
                    ["/watch/1", "1.x"],
                    ["/watch/2", "2.x"],
                    ["/watch/3", "3.x"],
                    ["/watch/4", "4.x"],
                    ["/watch/5", "5.x"],
                    ["/watch/6", "6.x"],
                    ["/watch/7", "7.x"],
                    ["/watch/8", "8.x"],
                    ["/watch/9", "9.x"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
