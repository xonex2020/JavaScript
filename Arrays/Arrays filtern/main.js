"use strict";

let zahlen = [12 , 23 ,34, 77, 2, 32 , 9 ,55 ,43 ,11 ,1];

let neueZahlen = zahlen.filter(function(e) {
    if(e <=20) {
        return true;
    } else {
        return false;
    }
});

console.log(neueZahlen);