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
import { Table } from "react-bootstrap";

// TODO: add ISO/IEC 8859-1 (Latin 1) text representation to the side
// TODO: add highlighting (`data.highlights`)
export default ({ data }) => {
    const offsetHeader = "        0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F";

    const bytes = data.bytes.split(' ');

    const initialOffset = parseInt(data.initialOffset);
    const bytesToSkip = initialOffset % 16;
    const firstLineOffset = initialOffset - bytesToSkip;

    const lines = [];
    for (let i = 0; i < bytes.length;) {
        if (i === 0) {
            lines.push(bytes.slice(0, 16 - bytesToSkip));
            i += 16 - bytesToSkip;
        } else {
            // don't need to check for overrun, JS will end the slice early if we do
            lines.push(bytes.slice(i, i + 16));
            i += 16;
        }
    }

    const offsets = [];
    for (let i = 0; i < lines.length; i++)
        offsets.push(firstLineOffset + (i * 16));

    const textLines = lines.map((line, idx) => {
        if (idx === 0) {
            return <div>
                {offsets[idx].toString(16).toUpperCase()}
                {":  "}
                {"   ".repeat(bytesToSkip)}
                {line.join(" ")}
            </div>;
        }
        return <div>
            {offsets[idx].toString(16).toUpperCase()}
            {":  "}
            {line.join(" ")}
        </div>;
    });

    return (
        <>
            <pre style={{
                border: "1px",
                borderStyle: "solid",
                padding: "1rem",
                width: "fit-content"
            }}>
                {offsetHeader}
                {"\n"}
                {textLines}
            </pre>
            {data.explanation ?
                <Table>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Offset</th>
                            <th scope="col">Length</th>
                            <th scope="col">Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.explanation.map((row) => {
                            return (
                                <tr>
                                    <td><code>{row.offset}</code></td>
                                    <td>{row.length}</td>
                                    <td><code>{row.name}</code>: {<span dangerouslySetInnerHTML={{ __html: row.explanation }} />}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                : null}
        </>
    );
};
