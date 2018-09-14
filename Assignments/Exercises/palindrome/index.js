// function palindromeFinder(str) {
//   var newstr = str.toLowerCase().replace(/[^a-z]/g, "");
//   if (
//     newstr ==
//     newstr
//       .split("")
//       .reverse()
//       .join("")
//   ) {
//     console.log(str + " is a palindrome.");
//   } else {
//     console.log(str + " is not a palindrome.");
//   }
// }
// palindromeFinder("I madam, I made radio! So I dared! Am I mad?? Am I?!");

// Another way to do it
function palindromeFinder(str) {
  var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
  for (var i = 0; i < rmvChar.length / 2; i++) {
    if (rmvChar[i] !== rmvChar[rmvChar.length - 1 - i]) return false;
  }
  return true;
}

module.exports = palindromeFinder;
