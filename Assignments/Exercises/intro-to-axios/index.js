var axios = require("axios");

var url = "https://api.vschool.io/royden/todo/";

function getTodos() {
    axios
        .get(url)
        .then(function (response) {
            //do stuff with the request
            console.log(response.data);
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        });
}

getTodos();

function addTodo(todoItem) {
  axios
    .post(url, todoItem)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

addTodo({
  title: "Learn axios!",
  description: "this"
});

function getTodoById(id) {
  axios
    .get(url + id)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

getTodoById("5b242561eec94d291400b50d");

function deleteTodoById(id) {
  axios
    .delete(url + id)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

deleteTodoById("5b242561eec94d291400b50d");

// PUT POST needs another parameter.

function editTodoById(id, editedTodo) {
  axios
    .put(url + id, editedTodo)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

editTodoById("5b242557eec94d291400b50c", { completed: true, price: 15000 });
