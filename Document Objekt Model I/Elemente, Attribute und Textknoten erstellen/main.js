"use strict";


//  Eleement erstellen

let div = document.createElement("div");
//console.log(div);

//  Attribute erstellen

let attr = document.createAttribute("id");
attr.value = "meine_id";
//console.log(attr);

//  Attribute einem Element hinzufügen
div.setAttributeNode(attr);
//console.log(div);


//  Attribute erstellen und hinzufügen
div.setAttribute("class", "meine_klasse");

let text = document.createTextNode("Redmer");

console.log(text);
console.log(div);