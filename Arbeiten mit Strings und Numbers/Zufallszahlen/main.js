"use strict";

let min = 40;
let max = 60;

const zufallszahl = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(zufallszahl(min, max));