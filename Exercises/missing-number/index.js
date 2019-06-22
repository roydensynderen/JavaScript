function findMissingNo(arr) {
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  //Check for gaps
  //loop through arr
  //check if there's more than a diference of 1 between two given elements
  for (var i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== 1) {
      return sorted[i] - 1;
    }
  }
}

module.exports = findMissingNo;
