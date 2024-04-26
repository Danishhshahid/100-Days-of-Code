"use strict";
let countries = new Map();
countries.set('Pakistan', 'karachi');
let countryChecking = (countries) => {
    if (countries.has('Pakistan')) {
        console.log(`Pakistan is present and its value ${countries.get("Pakistan")}`);
    }
    else {
        console.log("Pakistan is not Available");
    }
};
countryChecking(countries);
