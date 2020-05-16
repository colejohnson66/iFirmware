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
import Link from "next/link";
import TOC from "../components/toc";
import WIP from "../components/wip";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="fs" title="Filesystem Browser">
            <Container fluid>
                <WIP />
                <Breadcrumb>
                    <Breadcrumb.Item active>Filesystem Browser</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingFolders" text="Folders" />
                            <TOC.Entry href="#headingFiles" text="Files" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Filesystem Browser</h1>
                        <p>
                            iOS is a <a href="https://en.wikipedia.org/wiki/Unix-like" className="external">Unix-like</a> operating system utilizing "union mounting" instead of drive letters.
                        </p>

                        <h2 id="headingFolders">Folders</h2>
                        ...

                        <h2 id="headingFiles">Files</h2>
                        ...
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
