function countCode(string) {
  var regEx = /(co\we)/gi;
  var matches = string.match(regEx);
  return matches.length;
}
console.log(countCode("codedslfjsdcoredsfjdfljcoze"));

//RegEx example
var str = "test";
var regEx = /test/;
console.log(regEx.test(str)); //true

var str = "4ert";
var regEx = /\w\w\w\w/; //true

var str = "code";
var regEx = "/cowe/"; //true

//finding group of things
var str = "cowe";
var regEx = /(co\we)/gi; //g = group, i = (ignore upper/lower case), \w is any alphabet.
console.log(str.match(regEx));
//match is a string method
