"use strict";


let z = 0;

while (z < 10) {
    z++;
    if(z == 5) {
        continue;               // 5 wird übersprungen
    } else if(z == 7) {
        break;                  // sofortiges beenden der Schleife
    }
    console.log(z);
}