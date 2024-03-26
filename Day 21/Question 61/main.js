"use strict";
var vehiclyes;
(function (vehiclyes) {
    vehiclyes[vehiclyes["Trucks"] = 0] = "Trucks";
    vehiclyes[vehiclyes["cars"] = 1] = "cars";
    vehiclyes[vehiclyes["bikes"] = 2] = "bikes";
    vehiclyes[vehiclyes["cycles"] = 3] = "cycles";
})(vehiclyes || (vehiclyes = {}));
console.log(vehiclyes.bikes);
