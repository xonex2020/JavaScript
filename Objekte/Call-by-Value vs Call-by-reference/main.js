"use strict";

let meine_variable = "Rainer";
let mein_objekt = {
    zahl: 5000
};


const meine_funktion = function(variable, objekt) {
    variable = "Peter";
    objekt.zahl = 2500;
};

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);

// call-by-value (dt.: Übergabe als Wert): gilt für primitive Datentypen (String, Number, Boolean)
// call-by-reference (dt.: Übergabe als Verweis/Rückverweis): gilt für komplexe Datentypen (Objekte, Funktionen, Arrays)


let konto = {
    iban: "DE6206564459844965",
    bic: "WEAS8EPX331",
    inhaber: {
        vorname: "Rainer",
        nachname: "Winkler",
        geschlecht: "außerirdisch",
        alter: 33
    },
    kontostand: 3500,
    aktiv: true
};


const einzahlen = function(k, e) {
    k.kontostand += e;
};

const abheben = function(k, a) {
    k.kontostand -= a;
};


einzahlen(konto, 500);
console.log(konto.kontostand)

abheben(konto, 1000);
console.log(konto.kontostand)