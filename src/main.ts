//? type alias
type stringOrNumber = string | number;
type stringOrNumberarray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean; //optional
  albums: stringOrNumberarray;
};

type userId = stringOrNumber;

//? literal types
let myName: "majid";

let username: "majid" | "ali" | "reza";
username = "majid";

//? functions
//? return type is in here is number
function add(a: number, b: number): number {
  return a + b;
}

//? void for functions that don't return anything
const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("hello world");
logMsg(add(1, 2));

//? explain this line of code

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (a, b) {
  return a * b;
};

logMsg(multiply(2, 3));

//? optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (c) return a + b + c;

  return a + b;
};

// console.log(addAll(1, 2));
// console.log(addAll(1, 2, 3));

//? if c is not provided, it will be 2
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(sumAll(1, 1));
logMsg(sumAll(1, 1, 3));
logMsg(sumAll(undefined, 1, 1));

///? Rest parameters
const total = (a: number, ...numbers: number[]): number => {
  return a + numbers.reduce((acc, cur) => acc + cur);
};

logMsg(total(1, 2, 3));




const createError = (msg: string): never => {
  throw new Error(msg);
};


//? never type 
const infiniteLoop = () => {
  let i = 0;
  while (true) {
    i++;
  }
};
