function appendSparkline(elem, similarities) {
	var count = 0;
	if (!similarities) {
		return;
	}
	var container = $('<div>', {
		class : 'container'
	});
	for (var i = 0; i < nSelectors; i++) {
		if (selectors[i] && !selectors[i]['lock']) {
			var selectorDiv = $('<div>', {
				class : 'selector'
			}).appendTo(container);
			var barDiv = $('<div>', {
				class : 'bar selector' + i
			}).appendTo(selectorDiv);
			if (similarities[i] > 0) {
				barDiv.css('height', (100 * similarities[i]) + '%');
				count++;
			}
		}
	}
	if (count >= 1) {
		container.appendTo(elem);
	}
	// if (count >= 2) {
	// containerTotal = $('<div/>', {
	// class : 'container total'
	// }).appendTo(elem);
	// selectorDiv = $('<div/>', {
	// class : 'selector total'
	// }).appendTo(containerTotal);
	// barDiv = $('<div/>', {
	// class : 'bar total'
	// }).appendTo(selectorDiv);
	// barDiv.css('height', (100 * totalSim) + '%');
	// }
}