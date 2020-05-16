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
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="about" title="About">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingSource" text="Open Source" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>About</h1>
                        <p>
                            This site was created to assist <a href="https://theiphonewiki.com" className="external">The iPhone Wiki</a> in storage of information regarding iOS firmwares.
                            However, this has grown to including information regarding devices, jailbreaks, and more.
                        </p>

                        <h2 id="headingSource">Open Source</h2>
                        <p>
                            This site is  <a href="https://github.com/HexwareSoftware/idecryptit-web" className="external">open source</a> and released under the GNU <a href="https://opensource.org/licenses/AGPL-3.0" className="external">AGPL 3.0 or later</a> license.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
