"use strict";

/*
let auto_1 = {
    marke: "Honda",
    modell: "Civic",
    farbe: "schwarz"
};

let auto_2 = {
    marke: "Ford",
    modell: "Fiesta ST",
    farbe: "rosa"
};

let auto_3 = {
    marke: "VW",
    modell: "Golf GTI",
    farbe: "rot"
};

let autos = [
    auto_1,
    auto_2,
    auto_3
]

console.log(autos);
*/


let autos = [
    {
        marke:  "Honda",
        modell: "Civic",
        farbe:  "schwarz"
    },
    {
        marke:  "Ford",
        modell: "Fiesta ST",
        farbe:  "rosa"
    },
    {
        marke:  "VW",
        modell: "Golf",
        farbe:  "rot"
    }
];

console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

console.log(autos[0].marke);
console.log(autos[0].modell);
console.log(autos[0].farbe);

console.log(autos[1].marke);
console.log(autos[1].modell);
console.log(autos[1].farbe);

console.log(autos[2].marke);
console.log(autos[2].modell);
console.log(autos[2].farbe);

/*
let waren = [
    ["Äpfel", 
    "Birnen", 
    "Bananen"
    ],
    ["Möhren", 
    "Sellerie", 
    "Kohl"
    ],
    ["Graubrot", 
    "Schwarzbrot", 
    "Vollkornbrot"
    ]
];
*/

let waren ={
    obst: [
        "Äpfel", 
        "Birnen", 
        "Bananen"
    ],
    gemuese: [
        "Möhren", 
        "Sellerie", 
        "Kohl"
    ],
    brot: [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ]
};


console.log(waren.obst);
console.log(waren.gemuese);
console.log(waren.brot);

console.log(waren.obst[0]);
console.log(waren.obst[1]);
console.log(waren.obst[2]);

console.log(waren.gemuese[0]);
console.log(waren.gemuese[1]);
console.log(waren.gemuese[2]);

console.log(waren.brot[0]);
console.log(waren.brot[1]);
console.log(waren.brot[2]);