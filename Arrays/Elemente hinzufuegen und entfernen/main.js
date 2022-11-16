"use strict";


let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

console.log(personen[1]);
personen[1] = "Pia";
console.log(personen[1]);
console.log(personen);

//  push(): Fügt ein Element am Ende des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
//  destruktiv


personen.push("Rainer");
console.log(personen);

//  pop(): Entfernt das letzte Element aus dem Array (und gibt es zurück)
//  destruktiv

personen.pop("Rainer");
console.log(personen);

//  unshift(): Fügt ein Element am Anfang des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
//  destruktiv

console.log(personen.unshift("Rainer"));
console.log(personen);

//  shift(): Entfernt das Element aus dem Array (und gibt es zurück)
//  destruktiv

console.log(personen.shift("Rainer"));
console.log(personen);
