const React = require("react");

const UserProfile = require("./UserProfile");
const Search = require("./Search");
const { fetchUserProfile } = require("./Fetch");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null, repos: null };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(username) {
    fetchUserProfile(username).then(data => {
      const { login, avatar_url, followers, following } = data;
      const profile = { login, avatar_url, followers, following };
      this.setState({ profile });
    });
    //Make two API requests:
    //  Get Profile details of username from the GitHub API
    // Get Repository details of username from the GitHub API
    // console.log(username, this);
  }
  render() {
    return (
      <div>
        <h1>Our GitHub App</h1>
        <Search handleSearch={this.handleSearch} />
        <hr />
        <UserProfile userData={this.state.profile} />
      </div>
    );
  }
}

module.exports = App;
