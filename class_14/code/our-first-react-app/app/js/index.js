const React = require("react");
const ReactDOM = require("react-dom");

//Needs a render method that returns JSX
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

class Greeting extends React.Component {
  render() {
    return <h1>Welcome to our app</h1>;
  }
}

class HelloUser extends React.Component {
  render() {
    console.log(this); //Represents an instance of HelloUser
    const name = this.props.name;
    return <h1>Hello {name}</h1>;
  }
}

//FavoriteNumber
//My favourite number is: _____
//this.props.num

class FavoriteNumber extends React.Component {
  render() {
    return <h1>My Favorite Number is {this.props.num}</h1>;
  }
}

ReactDOM.render(
  <FavoriteNumber num="42" />, //This will call the render method for you!
  document.querySelector("#app")
);
