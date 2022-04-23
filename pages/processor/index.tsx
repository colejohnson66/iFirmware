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
import Toc from "@components/Toc";

function List(args: [string, string, string?][]): React.ReactElement {
    return (
        <ul>
            {args.map(([url, name, paren]) => (
                <li key={url}>
                    <A href={`/processor${url}`}>{name}</A>{paren && ` (${paren})`}
                </li>
            ))}
        </ul>
    );
}

export default function Page(): React.ReactElement {
    return (
        <Layout.Root navGroup="processor" pageTitle="Processors" canonical="/processor">
            <Layout.Title title="Processors" />
            <Breadcrumb.Root>
                <Breadcrumb.Item>Processors</Breadcrumb.Item>
            </Breadcrumb.Root>
            <Layout.Content>
                <Toc.Root>
                    <Toc.Entry href="#headingEarly" text="Early Processors" />
                    <Toc.Entry href="#headingASeries" text="A Series Processors" />
                    <Toc.Entry href="#headingMSeries" text="M Series Processors" />
                    <Toc.Entry href="#headingSTSeries" text="S and T Series Processors" />
                    <Toc.Entry href="#headingOther" text="Other Processors" />
                </Toc.Root>
                <p>
                    Over the years, Apple has used and designed a variety of processors.
                    Originally, &quot;off the shelf&quot; processors were used, but with the <A href="/device/iphone/4">iPhone 4</A>, Apple designed their own custom silicon (the <A href="/processor/s5l8930">S5L8930</A> (A4)).
                    Since then, all ARM processors Apple has used have been custom designed.
                </p>

                <Clear />

                <h2 id="headingEarly">Early Processors</h2>
                <p>
                    These processors are rebadged ARM processors.
                </p>
                {List([
                    ["/s5l8900", "S5L8900"],
                    ["/s5l8720", "S5L8720"],
                    ["/s5l8920", "S5L8920"],
                    ["/s5l8922", "S5L8922"],
                ])}

                <h2 id="headingASeries">A Series Processors</h2>
                {List([
                    ["/s5l8930", "S5L8930", "A4"],
                    ["/s5l8940", "S5L8940", "A5 - APL0498"],
                    ["/s5l8942", "S5L8942", "A5 Rev A - APL2498"],
                    ["/s5l8945", "S5L8945", "A5X"],
                    ["/s5l8947", "S5L8947", "A5 Rev B - APL7498"],
                    ["/s5l8950", "S5L8950", "A6"],
                    ["/s5l8955", "S5L8955", "A6X"],
                    ["/s5l8960", "S5L8960", "A7 - APL0698"],
                    ["/s5l8965", "S5L8965", "A7 Variant - APL5698"],
                    ["/t7000", "T7000", "A8"],
                    ["/t7001", "T7001", "A8X"],
                    ["/s8000", "S8000", "A9 (Samsung)"],
                    ["/s8003", "S8003", "A9 (TSMC)"],
                    ["/s8001", "S8001", "A9X"],
                    ["/t8010", "T8010", "A10 \"Fusion\""],
                    ["/t8011", "T8011", "A10X \"Fusion\""],
                    ["/t8015", "T8015", "A11 \"Bionic\""],
                    ["/t8020", "T8020", "A12 \"Bionic\""],
                    ["/t8027", "T8027", "A12X and A12Z \"Bionic\""],
                    ["/t8035", "T8035", "A13 \"Bionic\""],
                    ["/t8101", "T8101", "A14 \"Bionic\""],
                    ["/t8110", "T8110", "A15 \"Bionic\""],
                ])}

                <h2 id="headingMSeries">M Series Processors</h2>
                {List([
                    ["/t8103", "T8103", "M1"],
                    ["/t6000", "T6000", "M1 Pro"],
                    ["/t6001", "T6001", "M1 Max"],
                ])}

                <h2 id="headingSTSeries">S and T Series Processors</h2>
                {List([
                    ["/s7002", "S7002", "S1"],
                    ["/t8002", "T8002", "S1P, S2, and T1"],
                    ["/t8004", "T8004", "S3"],
                    ["/t8006", "T8006", "S4 and S5"],
                    ["/t8301", "T8301", "S6 and S7"],
                    ["/t8012", "T8012", "T2"],
                ])}

                <h2 id="headingOther">Other Processors</h2>
                {List([
                    ["/w1", "W1"],
                    ["/w2", "W2"],
                    ["/w3", "W3"],
                    ["/t2002", "T2002", "H1"],
                ])}
            </Layout.Content>
        </Layout.Root>
    );
}
