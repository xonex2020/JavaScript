"use strict";

let person = {
    vorname: "Rainer",
    nachname: "Winkler",
    alter: 18
};

const person_verarbeiten = function(p) {

    return {
        name: `${p.vorname} ${p.nachname}`,
        zusammenfassung: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        begruessung: `Hallo ${p.vorname} ${p.nachname}!`
    };
    
};

console.log(person_verarbeiten(person))