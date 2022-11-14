"use strict";

const calc = function(num_1, num_2 = 10) {
    console.log(num_1 * num_2);
};

let a = 5;
let b = 6;

calc(a);

const begruessung = function(vorname = "Max", nachname = "Mustermann", alter = 18) {
    console.log(`Hallo ${vorname} ${nachname} du bist ${alter} jahre alt!`);
};

let vor = "Rainer";
let nach = "Winkler";
let alter = 33;

begruessung(vor, nach, alter);
begruessung();

//undefined mit übergeben um den ersten parameter zu überspringen.
begruessung(undefined,nach,alter);