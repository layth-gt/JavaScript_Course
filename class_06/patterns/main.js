//Select DOM traversal

var h1 = document.querySelector("h1");

//Manipulate

h1.innerText = "Updated with JS";
h1.style.color = "hotpink";
h1.style.textDecoration = "underline";
h1.style.fontSize = "28px";

//Admire ...

function addLorem () {
    //Create - Create a paragraph DOM node
    var pTag = document.createElement ("p");
    //Manipulate - Update the text, change styles etc.
    pTag.innerText = "Lorem impsoidsd oisdjfjsdl";
    pTag.style.color = "rebeccapurple";
    pTag.style.textDecoration = "line-through";
    //Inject - Add it to the page
    document.body.appendChild(pTag);
}

// for (var i = 1; i < 100; i++) {
//     addLorem();
// };

function createImg () {
    var myImg = document.createElement("img");
    myImg.src = "https://picsum.photos/200/300";
    var width = 400;
    var height = 300;
    var url = "https://picsum.photos/" + width + "/" + height;
    img.setAttribute ("src", "url");
    // myImg.style.width = "600px";
    // myImg.height = "600px";
    document.body.appendChild(myImg);
}
createImg();