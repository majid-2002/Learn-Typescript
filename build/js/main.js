"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["one", 2, "three"];
let mixedArray = ["one", 2, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("One direction");
//Tuple
let myTuple = ["majid", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 12;
//objects
let myObj;
//? an object can be a [] or {}
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Majid",
    prop2: true,
};
exampleObj.prop1 = "John";
const evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5153, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: [1989, "I"],
};
//we declared function with Guitarist type
const greetGuitarist = (guitarist) => {
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`;
    return `Hello..`;
};
console.log(greetGuitarist(jp));
// Enums
// Enums is additional feature in typscript that is not in javascript
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["c"] = 3] = "c";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
