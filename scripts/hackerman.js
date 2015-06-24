var quotes = [
	'Follow me',
	'I was able to triangulate the cell phone signal and trace the caller',
	'Using an RX modulator, I might be able to conduct a mainframe cell direct and hack the uplink to the download',
	'With the right computer algorithm I can hack you back in time',
	'Oh no!'
];

var random = function(minimum, maximum) {

	return Math.floor(Math.random() * maximum) + minimum
}

var answer = function(res) {

	var index = random(0, quotes.length);
	var quote = quotes[index];

	res.send(quote);
}

module.exports = function(robot) {

	robot.respond(/say something/i, answer);
}
