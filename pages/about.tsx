/* =============================================================================
 * File:   about.tsx
 * Author: Cole Tobin
 * =============================================================================
 * Copyright (c) 2022 Cole Tobin
 *
 * This file is part of iFirmware.
 *
 * iFirmware is free software: you can redistribute it and/or modify it under
 *   the terms of the GNU Affero General Public License as published by the Free
 *   Software Foundation, either version 3 of the License, or (at your option)
 *   any later version.
 *
 * iFirmware is distributed in the hope that it will be useful, but WITHOUT ANY
 *   WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 *   FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License more
 *   details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with iFirmware. If not, see <http://www.gnu.org/licenses/>.
 * =============================================================================
 */

import A from "@components/A";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="about" pageTitle="About" canonical="/about">
            <Layout.Title title="About" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>About</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingStack" text="Software Stack" />
                    <Toc.Entry href="#headingSource" text="Open Source" />
                </Toc.Root>
                <p>
                    This website is designed to be a collection of all my knowledge regarding iOS firmwares.
                </p>
                <Clear />

                <h2 id="headingStack">Software Stack</h2>
                <p>
                    This site is build using <A href="https://nextjs.org/">Next.js</A> and deployed on <A href="https://vercel.com/">Vercel</A>.
                    {" "}<A href="https://tailwindcss.com/">Tailwind</A> is used for themeing.
                </p>
                {/* <p>
                    Additionally, <A href="https://www.npmjs.com/package/react-syntax-highlighter"><code>react-syntax-highlighter</code></A> is used.
                </p> */}

                <h2 id="headingSource">Open Source</h2>
                <p>
                    This site is open source and released under the <A href="https://opensource.org/licenses/AGPL-3.0">GNU AGPL 3.0 or later</A> license.
                    The source code is available on <A href="https://github.com/colejohnson66/iFirmware">GitHub</A>.
                </p>
            </Layout.Content>
        </Layout.Root>
    );
}
