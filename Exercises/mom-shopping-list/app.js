var btn = document.querySelector("button");
var form = document.querySelector("form");

// localStorage.getItem("input");

btn.addEventListener("click", function(e) {
  e.preventDefault();

  var wrapper = document.createElement("div");
  var p = document.createElement("p");
  var input = document.getElementById("input").value;
  p.innerHTML = input;
  //   localStorage.setItem("input", input);

  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", function(e) {
    form.removeChild(wrapper);
  });

  wrapper.appendChild(p);
  wrapper.appendChild(deleteBtn);
  form.appendChild(wrapper);
});
