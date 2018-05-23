const React = require("react");

class Chuck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, data: null };
    fetch("//api.icndb.com/jokes/random?limitTo=[nerdy]")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.value.joke });
        // debugger;
      });
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong...</div>;
    }
    if (this.state.data) {
      return <h1>{this.state.data}</h1>;
    }
    return <div>Loading...</div>;
  }
}

module.exports = Chuck;
