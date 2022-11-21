"use strict";


let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 26
};

let paare = Object.entries(mein_objekt);
console.log(paare);


for (let paar of paare) {
    console.log(paar);
    for(let e of paar) {
        console.log(e);
    }
}

let eigenschaften = Object.keys(mein_objekt);
console.log(eigenschaften);

for (let e of eigenschaften) {
    console.log(e);
}

let werte =Object.values(mein_objekt);
console.log(werte);

for(let w of werte) {
    console.log(w);
}