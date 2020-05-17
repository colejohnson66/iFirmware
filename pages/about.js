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
                            <TOC.Entry href="#headingStack" text="Software Stack" />
                            <TOC.Entry href="#headingSource" text="Open Source" />
                            <TOC.Entry href="#headingLicenses" text="Licenses">
                                <TOC.Entry href="#headingLicenseNextJS" text="Next.js" />
                                <TOC.Entry href="#headingLicenseBootstrap" text="Bootstrap" />
                                <TOC.Entry href="#headingLicenseReactBootstrap" text="React Bootstrap" />
                            </TOC.Entry>
                        </TOC.Root>
                    </Col>
                    <Col {...constants.columns.content}>
                        <h1>About</h1>
                        <p>
                            This site was created to assist <a href="https://theiphonewiki.com" className="external">The iPhone Wiki</a> in storage of information regarding iOS firmwares.
                            However, this has grown to including information regarding devices, jailbreaks, and more.
                        </p>

                        <h2 id="headingStack">Software Stack</h2>
                        <p>
                            This site is build using <a href="https://nextjs.org/" className="external">Next.js</a> and deployed on <a href="https://vercel.com/" className="external">Vercel</a>.
                            {" "}<a href="https://react-bootstrap.github.io/" className="external">React Bootstrap</a> is used for theming and layout.
                        </p>

                        <h2 id="headingSource">Open Source</h2>
                        <p>
                            This site is open source and released under the GNU <a href="https://opensource.org/licenses/AGPL-3.0" className="external">AGPL 3.0 or later</a> license.
                            The source code is available on <a href="https://github.com/colejohnson66/idecryptit-web" className="external">GitHub</a>.
                        </p>

                        <h2 id="headingLicenses">Licenses</h2>

                        <h3 id="headingLicenseNextJS">Next.js</h3>
                        <p>
                            This website is built on Next.js.
                            The license is available on <a href="https://github.com/zeit/next.js/blob/canary/license.md" className="external">GitHub</a> as well.
                        </p>
                        <pre>{`The MIT License (MIT)

Copyright (c) 2020 Vercel, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</pre>

                        <h3 id="headingLicenseBootstrap">Bootstrap</h3>
                        <p>
                            Bootstrap is utilized by React Bootstrap.
                            The license is available on <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" className="external">GitHub</a> as well.
                        </p>
                        <pre>{`The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.
Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`}</pre>

                        <h3 id="headingLicenseReactBootstrap">React Bootstrap</h3>
                        <p>
                            The theming and layout for this website is done using React Bootstrap.
                            The license is available on <a href="https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE" className="external">GitHub</a> as well.
                        </p>
                        <pre>{`The MIT License (MIT)

Copyright (c) 2014-present Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`}</pre>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
