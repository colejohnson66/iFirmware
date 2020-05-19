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
import DateTime from "../dateTime";

// Web citation roughly following Wikipedia's style (Citation Style 1)
// TODO: Ensure this is correct.
export default (props) => {
    // NOTE: Cannot be an array of React elements; must be a string array
    let author;
    if (Array.isArray(props.author))
        author = props.author.join("; ");
    else
        author = props.author;

    // TODO: if no author, put this after website
    let date = null;
    if (props.date)
        date = <> (<DateTime dateTime={props.date} />)</>;

    let beforeUrlPeriod = null;
    if (props.author || props.date)
        beforeUrlPeriod = ". ";

    let titleAndLink;
    if (props.url)
        titleAndLink = <a href={props.url} className="external">{props.title}</a>;
    else
        titleAndLink = <>"{props.title}"</>;
    
    let website = null;
    if (props.website)
        website = <><i>{props.website}.</i>{" "}</>;
    
    let accessDate = null;
    if (props.accessDate)
        accessDate = <>Retrieved <DateTime dateTime={props.accessDate} />{". "}</>;

    return (
        <span className="citationWeb">
            {author}
            {date}
            {beforeUrlPeriod}
            {titleAndLink}{". "}
            {website}
            {accessDate}
        </span>
    );
};
