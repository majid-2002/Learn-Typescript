"use strict";
//Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define a function updateAssignment which takes an Assignment and an object with partial values of Assignment
// and returns a new Assignment object with the updated properties
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
// Define an object assign1 of type Assignment
const assign1 = {
    sudentId: "12",
    title: "Homework",
    grade: 100,
};
// Call the updateAssignment function with assign1 object and an object with updated grade value
// and store the returned object in assignGraded variable
const assignGraded = updateAssignment(assign1, { grade: 90 });
// Define a function recordAssignment which takes an object of Required Assignment properties and logs it to console
const recordAssignment = (assign) => {
    console.log(assign);
};
// Define an object assignVerified of type Readonly<Assignment> by spreading assignGraded and adding verified property
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// Call the recordAssignment function with an object with Required Assignment properties and a verified property
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Define an object hexColorMap with keys of type string and values of type string
const hexColorMap = {
    white: "#ffffff",
    black: "#000000",
    green: "#00ff00",
};
// Define an object finalGrades with keys of type string and values of type LetterGrades
const finalGrades = {
    Sarah: "A",
    John: "B",
    Drake: "U",
};
// Define an object GradeCard with keys of type string and values of type Grades
const GradeCard = {
    Sarah: { assign1: 100, assign2: 100 },
    John: { assign1: 90, assign2: 80 },
};
// Define an object score of type AssignResult with sudentId and title properties
const score = {
    sudentId: "12",
    title: "Homework",
};
// Define an object score2 of type AssignResult2 with sudentId and title properties
const score2 = {
    sudentId: "234",
    title: "Final Projecct",
};
//The above code shows how to use the NonNullable utility type. It creates a new type that removes the null and undefined types from a union type. In this example, the AllPossibleNames type includes the string values "Dave", "David", and "Davey", as well as the null and undefined types. The NamesOnly type uses NonNullable to create a new type that only includes the string values.
// ReturnType
//type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
//The above code shows how to use the Awaited utility type. It creates a new type that represents the resolved type of a Promise. In this example, the FetchUsersReturnType type is created using Awaited to represent the resolved type of the Promise returned by the fetchUsers function. The fetchUsers function is an asynchronous function that returns a Promise that resolves to an array of User objects.
