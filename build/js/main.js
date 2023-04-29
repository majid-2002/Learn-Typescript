"use strict";
//? literal types
let myName;
let username;
username = "majid";
//? functions
//? return type is in here is number
function add(a, b) {
    return a + b;
}
//? void for functions that don't return anything
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("hello world");
logMsg(add(1, 2));
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 3));
//? optional parameters
const addAll = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
// console.log(addAll(1, 2));
// console.log(addAll(1, 2, 3));
//? if c is not provided, it will be 2
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(1, 1));
logMsg(sumAll(1, 1, 3));
logMsg(sumAll(undefined, 1, 1));
///? Rest parameters
const total = (a, ...numbers) => {
    return a + numbers.reduce((acc, cur) => acc + cur);
};
logMsg(total(1, 2, 3));
const createError = (msg) => {
    throw new Error(msg);
};
//? never type 
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
    }
};
