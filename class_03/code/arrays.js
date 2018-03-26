//Arrays
// - Ordered
// - Acess data with an index (a number)
// - The index is zero-based

//Creating Arrays

var emptyArr =[];
var randomNumbers = [12,42,3.4,100,543,54];
var weirdInstruments = [
    "Badgermin",
    "The Great Stalacpipe Organ",
    "Stylophone",
    "Ondes Martenot",
    "Sharpischord",
    "Hydraulophone",
    "Pyrophone"
];

var weidArray = [null, undefined, true, "", 10, []];

//Accessing Elements
// -Always use an index that starts at 0
var badgermin = weirdInstruments[0];
var stylophone = weirdInstruments[2];
var lastItem = weirdInstruments[weirdInstruments.length - 1];
console.log (lastItem);

//Reassigning Elements

weirdInstruments[0] = "Roli Seaboard";
console.log (weirdInstruments[0]);

weirdInstruments[3] = "Makey Makey Banana Piano";
console.log (weirdInstruments[0]);

// Adding Elements
var alpha = ["b", "c"];
// Adding to the end

//Finding Elements
var emails = ["groucho", "harpo", "gummo", "zeppo"];
var deosHarpo