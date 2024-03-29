/* =============================================================================
 * File:   img3.tsx
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

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="fw" pageTitle="IMG3" canonical="/fw/format/img3">
            <Layout.Title title="IMG3" />
            <Breadcrumb.Root>
                <Breadcrumb.Item href="/fw">Firmware Files</Breadcrumb.Item>
                <Breadcrumb.Item>IMG3</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingImg2Problems" text="Problems with IMG2" />
                    <Toc.Entry href="#headingFormat" text="File Format">
                        <Toc.Entry href="#headingTags" text="Tags">
                            <Toc.Entry href="#headingTagList" text="List of Known Tags" />
                        </Toc.Entry>
                    </Toc.Entry>
                </Toc.Root>
                <p>
                    Initially used in iPhone OS 2.0 beta 4, IMG 3 files were created to address the problems with the older <A href="/fw/format/8900">8900</A>/<A href="/fw/format/img2">IMG2</A> combination.
                    This format was used on all devices using 32-bit processors (<A href="/processor/s5l8955">S5L8955</A> (A6X) and earlier).
                    All 64-bit processors (<A href="/processor/s5l8960">S5L8960</A> (A7) and newer) use the <A href="/fw/format/img4">IMG4</A> format.
                </p>

                <Clear />

                <h2 id="headingImg2Problems">Problems with IMG2</h2>
                <p>
                    The biggest problem with the <A href="/fw/format/8900">8900</A>/<A href="/fw/format/img2">IMG2</A> format combination was that they all were encrypted with the same key: <A href="/processor/s5l8900#headingKeys">Key 0x837</A>.
                    IMG3 addressed this glaring security hole by encrypting each payload with its own IV/key.
                    This IV/key pair is stored in the file with the payload, but is <em>itself</em> encrypted with the <A href="https://www.theiphonewiki.com/wiki/GID_Key">GID key</A>, a key shared by all devices with the same processor.
                    The GID key is burned into the processor and cannot be accessed directly; Instead, every time the key is needed, the processor will be instructed to use it (at no time providing it to the kernel or user code).
                </p>

                <h2 id="headingFormat">File Format</h2>
                <p>
                    Despite requiring a bit more to process, at least when compared to the <A href="/fw/format/8900">8900</A>/<A href="/fw/format/img2">IMG2</A> combination, the IMG3 file is quite simple.
                    It consists of a 20 byte header followed by a series of <A href="#headingTags">tags</A>, one after the other.
                </p>
                <pre>{`Img3 {
   0  u32        magic          // '3gmI' ('Img3' in little endian)
   4  u32        fileSize
   8  u32        tagsSize       // size of file minus 0x14 header
   C  u32        shshTagOffset
  10  u32        ident          // seems to be the same as the TYPE tag's contents
  14  Img3Tag[]  tags
}`}</pre>

                <h3 id="headingTags">Tags</h3>
                <p>
                    A &quot;tag&quot; is a chunk consisting of a the four byte &quot;magic,&quot; two <NoWrap>32 bit</NoWrap> sizes, the actual contents, and, optionally, some padding.
                    For a list of known tags, visit the <A href="/fw/format/tags">main page on firmware tags</A>.
                </p>
                <pre>{`Img3Tag
{
   0  u32   magic
   4  u32   fullSize  // including header and padding
   8  u32   size      // including padding
   C  u8[]  data
????  u8[]  padding
}`}</pre>
            </Layout.Content>
        </Layout.Root>
    );
}
