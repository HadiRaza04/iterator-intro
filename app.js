let numbers = [100, 200, 300];
let iterations = numbers[Symbol.iterator]();

console.log(iterations.next()); // { value: 100, done: false }
iterations.next();              //  Value: 200 does not print.
console.log(iterations.next());
console.log(iterations.next()); // { value: undefined, done: true }
