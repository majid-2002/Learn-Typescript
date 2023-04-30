"use strict";
// Generic function that accepts an argument of any type and returns the same type of argument
const echo = (arg) => arg;
// Generic function that checks if an argument is an object but not an array or null
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// Generic function that checks if an argument is truthy or falsy
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
// Generic function that processes a user object that has an 'id' property
const processUser = (user) => {
    // Process the user with logic here
    return user;
};
// Generic function that accepts an array of objects with 'id' properties and a key to return
const getUsersProperty = (users, key) => {
    // Map through the users and return the specified key for each user
    return users.map((user) => user[key]);
};
// Generic class with a private data property of type T, and getter and setter methods for the data
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
// Create a new instance of the StateObject class with a string value, and update its value using the setter method
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
// Create a new instance of the StateObject class with an array of string, number, and boolean values, and update its value using the setter method
const myState = new StateObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
