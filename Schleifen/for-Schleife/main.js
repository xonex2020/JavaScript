"use strict";

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    } else if (i == 4) {
        break;
    }
    console.log(i);
}