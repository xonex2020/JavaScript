"use strict";


let zahlen = [1, 20, 2000, 1000000, 50];

let neu_sortiert = zahlen.sort(function(a, b) {
    return a-b; // sortiert in aufsteigender Reihenfolge.
    //return b-a;   // sortiert in absteigender Reihefolge. 
});

console.log(neu_sortiert);