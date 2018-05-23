const React = require("react");
const ReactDOM = require("react-dom");
const RonSwanson = require("./RonSwanson");
const Chuck = require("./Chuck.js");

// Constructor method (you'll need to call super here)
// Can receive props
// Can manage state
// Can event listeners
// Must have a render method
// That render method must return JSX (React elements)
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

class MyComputer extends React.Component {
  render() {
    return <p>Is a Mac</p>;
  }
}

class HelloUser extends React.Component {
  render() {
    const { name, favNumber } = this.props;
    return (
      <div>
        <p>Hello {name.toUpperCase()}</p>
        <p>Your fav number is {favNumber}</p>
      </div>
    );
  }
}

class StudentDetails extends React.Component {
  render() {
    const { name, workplace } = this.props;
    return (
      <li>
        {name} works at {workplace}
      </li>
    );
  }
}

class JavaScriptCourse extends React.Component {
  render() {
    const data = [
      { name: "AJ", workplace: "Lawfirm" },
      { name: "Ben", workplace: "Charity" },
      { name: "Layth", workplace: "Website" },
      { name: "Rach", workplace: "Ansarada" }
    ];
    const studentMarkup = data.map(student => {
      return (
        <StudentDetails name={student.name} workplace={student.workplace} />
      );
    });
    return (
      <div>
        <h1>Welcome to JS05</h1>
        <ul>{studentMarkup}</ul>
      </div>
    );
  }
}
// JavaScriptCourse
//   Use StudentDetails
// <div>
//   <h1>Welcome to JS05</h1>
//   <ul>
//     STUDENT DETAILS COMPONENTS
//   </ul>
// </div>

class MovieDetails extends React.Component {
  render() {
    const { movieName } = this.props;
    return <li>Movie Name: {movieName}</li>;
  }
}

class MovieApp extends React.Component {
  render() {
    const movies = ["Satantango", "Ghostbusters", "ToyStory", "Jaws"];
    const movieElems = movies.map(movie => {
      return <MovieDetails movieName={movie} />;
    }); // Array of React elements (instances of components)
    return (
      <div>
        <h1>Welcome to our Movie App</h1>
        <ul>{movieElems}</ul>
        <h6>Copyright Noone</h6>
      </div>
    );
  }
}

class CurrentTime extends React.Component {
  constructor(props) {
    super(props); //Inherit functionality fro React.Component
    this.state = {
      date: new Date()
    }; // set Initial State
    setInterval(() => {
      this.setState({ date: new Date() });
      //I pass in a new state
      //It changes the state and calls render for you (Explicit Mutations)
    }, 100);
  }
  render() {
    const { date } = this.state;
    const currentTime = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString();
    console.log(currentTime);
    return (
      <h1>
        {currentDate}
        {currentTime}
      </h1>
    );
  }
}

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasData: false };
    //After a second, update this.state.hasData - set it to true
    setTimeout(() => this.setState({ hasData: true }), 1000);
  }
  render() {
    if (this.state.hasData) {
      return <h1>Loaded!</h1>;
    }
    return <h1>Loading...</h1>;
  }
}

ReactDOM.render(
  <div>
    <Chuck />
    <br />
    <RonSwanson />
  </div>, // A valid component (it will run render)
  document.querySelector("#app")
);
