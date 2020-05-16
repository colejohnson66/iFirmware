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
import { Breadcrumb, Col, Container, Figure, Row } from "react-bootstrap";

import Layout from "../../components/layout";
import Link from "next/link";
import TOC from "../../components/toc";
import constants from "../../constants";

export default () => {
    return (
        <Layout navGroup="file" title="AppleLogo">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active><Link href="/file"><a>Firmware Files</a></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>AppleLogo</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFormat" text="Payload Format" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>AppleLogo</h1>
                        <p>
                            The AppleLogo file is a simple glyph containing the Apple logo shown during boot.
                            On certain colored devices (such as white ones), the colors are inverted before being displayed to give a black logo on a white background.
                        </p>

                        <h2 id="headingFormat">Payload Format</h2>
                        <p>
                            Once extracted from the outer container (<Link href="/file/format/img2"><a>IMG2</a></Link>, <Link href="/file/format/img3"><a>IMG3</a></Link>, or <Link href="/file/format/img4"><a>IMG4</a></Link>), the AppleLogo is an <Link href="/file/format/iBootImage"><a>iBootImage</a></Link>.
                            The actual resolution of the AppleLogo image will generally <em>not</em> be the same as the resolution of the device's screen;
                            Instead, the AppleLogo is shown at a 1:1 scale in the center of the device.
                        </p>
                        <Figure>
                            <Figure.Image alt="" src="/img/ipswItems/appleLogo_iPhone1,1_1A543a.png" thumbnail />
                            <Figure.Caption>
                                AppleLogo extracted from the <Link href="/key/[...path]" as="/key/1A543a/iPhone1,1"><a>iPhone OS 1.0 (build <code>1A543a</code>) build for the original iPhone (<code>iPhone1,1</code>)</a></Link>.
                                The whitespace below the actual Apple logo is so that when the image is centered on the screen, Apple's logo is shifted up slightly.
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
