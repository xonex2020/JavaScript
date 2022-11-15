"use strict";

let konto_1 = {
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

let konto_2 = {
    iban: "DE62065645955844965",
    bic: "WEAS89484331",
    inhaber: {
        vorname: "Rainer2",
        nachname: "Winkler2",
        geschlecht: "außerirdisch",
        alter: 34
    },
    kontostand: 3700,
    aktiv: true
};

// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_1["inhaber"]["geschlecht"];
console.log(wert_2);

// Eigenschaften setzen (Bracket-Notation)

konto_2["abhebelimit"] = 2000;
console.log(konto_2["abhebelimit"]);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 3000;
console.log(konto_1["kontostand"]);


// Warum sollten wir die Bracket-Notation jemals verwenden?

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);

// Challenge 

let auto = {
    marke: "Rudi",
    modell: "A4",
    kraftstoffart: "billoplus",
    kilometerstand: 100000000,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: false,
        panoramadach: true
    },
    zustand: "katastrophe",
    preis: 100
};


let eigenschaft_2 = "ps"
let ps_auto = auto[eigenschaft_2];
auto["ps"] = 200;
auto["modell"] = "A6";
console.log(`Ein ${auto["marke"]} ${auto["modell"]} hat ${auto["ps"]} PS.`);


