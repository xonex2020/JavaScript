"use strict";

let jumbo = document.querySelector(".jumbotron");

let classes = jumbo.className;

console.log(classes);

jumbo.className = "meine-klasse";

jumbo.className += " lorem";
jumbo.className = jumbo.className.replace("meine", "deine");

jumbo.className = "meine-klasse";


document.querySelector("#navigation > ul > li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) ").className = "active";
