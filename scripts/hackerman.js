// Description:
//   Returns a random Hackerman's quote
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hackerman say something - Reply with an epic quote
//
// Author:
//   pric

var quotes = [
	'Follow me',
	'I was able to triangulate the cell phone signal and trace the caller',
	'Using an RX modulator, I might be able to conduct a mainframe cell direct and hack the uplink to the download',
	'With the right computer algorithm I can hack you back in time',
	'Oh no!',
	'Hi guys, I\'m Hackerman',
	'Today I\'m going to show you how to hack common household objects back or forward in time',
	'You need a lot of ram, at least 256 kilobytes',
	'I have one of the latest processors running at 7.66 megahertz',
	'But remember, with great processing power comes great responsability',
	'We\'re going to hack this three and a half floppy disk to the year 2005',
	'Place it on your partition board and make sure it is within range of the cellular transmitter',
	'Before you boot your computer, make sure your modem is properly connected',
	'The modem is what lets us bypass the grid relay and penetrate the great barier into space time. Obviously',
	'Yeah, I\'ll insert my external drive, ladies',
	'I\'m going to have to go with the hardcore hacking mode',
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
