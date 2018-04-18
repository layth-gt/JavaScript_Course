var todos = [
  "Todo 1", "Todo 2", "Todo 3"
];

var listItems = todos.reduce(function (currentHTML, todo) {
  console.log (currentHTML);
  return currentHTML + `<li>${todo}</li>`;

},"");

var unorderedList = `<ul>${listItems}</ul>`;
document.body.innerHTML += unorderedList;