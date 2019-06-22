var body = document.querySelector("body");
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var jsonData = xhr.responseText;
    var jsData = JSON.parse(jsonData);
    var pokemonObjects = jsData.objects[0].pokemon;
    console.log(pokemonObjects);

    //loop thru pokemon array
    for (var i = 0; i < pokemonObjects.length; i++) {
      //create p elements and attach it to the Pokemon names
      var p = document.createElement("p");
      p.innerHTML = pokemonObjects[i].name;
      //Append p to the body
      body.appendChild(p);
    }
  }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
