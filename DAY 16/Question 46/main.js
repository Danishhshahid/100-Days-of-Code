"use strict";
let cars = {
    make: "honda",
    model: 2016,
    varient: "top of the line",
    describe: function () {
        console.log(`The make of this care is ${this.make}, model ${this.model}, varient ${this.varient}`);
    }
};
cars.describe();
