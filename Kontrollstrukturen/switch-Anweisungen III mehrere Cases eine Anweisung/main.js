"use strict";

let essen = "Pizza";

switch(essen) {
    case "Nudeln":
    case "Pizza":
    case "Steak":
        console.log("Das mag ich");
        break;
    case "Fisch":
    case "Hummer":
    case "Kaviar":
        console.log("Das mag ich nicht");
        break;
    default:
        console.log(`Ich kenne ${essen} nicht! Was ist das?`);
}