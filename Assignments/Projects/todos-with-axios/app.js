var section = document.querySelector("section");
var form = document.querySelector("form");
var btn = document.querySelector("button");

var url = "https://api.vschool.io/royden/todo/";

function editTodo(id, checked, label) {
  axios
    .put(url + id, {completed: checked})
    .then(function(response) {
      console.log(response.data)
      label.style.setProperty('text-decoration', response.data.completed ? 'line-through' : "none");
    })
    .catch(function(err) {
      console.log(err);
    })
}

function deleteTodo(id, parent, child) {
  axios
  .delete(url + id)
  .then(function(response) {
    console.log(response.data);
    //this is where you remove the child from the parent
    parent.removeChild(child);
    alert('todo deleted');
  })
  .catch(function(err) {
    console.log(err);
  });
}

var displayTodo = function(todo) {
  var wrapper = document.createElement("div");
  var h3 = document.createElement("h3");
  //Make header
  h3.innerHTML = todo.title;
  //Make content
  var descP = document.createElement("p");
  //Make description
  descP.innerHTML = todo.description;
  //Make price
  var priceP = document.createElement("p");
  priceP.innerHTML = todo.price;

  //make delete button, link to axios, append to wrapper.
  var delB = document.createElement("button");
  // delB.id = "delete";
  delB.addEventListener('click', function() {
    deleteTodo(todo._id, section, wrapper);
  })
  delB.textContent = "Delete";

  //Make checkbox
  var label = document.createElement("label");
  label.innerHTML = "Completed";
  label.style.setProperty('text-decoration', todo.completed ? 'line-through' : "none");

  var input = document.createElement("input");
  input.type = "checkbox";
  input.checked = todo.completed;
  // input.id = "checkbox";
  input.addEventListener('click', function() {
    editTodo(todo._id, input.checked, label);
    // if (label.style.textDecoration = "line-through") {
    //   label.style.setProperty('text-decoration', 'none');
    // } else if (label.style.textDecoration = 'none') {
    //   label.style.setProperty('text-decoration', 'line-through');
    // }
  })
  label.appendChild(input);

  // append all things to wrapper
  wrapper.appendChild(h3);
  wrapper.appendChild(descP);
  wrapper.appendChild(priceP);
  wrapper.appendChild(label);
  wrapper.appendChild(delB);

  //append them all to wrapper
  section.appendChild(wrapper);
};

axios
  .get(url)
  .then(function(response) {
    //convert data to html elements
    var todos = response.data;
    todos.forEach(displayTodo);
  })
  .catch(function(err) {
    console.log(err);
  });

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var output = {};
  //POST todo using axios
  function addTodo(todoItem) {
    axios
      .post(url, todoItem)
      .then(function(response) {
        console.log(response.data);
        displayTodo(response.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  //call displayTodo function with response data
  addTodo({
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value
  });
  
});
