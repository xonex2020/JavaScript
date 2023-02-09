"use strict";

document.addEventListener("keydown", e => {
    console.log(e);
    if(e.key === "@") {
        console.log("Das @ Zeichen wurde gedrückt.");
    }
})


document.addEventListener("keyup", e => {
    console.log(e);
    if(e.key === "p") {
        console.log("Das p Zeichen wurde gedrückt.");
    }
})

document.addEventListener("keypress", e => {
    console.log(e);
    if(e.key === ":") {
        console.log("Das : Zeichen wurde gedrückt.");
    }
})