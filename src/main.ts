//Index Signatures
interface TransactionObj {
  readonly [index: string]: number; // An index signature that specifies that all keys should have a value of type number
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: 20,
  Books: 10,
  Job: 30,
};

console.log(todaysTransactions.Pizza); // Accessing a value using dot notation
let prop = "Pizza";
console.log(todaysTransactions[prop]); // Accessing a value using square bracket notation

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) { // Looping through all keys in the object
    total += transactions[transaction]; // Accessing a value using square bracket notation
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

//todaysTransactions.Pizza = 40 // Error: Cannot assign to 'Pizza' because it is a read-only property

console.log(todaysTransactions['Dave']) // Undefined because 'Dave' is not a key in the object

///////////////////////////////////

interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

for (const key in student) { // Looping through all keys in the object
  console.log(`${key}: ${student[key as keyof Student]}`) // Accessing a value using square bracket notation
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]) // Accessing a value using square bracket notation
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`) // Accessing a value using square bracket notation
}

logStudentKey(student, 'name')


//////////////////////////////////////////////////////////////////////
// interface Incomes {
//   [key: string]: number

// }


type Streams = 'salary' | 'bonus' | 'sidehustle' // Defining a union type of string literals
type Incomes = Record<Streams, number> // Using Record utility type to create a new mapped type where all keys in the Streams union have a corresponding value of type number

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) { // Looping through all keys in the object
    console.log(monthlyIncomes[revenue as keyof Incomes]) // Accessing a value using square bracket notation
}
