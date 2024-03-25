let price1 =[120,180,250,500];
let price2 =[190,600,350,500];
let combinedPrices = [...price1, ...price2].sort((a ,b) => a -b );
console.log(combinedPrices);
