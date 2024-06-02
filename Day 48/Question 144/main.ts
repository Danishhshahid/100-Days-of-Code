//Question 144: Explain the use of the Promise.all() method with an example.

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`the First problemm  has resolved`);
  }, 1000);
  resolve(1);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`the second problemm  has resolved`);
  }, 2000);
  resolve(2);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`the third problemm  has resolved`);
  }, 3000);
  resolve(3);
});
Promise.all([p1, p2, p3])
  .then((values) => console.log(values))
  .catch((error) => console.log(`Error ${error}`));
