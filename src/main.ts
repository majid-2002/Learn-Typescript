// Generic function that accepts an argument of any type and returns the same type of argument
const echo = <T>(arg: T): T => arg;

// Generic function that checks if an argument is an object but not an array or null
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// Generic function that checks if an argument is truthy or falsy
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

// Generic interface that requires an 'id' property of type number
interface HasID {
  id: number;
}

// Generic function that processes a user object that has an 'id' property
const processUser = <T extends HasID>(user: T): T => {
  // Process the user with logic here
  return user;
};

// Generic function that accepts an array of objects with 'id' properties and a key to return
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  // Map through the users and return the specified key for each user
  return users.map((user) => user[key]);
};

// Generic class with a private data property of type T, and getter and setter methods for the data
class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

// Create a new instance of the StateObject class with a string value, and update its value using the setter method
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";

// Create a new instance of the StateObject class with an array of string, number, and boolean values, and update its value using the setter method
const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
