type Shape = {
  kind: "circle" | "rectangle";
  radius?: number;
  width?: number;
  height?: number;
};

let circle: Shape = {
  kind: "circle",
  radius: 8,
};

let rectangle: Shape = {
  kind: "rectangle",
  width: 20,
  height: 55,
};

console.log(circle);
console.log(rectangle);
