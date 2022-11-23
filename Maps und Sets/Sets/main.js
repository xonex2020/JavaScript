"use strict";


let mein_set = new Set();

// Value zum Set hinzufuegen
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function() {});
mein_set.add({});
mein_set.add("Test");
mein_set.add({});

// Schauen ob Test im Set vorhanden ist. True/False
mein_set.has("Test");
console.log(mein_set);

// Value aus Set löschen
mein_set.delete("Test")
console.log(mein_set);

// Alle Values im Set löschen
mein_set.clear();
console.log(mein_set);