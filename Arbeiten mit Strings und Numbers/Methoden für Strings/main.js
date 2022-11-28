"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";


//  Länge des Strings ermitteln.
console.log(s.length);

//  Nach Wort um String suchen -> Suche startet von vorne.
console.log(s.indexOf("ipsum"));

//  Nach Wort um String suchen -> Suche startet von hinten.
console.log(s.lastIndexOf("ipsum"));

//  Prüft ob das in dem String enthalten ist und gibt true/false zurück.
console.log(s.includes("sit"));

//  konvertiert den string in only lower case.
console.log(s.toLowerCase());

//  konvertiert den String in only upper case.
console.log(s.toUpperCase());

//  entfernt die Leerzeichen am Anfang und Ende vom String.  
console.log(s.trim);

//  wiederholt den String für den vorher definierten wert.
console.log(s.repeat(2));



//  Nach Wort um String suchen -> kennt keinen start index.
console.log(s.search("ipsum"));

//  tauscht ein wort gegen ein anderes aus.
console.log(s.replace("ipsum", "opsum"));


//  regex       https://regex101.com/

let regex = /i\w{4}/g;

console.log(s.search(regex));
console.log(s.replace(regex, "opsum"));
console.log(s.match(regex));