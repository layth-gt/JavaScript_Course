const React = require("react");

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    this.props.handleSearch(username);
  }
  handleInputChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

module.exports = Search;
