"use strict";

let d = new Date();
console.log(d);


// d.toLocaleString([schema [, option]])

let de_DE = d.toLocaleString("de-DE");
let en_US = d.toLocaleString("en-US");
console.log(de_DE);

let de_DE_2 = d.toLocaleString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    secound: "2-digit"
});
console.log(de_DE_2);


let de_DE_datum = d.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
});
console.log(de_DE_datum);


let de_DE_time = d.toLocaleTimeString("de-DE", {
    hour: "numeric",
    minute: "2-digit",
    secound: "2-digit"
});

console.log(de_DE_time);