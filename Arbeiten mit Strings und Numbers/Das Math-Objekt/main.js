"use strict";

console.log(Math);

//  Kreisfläche berechnen mir Radius.
//  A = Pi * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);


//  Mathematisch runden. 
let a_gerundet = Math.round(a);
console.log(a_gerundet);

//  Mathematisch abrunden.
let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

//  Matehmatisch aufrunden.
let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

//  Auf x nachkommestellen begrenzen -> Ausgabe wird zu einem String.
let a_nachkommastellen = a.toFixed(3);
console.log(a_nachkommastellen);

//  Umwandeln in Integer.
let a_integer = parseInt(a_nachkommastellen);
console.log(a_integer);

//  Umwandeln in Float.
let a_float = parseFloat(a_nachkommastellen);
console.log(a_float);