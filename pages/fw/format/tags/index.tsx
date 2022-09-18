/* =============================================================================
 * File:   index.tsx
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
import NoWrap from "@components/NoWrap";
import Toc from "@components/Toc";

function TagList(args: [string, React.ReactNode?, string?][]): React.ReactElement {
    return (
        <ul>
            {args.map(([tag, description, paren]) => (
                <li key={tag}>
                    <A href={`/fw/format/tags/${tag.toLowerCase()}`}><code>{tag}</code></A>{description && <>: {description}</>}{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle="Firmware Tags" canonical="/fw/format/tags">
            <Layout.Title title="Firmware Tags" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item>Tags</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingWhyTags" text="Purpose of Tags" />
                    <Toc.Entry href="#headingFormat" text="Format">
                        <Toc.Entry href="#headingFormatImg3" text="IMG3" />
                        {/* <Toc.Entry href="#headingFormatImg4" text="IMG4" /> */}
                    </Toc.Entry>
                    <Toc.Entry href="#headingTagList" text="List of Known Tags" />
                </Toc.Root>
                <p>
                    An IMG3 or IMG4 firmware &quot;tag&quot; is a four byte code that indicates the data contained in the current chunk.
                </p>

                <Clear />

                <h2 id="headingWhyTags">Purpose of Tags</h2>
                <p>
                    Normally, the contents of these &quot;tags&quot; would be contained in the header &quot;struct&quot; of the whole file, like what the <A href="/fw/format/img2">IMG2</A> file format partially did.
                    However, this has the limitation that, short of reserving padding space in the header, is limited in extensibility.
                </p>
                <p>
                    The common solution to this issue is to use a &quot;chunked&quot; file format.
                    In such a format, each chunk identifies itself and its size, and it&apos;s up to the reader to understand the payload.
                    With this format, the header can be very small;
                    The IMG2 format&apos;s header is <NoWrap><code>0x400</code> (1024) bytes</NoWrap> long, but the vast majority of it is reserved padding bytes.
                    In contrast, the IMG3 format&apos;s header is a measly <NoWrap><code>0x14</code> (20) bytes</NoWrap> long, with only a 12 byte overhead per tag.
                </p>

                <h2 id="headingFormat">Format</h2>

                <h3 id="headingFormatImg3">IMG3</h3>
                <p>
                    An <A href="/fw/format/img3">IMG3</A> tag consists of only 12 bytes of information: the four byte &quot;magic&quot; and two <NoWrap>32 bit</NoWrap> sizes.
                </p>
                <pre>{`Img3Tag
{
   0  uint32     magic
   4  uint32     fullSize // including header and padding
   8  uint32     size     // including padding
   C  uint8[]    data
????  uint8[]    padding
}`}</pre>

                {/* <h3 id="headingFormatImg4">IMG4</h3>
                TODO */}

                <h2 id="headingTagList">List of Known Tags</h2>
                <p>
                    There exist many different tags, each with their own purpose.
                    This is a list of tags known to exist:
                </p>
                {TagList([
                    ["BORD", "Board to be used with"],
                    ["CERT", "Certificate"],
                    ["CEPO", "Chip epoch"],
                    ["CHIP", "Chip to be used with"],
                    ["DATA", "Payload"],
                    ["ECID", "\"Exclusive Chip ID\""],
                    ["KBAG", "The (encrypted) IV/key used to decrypt the payload"],
                    ["NONC", "Nonce used when the file was signed"],
                    ["OVRD"],
                    ["PROD", "Production mode"],
                    ["RAND"],
                    ["SALT"],
                    ["SDOM", "Security domain"],
                    ["SEPO", "Security epoch"],
                    ["SHSH", "Encrypted hash of the payload"],
                    ["TYPE", <>Type of image (i.e. what the <code>DATA</code> tag contains)</>],
                    ["VERS", "iBoot version of the image"],
                ])}

            </Layout.Content>
        </Layout.Root>
    );
}
