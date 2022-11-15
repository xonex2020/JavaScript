"use strict";


let auto_1 = {
    marke: "BMW",
    modell: "I8"
}

let auto_2 = {
    marke: "Tesla",
    modell: "Model x"
}

let auto_3 = {
    marke: "Tesla",
    modell: "Model x"
}

console.log(auto_1 == auto_2);      //False
console.log(auto_2 == auto_3);      //False -> Objekte sind niemals gleich, außer sie sind das selbe objekt.
console.log(auto_3 == auto_3);      //True -> das selbe objekt.
console.log({} == {});              //False -> unterschiedliche objekte

const autos_vergleichen = function(o1, o2) {
    if(o1.marke == o2.marke && o1.modell == o2.modell) {
        return true;
    } else {
        return false;
    }
};

console.log(autos_vergleichen(auto_1, auto_3));
console.log(autos_vergleichen(auto_2, auto_3));