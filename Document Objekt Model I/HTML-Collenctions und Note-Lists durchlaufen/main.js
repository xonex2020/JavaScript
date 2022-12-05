"use strict";

let html_collection_1 = document.getElementsByClassName("jumbotron");
console.log(html_collection_1);

let html_collection_2 = document.getElementsByTagName("li");


//  for schleife

for(let i = 0; i < html_collection_1.length; i++) {
    console.log(html_collection_1[i]);
}

for(let i = 0; i < html_collection_2.length; i++) {
    console.log(html_collection_2[i]);
}

// For of Schleife

for(let e of html_collection_1) {
    console.log(e);
}

for(let e of html_collection_2) {
    console.log(e);
}

//Node-Lists

let node_list = document.querySelectorAll("p");
console.log(node_list);

node_list.forEach(function(e) {
    console.log(e);
})