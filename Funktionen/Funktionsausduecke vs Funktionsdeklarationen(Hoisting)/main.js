"use strict";


// Funktionsausdrücke

const funktion_1 = function() {
    console.log("Funktion1");
};

funktion_1();

let funktion_2 = function() {
    console.log("Funktion2");
};

funktion_2();


// Funktionsdeklarationen (werden gehoistet)

function funktion_3() {
    console.log("Funktion 3");
}

funktion_3();
