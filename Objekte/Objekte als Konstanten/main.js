"use strict";

const urlaub = {
    ort: "Frankreich",
    monat: "juni",
    personen: 5
};


// Nur die Eigenschaften des Objektes können verändert werden, wenn es const ist.
urlaub.ort = "Spanien"
urlaub.flug = true;
urlaub.reisekoffer = true;
console.log(urlaub);
delete urlaub.reisekoffer;
console.log(urlaub);