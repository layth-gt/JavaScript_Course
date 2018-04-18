function TodoApp() {
  //this = {}
  this.todos = ["Todo One", "Todo Two"]; //this ={todos: []}

  this.addTodo = function (todo) {
    this.todos.push(todo);
    this.render();
    
  };
  
  this.render = function () {
    var todoMarkup = this.todos.reduce (function(totalHTML, todo) {
      return totalHTML + `<li>${todo}</li>`;
    }, "")
    var target = document.querySelector(".todos");
    target.innerHTML = `<ul>${todoMarkup}</ul>`;
  };
}

var myTodoApp = new TodoApp();
myTodoApp.render();

var button = document.querySelector("button");
button.addEventListener("click", function() {
  var input = document.querySelector("input");
  var newTodo = input.value;
  if (newTodo === "") {
    alert ("You need to type something!");
    input.style.border = "2px solid red";
    return false;
  }
  myTodoApp.addTodo(newTodo);
  //Get what the user has typed in from the input
  //Pass that in to myTodoApp.addTodo
});