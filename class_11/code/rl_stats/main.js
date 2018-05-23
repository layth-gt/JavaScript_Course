

//Make an API Request
//  URL, Path, Parameters, Method, Data Type

function getPlayerStates (player) {
    var API_KEY = "8J2LDOGO4LMSMXD0G8RMJWO2CHCXYGYC";
    var baseURL = "https://api.rocketleaguestats.com/v1/player";
    var playerId = player;
    var platform = "1";
    var parameters = `?apikey=${API_KEY}&platform_id=${platform}&unique_id=${playerId}`;
    var url = baseURL + parameters;
    return fetch(url);
    console.log (url);
}



//turn response to json
function turnIntoJSON (response) {
    return response.json();
}

//html output
function displayPlayerStates (data) {
    // debugger;
    console.log (data);
    var targetDiv = document.querySelector("#output");
    var html = `<h2>${data.displayName}</h2>
    <img src="${data.avatar}">
    <h3>Wins: ${data.stats.wins}</h3>
    <h3>Goals: ${data.stats.goals}</h3>
    <h3>MVPs: ${data.stats.mvps}</h3>
    <h3>Saves: ${data.stats.saves}</h3>
    <h3>Shots: ${data.stats.shots}</h3>
    <h3>Assists: ${data.stats.assists}</h3>
    
    
    `;
    targetDiv.innerHTML = html;
    compair = html;


}

//function to run when search button pressed
var compair;
var form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); //to prevent refreshing the page
    var input = document.querySelector(".player-id");
    
    
    console.log (input.value);
    var player = input.value;
    
    getPlayerStates(player)
        .then (turnIntoJSON)
        .then (displayPlayerStates);


});