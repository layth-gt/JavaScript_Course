var users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    },
    {
        email: "1",
        password: "2",
        isAdmin: true
    }
  ];

var userName = document.querySelector("#user-name");
var userPass = document.querySelector("#user-password");
var loginBtn = document.querySelector("#login");
var newUserBtn = document.querySelector("#new-user");
var deleteUserBtn = document.querySelector("#delete-user");
var message = document.querySelector("#alert-message");

loginBtn.addEventListener("click", userLogin);
newUserBtn.addEventListener("click", createNewUser);
deleteUserBtn.addEventListener("click", deleteUser);

function userLogin () {
    var user = userName.value;
    var pass = userPass.value;
    for (var i = 0; i < users.length; i++) {
        if (user === users[i].email && pass === users[i].password) {
            message.innerText = "You are logged in";
            console.log ("You are logged in");
            return true;
        };
    };
    console.log ("Sorry something went wrong!")
    message.innerText = "Sorry something went woring";
    return false;
}

function createNewUser() {
    var user = userName.value;
    var pass = userPass.value;
    if (user !== "" && pass !== "") {
        users.push ({
            email: user,
            password: pass,
            isAdmin: true
          });
        
          message.innerText = "Secussful, a new user have been created";
          return true;
    }

    message.innerText = "Please fill the all fields";
    return false;
}

function deleteUser() {
    var user = userName.value;
    var pass = userPass.value;
    for (var i = 0; i < users.length; i++) {
        if (user === users[i].email && pass === users[i].password) {
            users.splice(i, 1);
            message.innerText = "User has been removed";
            console.log ("User has been removed");
            return true;
        };
    };
    console.log ("Sorry something went wrong!")
    message.innerText = "Sorry something went woring";
    return false;
}