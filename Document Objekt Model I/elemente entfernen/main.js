"use strict";

let nav = document.querySelector("#navigation");
nav.remove();

let jumbo = document.querySelector(".jumbotron");

jumbo.forEach(function (e) {
    e.remove();
});