// Nested function scope

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   //   console.log(a, b, c) // c is not defined
//   inner();
// }
// // console.log(a, b, c);  // b, c is not defined
// outer();

// Closure

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

// // Function Currying
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(3, 4, 5));

// //sum(3,4,5) to sum(3)(4)(5)

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = carry(sum);
// console.log(curriedSum(2)(3)(4));

// const add2 = carriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);

// console.log(add5());

// this keyword

function sayMyName(name) {
  console.log(`Hello ${name}`);
}

sayMyName('Aziz');

const person = {
  name: 'Aziz',
  sayMyName: function () {
    console.log(`My name is ${this.name} `);
  },
};

person.sayMyName();
