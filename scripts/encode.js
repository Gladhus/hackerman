// Description:
//   Encodes text in different format
//
// Current encryptions:
//	  - Base64
//		- Binary
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hackerman encode <encryption> <string> - Encodes string
//																							in the encryption chosen.
//
// Authors:
//   Charles-Antoine Chartrand
//   David Lebrun

var utf8_to_base64 = function(msg)
{
	msg.send(new Buffer(msg.match[1]).toString('base64'));
}

var utf8_to_binary = function(msg)
{
	var text = msg.match[1];
	var length = text.length,
	output = [];
	for (var i = 0;i < length; i++) {
		var bin = text[i].charCodeAt().toString(2);
		output.push(Array(8-bin.length+1).join("0") + bin);
	}
	msg.send(output.join(" "));
}

module.exports = function(robot)
{
	robot.respond(/encode base64 (.*)/i, utf8_to_base64);
	robot.respond(/encode binary (.*)/i, utf8_to_binary);
}
