"use strict";

let personen = [
    "Peter",
    "Anna",
    "Marc",
    "Sascha",
    "Popel"
];


//  Vorwärtsdurchlaufen
for(let i = 0; i < personen.length; i++) {
    console.log(`Hallo ${personen[i]}`);
}


//  Rückwerts durchlaufen
for(let i = personen.length -1; i >= 0; i--) {
    console.log(`Hallo ${personen[i]}`);
}