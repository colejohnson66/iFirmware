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

import DateTime from "../components/dateTime";
import Layout from "../components/layout";
import Link from "next/link";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="download" title="Download">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Download</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingCurrentVersion" text="Current Version">
                                <TOC.Entry href="#headingDownload" text="Download" />
                            </TOC.Entry>
                            <TOC.Entry href="#headingHistory" text="Version History" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Download iDecryptIt</h1>
                        <p>
                            iDecryptIt is a Windows only program designed to decrypt the <Link href="/file/rootFS"><a>root filesystem</a></Link>, similar to the <Link href="/decrypt"><a>decryption page</a></Link> on this website.
                            Currently, its development is suspended indefinitely.
                        </p>

                        <h2 id="headingCurrentVersion">Current Version</h2>
                        <p>
                            The current version of iDecryptIt is 11.41.1 (build <code>2I22</code>), released <DateTime dateTime="2018-08-17" />.
                            It supports any version of iOS when provided with the correct key.
                            However, only keys from <Link href="/ios/11.4"><a>iOS 11.4.1</a></Link> and below are included.
                        </p>

                        <h3 id="headingDownload">Download</h3>
                        <p>
                            iDecryptIt version 11.41.1 (build <code>2I22</code>) is available for download on <a href="https://sourceforge.net/projects/idecryptit/files/latest/download">SourceForge</a>.
                        </p>

                        <h2 id="headingHistory">Version History</h2>
                        <p>
                            iDecryptIt version 1.0.0 (build <code>1C31</code>) was released on <DateTime dateTime="2011-05-24" />.
                            Since then, there have been over 20 releases.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
