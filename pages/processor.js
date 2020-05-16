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
import { Alert, Breadcrumb, Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout";
import Link from "next/link";
import TOC from "../components/toc";
import constants from "../constants";

export default () => {
    return (
        <Layout navGroup="processor" title="Processors">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item active>Processors</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col {...constants.columns.toc}>
                        <TOC.Root>
                            <TOC.Entry href="#headingMainline" text="Mainline Processors" />
                            <TOC.Entry href="#headingOther" text="Other Processors" />
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>Processors</h1>
                        <p>
                            Over the years, Apple has used many different processors.
                            Originally, "off the shelf" processors were used such as the <Link href="/processor/s5l8900"><a>S5L8900</a></Link>, which is an <code>ARM1176JZF-S</code>.
                            However, beginning with the <Link href="/processor/s5l8930"><a>S5L8930</a></Link> (A4), Apple began designing their own custom silicon.
                        </p>

                        <h2 id="headingMainline">Mainline Processors</h2>
                        <Alert variant="primary">
                            The processors used by the Apple Watch and other devices are <Link href="#headingOther"><a>listed separately</a></Link>.
                        </Alert>
                        <p>
                            This list is sorted <em>roughly</em> in chronological order.
                        </p>
                        <ul>
                            <li><Link href="/processor/s5l8900"><a>S5L8900</a></Link></li>
                            <li><Link href="/processor/s5l8720"><a>S5L8720</a></Link></li>
                            <li><Link href="/processor/s5l8920"><a>S5L8920</a></Link></li>
                            <li><Link href="/processor/s5l8922"><a>S5L8922</a></Link></li>
                            <li><Link href="/processor/s5l8930"><a>S5L8930</a></Link> (A4)</li>
                            <li><Link href="/processor/s5l8940"><a>S5L8940</a></Link> (A5)</li>
                            <li><Link href="/processor/s5l8942"><a>S5L8942</a></Link> (A5 Rev A)</li>
                            <li><Link href="/processor/s5l8945"><a>S5L8945</a></Link> (A5X)</li>
                            <li><Link href="/processor/s5l8947"><a>S5L8947</a></Link> (A5 Rev B)</li>
                            <li><Link href="/processor/s5l8950"><a>S5L8950</a></Link> (A6)</li>
                            <li><Link href="/processor/s5l8955"><a>S5L8955</a></Link> (A6X)</li>
                            <li><Link href="/processor/s5l8960"><a>S5L8960</a></Link> (A7)</li>
                            <li><Link href="/processor/s5l8965"><a>S5L8965</a></Link> (A7 Variant)</li>
                            <li><Link href="/processor/t7000"><a>T7000</a></Link> (A8)</li>
                            <li><Link href="/processor/t7001"><a>T7001</a></Link> (A8X)</li>
                            <li><Link href="/processor/s8000"><a>S8000</a></Link> (A9 - Samsung)</li>
                            <li><Link href="/processor/s8003"><a>S8003</a></Link> (A9 - TSMC)</li>
                            <li><Link href="/processor/s8001"><a>S8001</a></Link> (A9X)</li>
                            <li><Link href="/processor/t8010"><a>T8010</a></Link> (A10 "Fusion")</li>
                            <li><Link href="/processor/t8011"><a>T8011</a></Link> (A10X "Fusion")</li>
                            <li><Link href="/processor/t8015"><a>T8015</a></Link> (A11 "Bionic")</li>
                            <li><Link href="/processor/t8020"><a>T8020</a></Link> (A12 "Bionic")</li>
                            <li><Link href="/processor/t8027"><a>T8027</a></Link> (A12X "Bionic")</li>
                            <li><Link href="/processor/t8030"><a>T8030</a></Link> (A13 "Bionic")</li>
                        </ul>

                        <h2 id="headingOther">Other Processors</h2>
                        <ul>
                            <li><Link href="/processor/s7002"><a>S7002</a></Link> (S1)</li>
                            <li><Link href="/processor/t8002"><a>T8002</a></Link> (S1P)</li>
                            <li><Link href="/processor/t8004"><a>T8004</a></Link> (S3)</li>
                            <li><Link href="/processor/t8006"><a>T8006</a></Link> (S4)</li>
                            <li><Link href="/processor/w1"><a>W1</a></Link></li>
                            <li><Link href="/processor/w2"><a>W2</a></Link></li>
                            <li><Link href="/processor/w3"><a>W3</a></Link></li>
                            <li><Link href="/processor/t8012"><a>T8011</a></Link> (T2)</li>
                            <li><Link href="/processor/t2002"><a>T2002</a></Link> (H1)</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
