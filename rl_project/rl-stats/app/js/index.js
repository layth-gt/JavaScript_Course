const React = require("react");
const ReactDOM = require("react-dom");
const Player = require("./RLStats.js");

const searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", event => {
  event.preventDefult();
  const input = document.querySelector("#player-name");
  console.log(input.value);
});

ReactDOM.render(
  <div>
    <Player />
  </div>, // A valid component (it will run render)
  document.querySelector("#app")
);
