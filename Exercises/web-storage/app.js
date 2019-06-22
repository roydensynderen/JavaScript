localStorage.setItem("foo", "bar");
//Value limited to string boolean number.
//JSON.stringify for other complex data types.
localStorage.setItem("myAge", 30);
localStorage.setItem("iLikeCake", true);

var foo = localStorage.getItem("foo");

console.log(foo);
console.log(typeof myAge);
//local storage converts everything to string.

var myFavPlace = {
  name: "Capitol Reef Ntl Park",
  location: "South Utah"
};

localStorage.setItem("myFavPlace", JSON.stringify(myFavPlace));

// JSON.stringify maintains the look of arrays.

var myFavPlaceStored = localStorage.getItem("myFavPlace");
console.log(JSON.parse(myFavPlaceStored));

// JSON.parse brings back it's original type.

