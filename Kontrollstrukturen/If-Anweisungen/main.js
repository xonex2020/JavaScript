"use strict";

let userInput;
userInput = parseInt(prompt(`Benutzereingabe: ${userInput}`));
let minAge = 18;

if (userInput >= minAge) {
    
    if (userInput == minAge) {
        console.log("Du bist gerade so alt genug!");
    } else {
        console.log("Du bist alt genug!");
    }
} else {
    console.log("Sorry zu jung!");
} 