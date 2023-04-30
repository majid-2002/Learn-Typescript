"use strict";
const todaysTransactions = {
    Pizza: 20,
    Books: 10,
    Job: 30,
};
console.log(todaysTransactions.Pizza); // Accessing a value using dot notation
let prop = "Pizza";
console.log(todaysTransactions[prop]); // Accessing a value using square bracket notation
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) { // Looping through all keys in the object
        total += transactions[transaction]; // Accessing a value using square bracket notation
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40 // Error: Cannot assign to 'Pizza' because it is a read-only property
console.log(todaysTransactions['Dave']); // Undefined because 'Dave' is not a key in the object
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) { // Looping through all keys in the object
    console.log(`${key}: ${student[key]}`); // Accessing a value using square bracket notation
}
Object.keys(student).map(key => {
    console.log(student[key]); // Accessing a value using square bracket notation
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`); // Accessing a value using square bracket notation
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) { // Looping through all keys in the object
    console.log(monthlyIncomes[revenue]); // Accessing a value using square bracket notation
}
