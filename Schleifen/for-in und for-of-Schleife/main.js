"use strict";

let mein_array = [1,2,3,4,5,6,7,8,9,2334];

let mein_objekt = {
    name: "max",
    vorname: "winkler",
    alter: 85
};

for(let e in mein_array) {
    console.log(e);
}
console.log("---------------------------------");
for(let e in mein_objekt) {
    console.log(e);
}
console.log("---------------------------------");
for(let e of mein_array) {
    console.log(e);
}
