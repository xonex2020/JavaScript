"use strict";

let meine_map = new Map();

meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft Array");
meine_map.set(function(){}, "Wert zur Eigenschaft Funktion");
meine_map.set({}, "Wert zur Eigenschaft Objekt");


let mein_set = new Set();

mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function() {});
mein_set.add({});

console.log(mein_set);

// console.log(meine_map.entries());
// console.log(meine_map.values());
// console.log(meine_map.keys());

//Über Maps interieren
for(let [key, value] of meine_map.entries()) {
    console.log(key);
    console.log(value);
}

for(let key of meine_map.keys()) {
    console.log(key);
}

for(let value of meine_map.values()) {
    console.log(value);
}

// Über Sets iterieren
for(let wert of mein_set.values()) {
    console.log(wert);
}