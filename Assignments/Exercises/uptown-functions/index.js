var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function joinArray(lyrics) {
    var joined = lyrics.slice(",").join(" ");
    return joined;
}
joinArray(lyrics);

function reverseIt(lyrics) {
    var reversed = lyrics.slice(",").reverse().join(" ");
    return reversed;
}
reverseIt(lyrics);

function printEveryOther(arr) {
    var otherWords = [];
    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            otherWords.push(arr[i]);
        }
    }
    console.log(otherWords.join(" "));
}
printEveryOther(lyrics);

var reverseEveryOther = function(arr) {
    var newLyrics = [];
    for (i = 1; i < arr.length; i += 2) {
        newLyrics.push(arr[i], arr[i - 1]);
    }
    return newLyrics.join(" ");
}
console.log(reverseEveryOther(lyrics));