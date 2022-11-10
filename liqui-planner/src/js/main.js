"use strict";

let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

// Eingabedaten erfassen
let titel_1 = prompt("Titel");
let typ_1 = prompt("Einnahme/Ausgabe");
let betrag_1 = parseInt(prompt("Betrag")); 
let datum_1 = prompt("Datum");
console.log(`Titel: ${titel_1}
Typ: ${typ_1}
Betrag: ${betrag_1} ct
Datum: ${datum_1}`
);

if (typ_1 === "Einnahme") {
    console.log()
    einnahmen = einnahmen + betrag_1;
    bilanz = bilanz + betrag_1;
} else if (typ_1 === "Ausgabe") {
    ausgaben = ausgaben - betrag_1;
    bilanz = bilanz - betrag_1;
} else {
    console.log(`Der Typ "${typ_1}" ist nicht bekannt!`);
}


let titel_2 = prompt("Titel");
let typ_2 = prompt("Einnahme/Ausgabe");
let betrag_2 = parseInt(prompt("Betrag")); 
let datum_2 = prompt("Datum");
console.log(`Titel: ${titel_2}
Typ: ${typ_2}
Betrag: ${betrag_2} ct
Datum: ${datum_2}`
);


if (typ_2 === "Einnahme") {
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;
} else if (typ_2 === "Ausgabe") {
    ausgaben = ausgaben - betrag_2;
    bilanz = bilanz - betrag_2;
} else {
    console.log(`Der Typ "${typ_2}" ist nicht bekannt!`);
}


// Gesamtbilanz

let bilanzStatus = bilanz >= 0;
console.log(`Einnahmen: ${einnahmen}
Ausgaben: ${ausgaben}
Bilanz: ${bilanz}
Bilanz Status: ${positiv}`
);