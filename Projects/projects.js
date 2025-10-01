function insertIndicators(num) {
	let retString = "";
	for (let i = 0; i < num; i++) {
		if (i == 0) {
			retString += '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
		}
		else {
			retString += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
		}
	}
	return retString;
}

window.addEventListener('load', (event) => {

	let itemLength = document.getElementById("inner-carousel").children.length;

	document.getElementById("ind").outerHTML = insertIndicators(itemLength);
});