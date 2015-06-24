// Description:
//   Leetifies the text
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   leetify <text> - Leetifies the <text>
//
// Author:
//   pric

var leetConverter = require('j4y35');

var leetify = function(sentence) {

  return leetConverter.leet(sentence);
}

var repeat = function(res) {

  var sentence = res.match[1];
  var leetSentence = leetify(sentence);
  res.send(leetSentence);
}

module.exports = function(robot) {

	robot.respond(/leetify (.*)/i, repeat);
}
