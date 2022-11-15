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

// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

console.log(konto_1.inhaber.geschlecht);

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat auf seinem Konto: ${konto_1.kontostand} € zur Verfügung.`);

// Eigenschaften setzen (Dot-Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);
console.log(konto_1.abhebelimit);


// Werte setzen bzw. verändern (Dot-Notation)

konto_1.kontostand = 3000;
console.log(konto_1);



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

auto.ps = 180;
auto.modell = "A5";
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps} PS.`);