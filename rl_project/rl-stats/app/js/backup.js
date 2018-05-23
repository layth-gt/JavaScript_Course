const React = require("react");
const API_KEY = "8J2LDOGO4LMSMXD0G8RMJWO2CHCXYGYC";
const baseURL = "https://api.rocketleaguestats.com/v1/search/players";
let playerName = "iam_balbool";
const parameters = `?apikey=${API_KEY}&display_name=${playerName}`;
const url = baseURL + parameters;

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, data: null };
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        debugger;
        this.setState({ data: data.data[0].displayName });
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

module.exports = Player;

// let displayName = data.data[0].displayName;
// let uniqueId = data.data[0].uniqueId;
