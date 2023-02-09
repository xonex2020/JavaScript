"use strict";

let link = document.querySelector("a.active");
let input = document.querySelector("input[type=text]");
let formular = document.querySelector("form");


setTimeout(() => link.click(), 3000);
setTimeout(() => link.focus(), 3000);
setTimeout(() => link.blur(), 9000);
