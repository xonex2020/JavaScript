"use strict";

const haushaltsbuch = {
    
    gesamtbilanz:  {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },

    eintraege: [],
    
    eintrag_erfassen() {
        this.eintraege.push(
            {
                titel: prompt("Titel"),
                typ: prompt("Einnahme/Ausgabe"),
                betrag: parseInt(prompt("Betrag")),
                datum: prompt("Datum")
            }
        );
    },

//     eintrag_ausgeben() {
//         console.log(`Titel: ${this.neuer_eintrag.titel}
// Typ: ${this.neuer_eintrag.typ}
// Betrag: ${this.neuer_eintrag.betrag} ct
// Datum: ${this.neuer_eintrag.datum}`
//         );
//     },

   
//     eintrag_mit_gesamtbilanz_verrechnen() {

//         switch(this.neuer_eintrag.typ) {
//             case "Einnahme":
//                 this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
//                 this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
//                 break;
//             case "Ausgabe":
//                 this.gesamtbilanz.ausgaben -= this.neuer_eintrag.betrag;
//                 this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
//                 break;
//             default:
//                 console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt!`);
//                 break;

//         }
//     },

//     gesamtbilanz_ausgeben() {
//         console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen}
// Ausgaben: ${this.gesamtbilanz.ausgaben}
// Bilanz: ${this.gesamtbilanz.bilanz}
// Bilanz Status: ${this.gesamtbilanz.bilanz >= 0}`
//         );
//     },
    eintrag_hinzufuegen() {
        this.eintrag_erfassen();
        // this.eintrag_ausgeben();
        // this.eintrag_mit_gesamtbilanz_verrechnen();
        // this.gesamtbilanz_ausgeben();
    }
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);