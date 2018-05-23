const React = require("react");
const API_KEY = "8J2LDOGO4LMSMXD0G8RMJWO2CHCXYGYC";
const baseURL = "https://api.rocketleaguestats.com/v1/search/players";
let playerName = "iam_lluly";
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
        // debugger;
        this.setState({ data: data.data[0] });
      });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong...</div>;
    }
    if (this.state.data) {
      let player = this.state.data;
      if (player.avatar === null) {
        player.avatar =
          "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9eeb57f3d051e46285044803cad7beb0d0e5d4eb_full.jpg";
      }

      return (
        <div>
          <h1>{player.displayName}</h1>
          <h2>{player.platform.name}</h2>
          <img src={player.avatar} alt="" />
          <ul>
            <li>WINS: {player.stats.wins}</li>
            <li>GOALS: {player.stats.goals}</li>
            <li>MVPS: {player.stats.mvps}</li>
            <li>SAVES: {player.stats.saves}</li>
            <li>SHOTS: {player.stats.shots}</li>
            <li>ASSISTS: {player.stats.assists}</li>
          </ul>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

module.exports = Player;
