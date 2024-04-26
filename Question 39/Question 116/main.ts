// Create a switch case that matches several cases to the same code block, representing seasons.
let seasons = (month: number) => {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log(`The season is winter`);
      break;
    case 3:
    case 4:
    case 5:
      console.log(`The season is Spring`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`The season is Summer`);
      break;
    case 9:
    case 10:
    case 11:
      console.log(`The season is Fall`);
      break;
    default:
      console.log(`Enter a valid Month Number`);
      break;
  }
};
seasons(12);
seasons(5);
seasons(8);
seasons(10);
seasons(20);
