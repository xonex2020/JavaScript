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


const kontostand_ausgeben = function(konto) { 
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand}€ auf dem Konto.`);
};

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);