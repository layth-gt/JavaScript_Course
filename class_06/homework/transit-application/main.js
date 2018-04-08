var stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
var stations = stations.map(function(x){ return x.toLowerCase() }); //to uppercase forever :(
var startStationInput = document.querySelector("#start-station");
var endStationInput = document.querySelector("#end-station");
var routeButton = document.querySelector("button");
var stationReveal = document.querySelector("#station-reveal");
var stationlist = document.querySelector("#stations");


routeButton.addEventListener("click", routeFinder);

function routeFinder () {

    var startStation = (startStationInput.value).toLowerCase();
    var endStation = (endStationInput.value).toLowerCase();
    
    var start = stations.indexOf (startStation);
    var end = stations.indexOf (endStation) + 1;
    var totalStops = (end - start);
    if (start > end) {
        totalStops = Math.abs(totalStops);
        stationReveal.innerText = "You'll need to go through " + totalStops + " stops";
        
        console.log ("You'll need to go through " + totalStops + " stops");

        var StopsNames = stations.slice (end, start);
        StopsNames.reverse();
        stationlist.innerText = StopsNames.join (' >> ');
        console.log (StopsNames.join (' >> '));
        return;
    };
    
    var StopsNames = stations.slice (start, end);
    stationReveal.innerText = "You'll need to go through " + totalStops + " stops";
    console.log ("You'll need to go through " + totalStops + " stops");
    stationlist.innerText = StopsNames.join (' >> ');
    console.log (StopsNames.join (' >> '));
    
}
