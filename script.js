/**
 * Formats table with text on left and date on right
 * @param {*} text Text on the left side
 * @param {*} date Date on the right side
 * @returns HTML formatted for a table
 */
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
						<b><i><tt>` + date + `</tt></i></b>
					</p>
				</th>
			</tr>
		</table>
	`;
}