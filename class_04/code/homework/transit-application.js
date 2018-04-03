// A Transit Application
// Start with this data...

// var stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
// Create a function called travelFrom that receives a start station and an end station.

// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")


// var stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

// function travelFrom (startStation, endStation) {
//     var start = stations.indexOf (startStation);
//     var end = stations.indexOf (endStation) + 1;
//     var totalStops = (end - start);
//     var StopsNames = stations.slice (start, end);
//     console.log ("You'll need to go through " + totalStops + " stops");
//     console.log (StopsNames.join (', '));

// }

// travelFrom("Circular Quay", "Central");




// Bonus
// Make this work if you want to go backwards! e.g. You want to travel from "Redfern" to "St. James"
// Make it error-tolerant. E.g.:
// Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
// If someone passes in a station that doesn't exist, tell them

var stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

function travelFrom (startStation, endStation) {
    var start = stations.indexOf (startStation);
    var end = stations.indexOf (endStation) + 1;
    var totalStops = (end - start);
    if (start > end) {
        totalStops = Math.abs(totalStops);
        console.log ("You'll need to go through " + totalStops + " stops");

        var StopsNames = stations.slice (end, start);
        StopsNames.reverse();
        console.log (StopsNames.join (', '));
        return;
    };
    
    var StopsNames = stations.slice (start, end);
    console.log ("You'll need to go through " + totalStops + " stops");
    console.log (StopsNames.join (', '));

}

travelFrom("Circular Quay", "Central");
travelFrom("Redfern", "St. James");



// Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
// This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
// Look at the hints below
// Hints
// You can receive the name of the line! (e.g. travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station! (e.g. t2 and t3 both have "Central")
// Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. var sydneyTrains = { t1: [], t2: [] };
// Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way...
// Ask me questions about this if you want though!
// Work together as well - even if it is just in the planning stages