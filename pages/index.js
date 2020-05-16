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
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="home">
            <Container fluid>
                <Row>
                    <Col {...constants.columns.toc}>
                        {/* No TOC...yet */}
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>The iDecryptIt Website</h1>
                        <p>
                            Welcome to the iDecryptIt website.
                            This website was created to facilitate a one-stop shop for information regarding the firmwares used in iPhone OS, iOS, iPadOS, and tvOS.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
