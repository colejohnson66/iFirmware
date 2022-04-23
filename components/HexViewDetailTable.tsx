/* =============================================================================
 * File:   HexViewDetailTable.tsx
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

// duplicated in `HexView.tsx`
const ColorClasses = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
];

type HexViewDetailTableEntry = [number, number, React.ReactNode, number?];

type HexViewDetailTableProps = {
    entries: HexViewDetailTableEntry[];
};

export default function HexViewDetailTable(props: HexViewDetailTableProps): React.ReactElement {
    return (
        <table>
            <thead>
                <tr>
                    <th className="border border-slate-600 bg-slate-200 p-2 text-center">Offset</th>
                    <th className="border border-slate-600 bg-slate-200 p-2 text-center">Length</th>
                    <th className="border border-slate-600 bg-slate-200 p-2 text-center">Explanation</th>
                </tr>
            </thead>
            <tbody>
                {props.entries.map((entry, idx) => (
                    <tr key={idx}>
                        <td className={`border border-slate-700 p-2 text-center ${typeof entry[3] !== "undefined" ? ColorClasses[entry[3] % ColorClasses.length] : "bg-slate-100"} font-mono`}>0x{entry[0].toString(16).toUpperCase()}</td>
                        <td className="border border-slate-700 bg-slate-100 p-2 text-center">{entry[1]}</td>
                        <td className="border border-slate-700 bg-slate-100 p-2">{entry[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
