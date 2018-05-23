const React = require("react");
const AllTodosView = require("./AllTodosView");
const InputView = require("./InputView");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Todo One", "Todo Two"]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    const currentTodos = this.state.todos;
    const allTodos = [todo, ...currentTodos];
    this.setState({ todos: allTodos });
  }
  render() {
    return (
      <div>
        <h1>Our Todo App</h1>
        <InputView addTodo={this.addTodo} />
        <AllTodosView todos={this.state.todos} />
      </div>
    );
  }
}

module.exports = App;
