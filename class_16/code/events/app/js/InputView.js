const React = require("react");

class AllTodosView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this);
  }

  handleKeyPress(event) {
    this.setState({ todo: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { todo } = this.state;
    this.props.addTodo(todo); // Call App's addTodo method
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleKeyPress}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

module.exports = AllTodosView;
