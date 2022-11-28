"use strict";

let d = new Date();
console.log(d);

console.log(Date.now());

let e = new Date(149621255071);
console.log(e);

let f = new Date("Sep 23 1984 18:27:35 GMT+0100");
console.log(f);

// new Date(jahr, monat-index[Tag [, stunde[, minute[ , sekunde[, millisekunde]]]]])

let g = new Date(2012, 5, 23, 15, 15 ,15, 155);
console.log(g);