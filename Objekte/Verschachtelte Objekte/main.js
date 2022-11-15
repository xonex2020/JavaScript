"use strict";


// let iban = "DE6206564459844965";
// let bic = "WEAS8EPX331";
// let kontostand = 3500;
// let aktiv = true;


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

console.log(konto_1);

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

console.log(konto_2);

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

console.log(auto);
