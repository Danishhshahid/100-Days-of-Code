function objectWithDynamicKey(key: string, value: string) {
  let dynamicObject: { [key: string]: String } = {};

  dynamicObject[key] = value;

  return dynamicObject;
};
const Userpreference = objectWithDynamicKey("theme", "Dark")
console.log(Userpreference);

