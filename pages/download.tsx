/* =============================================================================
 * File:   download.tsx
 * Author: Cole Tobin
 * =============================================================================
 * Copyright (c) 2022 Cole Tobin
 *
 * This file is part of iDecryptIt-Web.
 *
 * iDecryptIt-Web is free software: you can redistribute it and/or modify it
 *   under the terms of the GNU Affero General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or (at your
 *   option) any later version.
 *
 * iDecryptIt-Web is distributed in the hope that it will be useful, but WITHOUT
 *   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 *   FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 *   more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 *   along with iDecryptIt-Web. If not, see <http://www.gnu.org/licenses/>.
 * =============================================================================
 */

import A from "@components/A";
import Breadcrumb from "@components/Breadcrumb";
import Clear from "@components/Clear";
import DateTime from "@components/DateTime";
import Layout from "@components/Layout";
import Toc from "@components/Toc";

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="download" pageTitle="Download iDecryptIt" canonical="/download">
            <Layout.Title title="Download" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Download</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingCurrentVersion" text="Current Version" />
                    <Toc.Entry href="#headingHistory" text="History" />
                </Toc.Root>
                <p>
                    iDecryptIt is a Windows only program designed to decrypt the <A href="/file/root-fs">root filesystem</A>.
                    It&apos;s development was on hiatus for three and a half years and is currently in the process of a complete rewrite with added features.
                    Development historically took place on <A href="https://sourceforge.net/projects/idecryptit">SourceForge</A>, but is now taking place on <A href="https://github.com/colejohnson66/iDecryptIt">GitHub</A>.
                </p>

                <Clear />

                <h2 id="headingCurrentVersion">Current Version</h2>
                <p>
                    The current version of iDecryptIt is 11.41.1 (build <code>2I22</code>), released <DateTime value="2018-08-17" />.
                    It supports any version of iOS when provide with the correct key.
                    However, only keys from <A href="/ios/11.4">iOS 11.4.1</A> and below (that were known at release) are included.
                    It is available for download on <A href="https://sourceforge.net/projects/idecryptit/files/latest/download">SourceForge</A>.
                </p>

                <h2 id="headingHistory">History</h2>
                <p>
                    iDecryptIt version 1.0.0 (build <code>1C31</code>) was released <DateTime value="2011-05-24" />.
                    Since then, there have been over 20 releases.
                </p>
            </Layout.Content>
        </Layout.Root>
    );
}
