// Description:
//   Decodes text in different format
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
//   hackerman decode <encryption> <string> - Decodes string
//																							in the encryption chosen.
//
// Authors:
//	 Charles-Antoine Chartrand
//   David Lebrun

var base64_to_utf8 = function(msg)
{
  msg.send(new Buffer(msg.match[1], 'base64').toString('utf8'));
}

function binary_to_utf8(msg) {
  str = msg.match[1];
  if(str.match(/[10]{8}/g)){
    var wordFromBinary = str.match(/([10]{8}|\s+)/g).map(function(fromBinary){
      return String.fromCharCode(parseInt(fromBinary, 2) );
    }).join('');
    msg.send(wordFromBinary);
  }
}

module.exports = function(robot)
{
  robot.respond(/decode base64 (.*)/i, base64_to_utf8);
  robot.respond(/decode binary (.*)/i, binary_to_utf8);
}
