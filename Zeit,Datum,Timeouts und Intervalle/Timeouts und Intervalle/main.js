"use strict";

// setTimeout(callback-funktion, zeitspanne [, parameter])

console.log("Los");
setTimeout(function() {
    console.log("Fertig!");
}, 2000);

//  setInterval(callback-funktion, Zeitspanne)

setInterval(function() {
    console.log("Eine Sekunde ist um!");
},1000);