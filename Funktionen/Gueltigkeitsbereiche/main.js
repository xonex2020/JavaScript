"use strict";

// Gueltigkeitsbereich: Bereich in dem man Zugriff auf eine Variable hat.

// Globale Variablen: Wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich.

// Lokale Variablen: Wird innerhalb eines Codeblocks definiert und ist nur in diesem und in den Codeblöcken die darin enthalten sind verfügbar.


let variable_1 = "Variable 1";

const meine_funktion = function() {
    let variable_2 = "Variable 2";

    if (true) {
        let variable_3 = "Variable 3";
        console.log(variable_3);
    }
    console.log(variable_1);
    console.log(variable_2);
    console.log(variable_3);
};

meine_funktion();

console.log(variable_1);
//console.log(variable_2);

