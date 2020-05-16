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
import { Alert, Breadcrumb, Col, Container, Row, Table } from "react-bootstrap";

import Layout from "../components/layout";
import Link from "next/link";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="jailbreak" title="Jailbreaks">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Jailbreaks</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingHistory" text="History" />
                            <TOC.Entry href="#headingSecurity" text="Security">
                                <TOC.Entry href="#headingScams" text="Scams" />
                            </TOC.Entry>
                            <TOC.Entry href="#headingTypes" text="Types of Jailbreaks">
                                <TOC.Entry href="#headingBareBones" text="Bare Bones" />
                                <TOC.Entry href="#headingTethered" text="Tethered vs. Untethered" />
                                <TOC.Entry href="#headingSemiTethered" text="Semi-Tethered" />
                            </TOC.Entry>
                            <TOC.Entry href="#headingCompatibility" text="Jailbreak Compatibility" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Jailbreaks</h1>
                        <p>
                            Jailbreaking is the process of patching iOS to break out of the "jail" imposed by the system on the user.
                            The jail is used to prevent access to the device as a <a href="https://en.wikipedia.org/wiki/Superuser" className="external">root</a> user.
                            This, in turn, prevents the user from changing system files and installing software not available through the official <Link href="/iOS/app/appStore"><a>App Store</a></Link>.
                        </p>
                        <p>
                            Apple's purported purpose of patching the holes is to prevent users from security vulnerabilities.
                            However, many have speculated that the real reason is to enforce distribution on the App Store, where Apple charges US$99 per year and takes up to 30% of the revenue.
                        </p>

                        <h2 id="headingHistory">History</h2>
                        <p>
                            Within days of the release of the <Link href="/device/iPhone/2g"><a>original iPhone</a></Link>, some people managed to break out of the jail.
                            Over the years, many jailbreaks have been released, with Apple playing a <a href="https://en.wikipedia.org/wiki/Cat_and_mouse">cat and mouse</a> game in attempts to patch the "holes" used to jailbreak.
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
                            These scams commonly come in the form of charging for a free jailbreak tool, or charging for a "new" tool that supports devices and iOS versions with no published exploits.
                            Other times, they are simply malware for your computer.
                        </p>

                        <h2 id="headingTypes">Types of Jailbreaks</h2>
                        <p>
                            There exist many types of jailbreaks.
                            These range from being useless for the average user and are more for a proof of concept, to jailbreaks that only require the computer to install.
                        </p>

                        <h3 id="headingBareBones">Bare Bones</h3>
                        <p>
                            The most simple form of jailbreaking involves patching <Link href="/fs/[...path]" as="/fs/private/etc/fstab"><a><code>/private/var/fstab</code></a></Link> to mount the <Link href="/fs"><a>root filesystem</a></Link> as read-write (instead of read-only).
                            This is most commonly used as a proof of concept.
                            A common example involves the <Link href="/device/appleTV/2g"><a>second generation Apple TV</a></Link>;
                            When it was first released, the first jailbreak tools only existed to perform a bare bones jailbreak.
                        </p>
                        <p>
                            With <Link href="/iOS/7"><a>iOS 7</a></Link>, Apple added a security feature that prevents the system from booting if it detects a modified <code>/private/var/fstab</code>.
                        </p>

                        <h3 id="headingTethered">Tethered vs. Untethered</h3>
                        <p>
                            Whenever the device boots up, the kernel must be patched in order to allow "unsigned" software to run.
                            This is accomplished in many different ways, but some require a computer for every boot. This distinction has given rise to the terms "untethered" and "tethered" jailbreaks.
                        </p>
                        <p>
                            A "tethered" jailbreak is the most common kind.
                            Whenever the device boots up, it will detect the patched kernel and refuse to boot, instead going into <a href="https://www.theiphonewiki.com/wiki/Recovery_Mode" className="external">recovery mode</a>.
                            The way to fix this involves using a tool (typically provided with the jailbreaking software) to upload a temporary patch that will allow the device to boot.
                            As such, the name comes from the fact that your device must be "tethered" (connected) to a computer in order to boot.
                        </p>
                        <p>
                            In contrast, an "untethered" jailbreak does <em>not</em> require a computer to boot up.
                            These commonly utilize exploits in the bootrom that patch the code signing requirement.
                        </p>

                        <h3 id="headingSemiTethered">Semi-Tethered</h3>
                        <p>
                            More recently, as Apple's system has become more strict, two new forms of jailbreaks have appeared: "semi-tethered" and "semi-untethered."
                            As their names imply they are "tethered" in some sorts, and require software to patch the kernel every boot.
                            However, they are unique in that the device will boot and function normally without needing a patch on every boot.
                        </p>
                        <p>
                            A "semi-tethered" jailbreak is one where the device, in the absence of an exploit, will boot and function as if there is no jailbreak.
                            It will not have a patched kernel, and, as such, attempts to run unsigned apps like <Link href="/iOS/app/cydia"><a>Cydia</a></Link> will fail.
                            In order to fix this, the device must be rebooted and patched with the help of software external to the device (commonly provided with the jailbreaking software).
                        </p>
                        <p>
                            A "semi-untethered" jailbreak is similar to a semi-tethered one, but with a minor difference: the tool to run the exploits is on the device.
                            In other words, when a device is booted up, it will function as stock, but one can run an app that is present on the device to reboot and path the device.
                        </p>

                        <h2 id="headingCompatibility">Jailbreak Compatibility</h2>
                        <Alert variant="primary">
                            While the Apple TV and Apple Watch both run iOS internally, their compatibility charts are listed separately from the iOS/iPadOS ones.
                            This is due to the fact that their version numbers are different.
                            For example, despite running code based on iOS 5.0, the Apple TV would report it was running 4.4, 4.4.1, or 4.4.2 (depending on the build).
                            So, for consistency, their jailbreak compatibility charts are grouped based on their <em>internal</em> version, not the marketing version.
                            This distinction was removed with <i>tvOS</i>.
                        </Alert>
                        <ul>
                            <li>
                                iPhone OS / iOS / iPadOS:{" "}
                                <Link href="/jailbreak/iOS/1"><a>1.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/2"><a>2.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/3"><a>3.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/4"><a>4.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/5"><a>5.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/6"><a>6.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/7"><a>7.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/8"><a>8.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/9"><a>9.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/10"><a>10.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/11"><a>11.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/12"><a>12.x</a></Link>,{" "}
                                <Link href="/jailbreak/iOS/13"><a>13.x</a></Link>
                            </li>
                            <li>
                                Apple TV (iOS / tvOS):{" "}
                                <Link href="/jailbreak/appleTV/4"><a>4.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/5"><a>5.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/6"><a>6.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/7"><a>7.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/8"><a>8.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/9"><a>9.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/10"><a>10.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/11"><a>11.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/12"><a>12.x</a></Link>,{" "}
                                <Link href="/jailbreak/appleTV/13"><a>13.x</a></Link>
                            </li>
                            <li>
                                watchOS:{" "}
                                <Link href="/jailbreak/watch/1"><a>1.x</a></Link>,{" "}
                                <Link href="/jailbreak/watch/2"><a>2.x</a></Link>,{" "}
                                <Link href="/jailbreak/watch/3"><a>3.x</a></Link>,{" "}
                                <Link href="/jailbreak/watch/4"><a>4.x</a></Link>,{" "}
                                <Link href="/jailbreak/watch/5"><a>5.x</a></Link>,{" "}
                                <Link href="/jailbreak/watch/5"><a>6.x</a></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
