"use strict";

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
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    }, 
    abheben(a) {
        this.kontostand -= a;
    }
};

konto.einzahlen(1000);
console.log(konto.kontostand);


//Challenge: Methode in Objekt einbauen.

let person = {
    vorname: "Rainer",
    nachname: "Winkler",
    alter: 18,
    verarbeiten() {
        return {
            name: `${this.vorname} ${this.nachname}`,
            zusammenfassung: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            begruessung: `Hallo ${this.vorname} ${this.nachname}!`
        };
    }

};

console.log(person.verarbeiten());