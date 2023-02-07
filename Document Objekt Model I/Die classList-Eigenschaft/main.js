"use strict";

let jumbo = document.querySelector(".jumbotron");

let class_list = jumbo.classList;
console.log(class_list);



jumbo.classList.add("meine-klasse");
jumbo.classList.remove("jumbotron");
jumbo.classList.replace("meine-klasse", "deine-klasse");
console.log(jumbo.classList.contains("jumbotron"));
console.log(jumbo.classList.contains("deine-klasse"));
jumbo.classList.toggle("auch-eine-klasse");     // Sowas wie ein kippschalter