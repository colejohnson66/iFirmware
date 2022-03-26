/* eslint-disable @typescript-eslint/no-unused-vars */
/* =============================================================================
 * File:   HexView.tsx
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

// each "chunk" is 16 bytes
type HexViewChunkEntry = string[];

type HexViewProps = {
    initialOffset: number;
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

function ChunkToAsciiCells(skip: number, entries: HexViewChunkEntry): React.ReactElement {
    const ret: React.ReactElement[] = [];

    const text = entries.map((entry, idx) => {
        let bytes = entry.split(" ");
        const highlight = bytes[0].startsWith("h");
        const highlightColor = bytes[0].substring(1);
        if (highlight)
            bytes = bytes.slice(1);

        bytes.forEach((byte, byteIdx) => {
            const className = highlight ? ColorClasses[parseInt(highlightColor) % ColorClasses.length] : "bg-slate-100";
            const border = idx === 0 && byteIdx === 0 && skip === 0 ? "border-l border-slate-600" : "";
            const char = parseInt(byte, 16);
            ret.push(<td key={`${idx}-${byteIdx}`} className={`${className} ${border} text-center py-1 font-mono`}>{char < 32 || char > 126 ? "." : String.fromCharCode(char)}</td>);
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

export default function HexView(props: HexViewProps): React.ReactElement {
    const initialChunkOffset = 16 * Math.floor(props.initialOffset / 16);
    const bytesToSkip = props.initialOffset % 16;

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
                        <th className="border-r border-slate-600 bg-slate-200 p-1 text-center font-mono">{(initialChunkOffset + idx * 16).toString(16).toUpperCase()}</th>
                        {idx === 0 && bytesToSkip !== 0 && <td colSpan={bytesToSkip} className="bg-slate-100" />}
                        {ChunkToHexCells(chunk)}
                        {idx === 0 && <th rowSpan={props.chunks.length} className="border border-slate-600 bg-slate-100">&nbsp;</th>}
                        {ChunkToAsciiCells(idx === 0 ? bytesToSkip : 0, chunk)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
