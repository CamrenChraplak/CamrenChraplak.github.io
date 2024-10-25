function makeTable(text, date) {
    return `
        <table>
            <tr style='width: 100vw !important;'>
                <th class='date-text'>
                    <p>
                        ` + text + `
                    </p>
                </th>
                <th class='date'>
                    <p>
                        <b><i>` + date + `</i></b>
                    </p>
                </th>
            </tr>
        </table>
    `;
}