const user = { name: "Poornima", age: 20 };
const userCopy = { ...user };
console.log(userCopy);
function add(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(add(...nums));