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
import Link from "next/link";
import constants from "../constants";

function Error({ statusCode }) {
    return (
        <Layout title={statusCode ? statusCode : "Unknown Error"}>
            <Container fluid>
                <Row>
                    <Col {...constants.columns.toc}>
                        {/* No TOC */}
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>{statusCode ? statusCode : "Unknown Error"}</h1>
                        <p>
                            An internal server error ocurred.
                            Please try again.
                        </p>
                        <p>
                            If this message persists, please <Link href="/contact"><a>contact me</a></Link> to report the problem.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : (err ? error.statusCode : 404);
    return { statusCode };
};

export default Error;
