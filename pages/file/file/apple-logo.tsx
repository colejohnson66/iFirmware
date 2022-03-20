/* =============================================================================
 * File:   apple-logo.tsx
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

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="file" pageTitle="AppleLogo" canonical="/file/file/apple-logo">
            <Layout.Title title="AppleLogo" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/file">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item>AppleLogo</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingFormat" text="Payload Format" />
                </Toc.Root>
                <p>
                    The AppleLogo file is a simple glyph containing the Apple logo shown during boot.
                    On certain colored devices (such as white ones), the colors are inverted before being displayed to give a black logo on a white background.
                </p>

                <Clear />

                <h2 id="headingFormat">Payload Format</h2>
                <p>
                    Once extracted from the outer container (<A href="/file/format/img2">IMG2</A>, <A href="/file/format/img3">IMG3</A>, or <A href="/file/format/img4">IMG4</A>), the AppleLogo is an <A href="/file/format/iboot-image">iBootImage</A>.
                    The actual resolution of the AppleLogo image will generally <em>not</em> be the same as the resolution of the device&apos;s screen;
                    Instead, the AppleLogo is shown at a 1:1 scale in the center of the device.
                </p>
                {/* TODO: <Figure>
                    <Figure.Image alt="" src="/img/ipswItems/appleLogo_iPhone1,1_1A543a.png" thumbnail />
                    <Figure.Caption>
                        AppleLogo extracted from the <Link href="/key/[...path]" as="/key/1A543a/iPhone1,1"><a>iPhone OS 1.0 (build <code>1A543a</code>) build for the original iPhone (<code>iPhone1,1</code>)</a></Link>.
                        The whitespace below the actual Apple logo is so that when the image is centered on the screen, Apple's logo is shifted up slightly.
                    </Figure.Caption>
                </Figure> */}
            </Layout.Content>
        </Layout.Root>
    );
}
