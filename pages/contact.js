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
import constants from "../constants";

export default () => {
    return (
        <Layout title="Contact">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        {/* No TOC */}
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Contact</h1>
                        <p>
                            To contact me, Cole Johnson, please use one of the following methods:
                        </p>
                        <ul>
                            <li>iMessage: <i>coleharrisjohnson at icloud dot com</i> (emails sent here will be ignored)</li>
                            <li>The iPhone Wiki: <a href="https://theiphonewiki.com/wiki/User:5urd" className="external"><i>5urd</i></a></li>
                            <li>Email: <i>coleharrisjohnson at gmail dot com</i></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
