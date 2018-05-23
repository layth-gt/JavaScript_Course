const React = require("react");
const ReactDOM = require("react-dom");

console.log(process.env.GITHUB_CLIENT_ID);
//Webpack DotEnvp plugin 

const App = require("./App");

ReactDOM.render(<App />, document.querySelector("#app"));
