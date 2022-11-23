"use strict";


// Map erstellen
let meine_map = new Map();

// Eintrag in der Map setze.
meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft Array");
meine_map.set(function(){}, "Wert zur Eigenschaft Funktion");
meine_map.set({}, "Wert zur Eigenschaft Objekt");
console.log(meine_map);

// Eintrag aus der Map holen
console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function() {}));
console.log(meine_map.get({}));

// Prüfen ob Eintrag in der Map vorhanden ist
console.log(meine_map.has(13));
console.log(meine_map.has(15));
console.log(meine_map.has({}));
console.log(meine_map.has([]));

//Eintrag in der Map löschen
meine_map.delete("Test");
console.log(meine_map);

// Size der Map
console.log(meine_map.size);

// Map clearn
meine_map.clear();
console.log(meine_map);