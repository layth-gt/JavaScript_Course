var baseURL = "https://randomuser.me/api";
var parameters = "?results=100";
var url = baseURL + parameters;

var httpOptions = {
  method: "GET"
};

function turnJASONIntoObject (response) {
  return response.json();
}

function handleData(data) {
  document.body.innerHTML = "<h1>Users Loaded</h1>";
  data.results.forEach(function(person){
    var html = `
    <p>${person.name.first} ${person.name.last} - ${person.email}</p>
    `;
    document.body.innerHTML += html;
    console.log(person);
  });
  // var person = data.results[0];
 
}

function loading() {
  document.body.innerHTML = "Loading...";
}

loading();

fetch(url, httpOptions)
  .then(turnJASONIntoObject)
  .then(handleData);
