// The World Translator
// Write a function called translator that receives a language (e.g. "fr", "eng" etc.).
//  Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "french" - log "Bonjour le monde" etc.)

function translator(language) {
    if (language === "eng") {
        console.log ("Hello World");
    } else if (language === "fr") {
        console.log ("Bonjour le monde");
    } else {
        console.log ("language is not available");
    }
}
translator ("fr");
