"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Marcel",
    "Mia"
];

//  includes(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das 
//  Element gefunden wurde, bzw. false, wenn es nicht gefunden wurde.
//  Syntax: inculdes(Suchwert, Startindex) 
//  nicht destruktiv


console.log(personen.includes("Marcel"));       //  -> True startet von index null
console.log(personen.includes("Marcel", 2));    //  -> False startet von index 2


//  indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten Fundstelle
//  zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
//  Syntax: indexOf(Suchwert[,Startindex]) 
//  nicht destruktiv


console.log(personen.indexOf("Marcel"));
console.log(personen.indexOf("Marcel", 1));
console.log(personen.indexOf("Marcel", 2));


//  lastIndexOf():  Durchsucht das Array ab einem Startindex rückwärts nach einem Wert und gibt den Indes der ersten Fundstelle
//  zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde.
//  Syntax: lastIndexOf(Suchwert[,Startindex])
//  nicht destruktiv

console.log(personen.lastIndexOf("Marcel"));
