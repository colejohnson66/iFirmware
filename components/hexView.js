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

const colorClasses = [
    "color-red", "color-orange",
    "color-yellow", "color-green",
    "color-blue", "color-indigo",
    "color-purple"
];

// TODO: add ISO/IEC 8859-1 (Latin 1) text representation to the side
export default ({ data }) => {
    const offsetHeader = <div className="hexHeader">        0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F</div>;

    const initialOffset = parseInt(data.initialOffset);
    const bytesToSkip = initialOffset % 16;

    // TODO: handle case where wrapping happens
    // Add highlighting <span> tags
    let currentColor = 0;
    const parsedBlockArr = data.detail.map((block, idx) => {
        let blockText = "";
        if (idx === 0 && bytesToSkip !== 0) {
            // handle special case where there's empty space in line
            blockText = "   ".repeat(bytesToSkip);
        }

        if (block.highlight === true) {
            blockText += `<span class="${colorClasses[currentColor]}">` +
                block.bytes + `</span>`;
            currentColor++;
        } else {
            blockText += block.bytes;
        }

        // TODO: better calculation for `length`
        return {
            text: blockText,
            length: block.bytes.split(" ").length
        };
    });

    let currentFileOffset = initialOffset;
    const linesData = [];
    let currentLine = "";
    parsedBlockArr.forEach((parsedBlock, idx) => {
        if (currentLine === "")
            currentLine = parsedBlock.text;
        else
            currentLine += " " + parsedBlock.text;

        currentFileOffset += parsedBlock.length;
        // !!!: This won't work if wrapping is needed!
        if ((currentFileOffset % 16) === 0) {
            linesData.push(currentLine);
            currentLine = "";
        }
    });

    // calculate line offsets
    const firstLineFileOffset = initialOffset - bytesToSkip;
    const offsets = [];
    linesData.forEach((_, idx) => {
        offsets.push((firstLineFileOffset + (idx * 16)).toString(16).toUpperCase());
    });

    const lines = linesData.map((line, idx) => {
        return <div key={idx} className="hexLine" dangerouslySetInnerHTML={{
            __html: `${offsets[idx]}  ${line}`
        }} />;
    });

    // build explanation detail
    let table = [];
    if (data.hasExplanations) {
        let currentColor = 0;
        let currentFileOffset = initialOffset;

        data.detail.forEach((block, idx) => {
            const blockLength = block.bytes.split(" ").length;
            table.push(<tr key={idx}>
                <td><code className={block.highlight ? colorClasses[currentColor] : null}>{currentFileOffset.toString(16).toUpperCase()}</code></td>
                <td>{blockLength}</td>
                <td><code>{block.name}</code>: <span dangerouslySetInnerHTML={{
                    __html: block.explanation
                }} /></td>
            </tr>);
            if (block.highlight)
                currentColor++;
            currentFileOffset += blockLength;
        });
    }

    return (
        <div className="hex">
            <pre>
                {offsetHeader}
                {lines}
            </pre>
            {data.hasExplanations ?
                <Table>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Offset</th>
                            <th scope="col">Length</th>
                            <th scope="col">Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </Table>
                : null}
        </div>
    );
};
