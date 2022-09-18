/* =============================================================================
 * File:   HexView.tsx
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

// duplicated in `HexViewDetailTable.tsx`
const ColorClasses = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
];

type HexViewChunkEntry = string[];

type HexViewProps = {
    initialOffset: number;
    size: number;
    chunks: HexViewChunkEntry[];
};

function ChunkToHexCells(entries: HexViewChunkEntry): React.ReactElement {
    const ret: React.ReactElement[] = [];

    entries.forEach((entry, idx) => {
        let bytes = entry.split(" ");
        const highlight = bytes[0].startsWith("h");
        const highlightColor = bytes[0].substring(1);
        if (highlight)
            bytes = bytes.slice(1);

        bytes.forEach((byte, byteIdx) => {
            const className = highlight ? ColorClasses[parseInt(highlightColor) % ColorClasses.length] : "bg-slate-100";
            ret.push(
                <td key={`${idx}-${byteIdx}`}
                    className={`${className} text-center p-1 font-mono`}>{byte}</td>
            );
        });
    });

    return <>{ret}</>;
}

/**
 * Generate an array of `<td>` elements for the ASCII side of the hex view.
 *
 * @param skip The number of byte columns to skip before generating any.
 *   For example, if the first byte starts at offset 6, this would be 6.
 * @param entries The chunk entries to fill this line.
 *   The sum of the number of bytes in each entry added to the `skip` parameter must equal 16;
 *   If they sum to more than 16, too many columns will be generated.
 */
function ChunkToAsciiCells(skip: number, entries: HexViewChunkEntry): React.ReactElement {
    const ret: React.ReactElement[] = [];

    entries.forEach((entry, idx) => {
        // if the first "byte" matches `h#`, it's the highlight color
        let bytes = entry.split(" ");
        const highlight = bytes[0].startsWith("h");
        const highlightColor = bytes[0].substring(1);
        if (highlight)
            bytes = bytes.slice(1);
        const className = highlight ? ColorClasses[parseInt(highlightColor) % ColorClasses.length] : "bg-slate-100";

        bytes.forEach((byteHex, byteIdx) => {
            const border = idx === 0 && byteIdx === 0 && skip === 0 ? "border-l border-slate-600" : "";
            const byte = parseInt(byteHex, 16);
            const char = byte < 0x20 || byte > 0x7E ? "." : String.fromCharCode(byte);
            ret.push(<td key={`${idx}-${byteIdx}`} className={`${className} ${border} text-center py-1 font-mono`}>{char}</td>);
        });
    });

    if (skip !== 0) {
        return (
            <>
                <td colSpan={skip} className="border-l border-slate-600 bg-slate-100 text-center p-1 font-mono" />
                {ret}
            </>
        );
    }

    return <>{ret}</>;
}

/**
 * A hexadecimal data viewer with highlighting and an ASCII view.
 *
 * @param props.initialOffset The offset in the file the first byte comes from.
 *   This is used to show the file offsets (in multiples of 16).
 * @param props.size The total number of bytes.
 * @param props.chunks An array of "chunks".
 *   A chunk is a collection of bytes that should be grouped together.
 *   Each byte is space separated.
 *   If highlighting is desired, a chunk may be prefixed with `h#` with `#` being the desired color number.
 */
export default function HexView(props: HexViewProps): React.ReactElement {
    const initialChunkOffset = 16 * Math.floor(props.initialOffset / 16);
    const bytesToSkipStart = props.initialOffset % 16;
    const endOffset = props.initialOffset + props.size;
    const bytesToSkipEnd = (16 - (endOffset % 16)) % 16; // mod 16 ensures `(endOffset % 16) == 0` makes this 0


    return (
        <table className="border border-slate-600 mb-4">

            <thead>
                <tr className="border-b border-slate-600">
                    <th className="border border-slate-600 bg-slate-200 p-1 text-center">Offset</th>
                    {[...Array(16)].map((_, idx) => <th key={idx} className="bg-slate-200 p-1 text-center font-mono">{idx.toString(16).toUpperCase()}</th>)}
                    <th className="border border-slate-600 bg-slate-200" />
                    <th colSpan={16} className="bg-slate-200 p-1 text-center">ASCII</th>
                </tr>
            </thead>

            <tbody>
                {props.chunks.map((chunk, idx) => (
                    <tr key={idx}>
                        {/* hex offset */}
                        <th className="border-r border-slate-600 bg-slate-200 p-1 text-center font-mono">{(initialChunkOffset + idx * 16).toString(16).toUpperCase()}</th>

                        {/* add skip cells to the left of the hex side */}
                        {idx === 0 && bytesToSkipStart !== 0 && <td colSpan={bytesToSkipStart} className="bg-slate-100" />}

                        {ChunkToHexCells(chunk)}

                        {/* add skip cells to the right of the hex side */}
                        {idx === props.chunks.length - 1 && bytesToSkipEnd !== 0 && <td colSpan={bytesToSkipEnd} className="bg-slate-100" />}

                        {/* add the divider, but only on the first row */}
                        {idx === 0 && <th rowSpan={props.chunks.length} className="border border-slate-600 bg-slate-100">&nbsp;</th>}

                        {/* this will also add skip cells to the left of the ASCII side */}
                        {ChunkToAsciiCells(idx === 0 ? bytesToSkipStart : 0, chunk)}

                        {/* add skip cells to the right of the ASCII side */}
                        {idx === props.chunks.length - 1 && bytesToSkipEnd !== 0 && <td colSpan={bytesToSkipEnd} className="bg-slate-100" />}
                    </tr>
                ))}
            </tbody>

        </table>
    );
}
