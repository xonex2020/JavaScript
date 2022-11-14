"use strict";

const log_it = function(a) {
    console.log(a);
};

log_it(42);

const begruessung = function(vorname, nachname) {
    console.log(`Hallo ${vorname} ${nachname}!`);
};

begruessung("Rainer", "Winkler");


const calc = function(num_1, num_2) {
    console.log(num_1 + num_2);
    console.log(num_1 - num_2);
    console.log(num_1 * num_2);
    console.log(num_1 / num_2);
    console.log(num_1 % num_2);
};


let value_1 = 15;
let value_2 = 3;

calc(value_1, value_2);