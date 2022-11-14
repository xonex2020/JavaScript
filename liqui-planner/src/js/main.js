"use strict";

let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel,
    typ, 
    betrag, 
    datum;

const eintrag_erfassen = function() {
    titel = prompt("Titel");
    typ = prompt("Einnahme/Ausgabe");
    betrag = parseInt(prompt("Betrag")); 
    datum = prompt("Datum");
};

const eintrag_ausgeben = function(titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
    );
}

const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag) {
    if (typ === "Einnahme") {
        console.log()
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if (typ === "Ausgabe") {
        ausgaben = ausgaben - betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log(`Der Typ "${typ}" ist nicht bekannt!`);
    }
};

const gesamtbilanz_ausgeben = function(einnahmen, ausgaben, bilanz) {
    console.log(`Einnahmen: ${einnahmen}
Ausgaben: ${ausgaben}
Bilanz: ${bilanz}
Bilanz Status: ${bilanz >= 0}`
    );
};

const eintrag_hinzufuegen = function() {
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
}; 

eintrag_hinzufuegen();