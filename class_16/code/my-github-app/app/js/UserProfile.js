const React = require("react");

class UserProfile extends React.Component {
  render() {
    const { userData } = this.props;
    if (!userData) {
      return <div> User profile goes here</div>;
    }
    return (
      <div>
        <h2>{userData.login}</h2>
        <img src={userData.avatar_url} />
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
      </div>
    );
  }
}

module.exports = UserProfile;
