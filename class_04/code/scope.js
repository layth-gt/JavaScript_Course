var somethingGlobal = "GLOBAL";

function createInnerScope () {
    var somethingLocal = "LOCAL";
    console.log (somethingGlobal);
    console.log (somethingLocal);
}

createInnerScope ();

