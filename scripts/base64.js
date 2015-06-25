// Description:
//   Base64 encode and decode string
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hackerman base64 encode <string> - Encode string in base64
//	 hackerman base64 decode <string> - Decode string in base64
//
// Author:
//   David Lebrun

var utf8_to_base64 = function(msg)
{
	msg.send(new Buffer(msg.match[1]).toString('base64'));
}

var base64_to_utf8 = function(msg)
{
	msg.send(new Buffer(msg.match[1], 'base64').toString('utf8'));
}

module.exports = function(robot)
{
	robot.respond(/base64 encode (.*)/i, utf8_to_base64);
	robot.respond(/base64 decode (.*)/i, base64_to_utf8);
}