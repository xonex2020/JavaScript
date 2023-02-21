"use strict";

// für Funktion
let meine_zahlen = [44, 51, 36];
const addieren = function(a, b, c) {
    console.log(a + b + c);
};

// addieren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2]);
addieren(...meine_zahlen);

// für Arrays
let kleines_array = ["Apfel", "Banane", "Kiwi"];
//let grosses_array = [kleines_array[0], kleines_array[1], kleines_array[2], "Orange", "Weintraube"];

let grosses_array = [...kleines_array, "Orange", "Weintraube"];
console.log(grosses_array);


// für Objekte

let kleines_objekt = {
    name: "Ein Objekt",
    groesse: 2,
    objekt: true
};

let groesses_objekt = {
    ...kleines_objekt,
    betreff: "Spread-Syntax",
    datum: new Date()
};

console.log(groesses_objekt);


// für Instanzen von Objekten

let datumswerte = [2020, 5, 14];
//let datum = new Date(datumswerte[0], datumswerte[1], datumswerte[2]);
let datum = new Date(...datumswerte);
console.log(datum);

