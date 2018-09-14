var btn = document.btn;

btn.addEventListener("submit", function(e) {
  e.preventDefault();

  let one = +document.getElementById("i1").value;
  let two = +document.getElementById("i2").value;
  let three = +document.getElementById("i3").value;
  
  var total = 7 * one + 5 * two + 11 * three;
  if (one < 0 || two < 0 || three < 0) {
    alert("No negative values!");
    total = "No";
  } 
  if (!total) {
    total = "No";
  }
  document.getElementById("tbox").innerHTML = `${total} coins!`;
  document.getElementById("i1").value = "";
  document.getElementById("i2").value = "";
  document.getElementById("i3").value = ""; 
});
