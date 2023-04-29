let stringArr = ["one", "two", "three"];

let guitars = ["one", 2, "three"];

let mixedArray = ["one", 2, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("One direction");

//Tuple
let myTuple: [string, number, boolean] = ["majid", 42, true];
let mixed = ["John", 1, false];

myTuple[1] = 12;

//objects
let myObj: object;

//? an object can be a [] or {}
myObj = [];
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Majid",
  prop2: true,
};

exampleObj.prop1 = "John";

//interface can also be used just like type

//interface Guitarist {
//   name: string;
//   active?: boolean; //optional
//   albums: (string | number)[];
// }

//object with a type
type Guitarist = {
  name?: string; //optional
  active?: boolean; //optional
  albums: (string | number)[];
};

const evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5153, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: [1989, "I"],
};

//we declared function with Guitarist type
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) return `Hello ${guitarist.name.toUpperCase()}`;

  return `Hello..`;
};

console.log(greetGuitarist(jp));

// Enums
// Enums is additional feature in typscript that is not in javascript

enum Grade {
  U = 1,
  D,
  c,
  B,
  A,
}

console.log(Grade.A);
