"use strict";

let meine_map = new Map();

meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft Array");
meine_map.set(function(){}, "Wert zur Eigenschaft Funktion");
meine_map.set({}, "Wert zur Eigenschaft Objekt");
console.log(meine_map);

let mein_set = new Set();

mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function() {});
mein_set.add({});

console.log(mein_set);

// meine_map.forEach(function(wert, eigenschaft, map){
//     console.log(wert);
//     console.log(eigenschaft);
//     //console.log(map);

// });

// mein_set.forEach(function(wert, NULL, set) {
//     console.log(wert);
//     //console.log(set);
// });


for(let paar of meine_map) {
    console.log(paar);
}

for(let wert of mein_set) {
    console.log(wert);
}