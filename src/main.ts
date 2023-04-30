//Utility Types

// Define an interface for Assignment
interface Assignment {
  sudentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// Define a function updateAssignment which takes an Assignment and an object with partial values of Assignment
// and returns a new Assignment object with the updated properties
const updateAssignment = (
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
) => {
  return { ...assignment, ...propsToUpdate };
};

// Define an object assign1 of type Assignment
const assign1: Assignment = {
  sudentId: "12",
  title: "Homework",
  grade: 100,
};

// Call the updateAssignment function with assign1 object and an object with updated grade value
// and store the returned object in assignGraded variable
const assignGraded = updateAssignment(assign1, { grade: 90 });

// Define a function recordAssignment which takes an object of Required Assignment properties and logs it to console
const recordAssignment = (assign: Required<Assignment>) => {
  console.log(assign);
};

// Define an object assignVerified of type Readonly<Assignment> by spreading assignGraded and adding verified property
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// Call the recordAssignment function with an object with Required Assignment properties and a verified property
recordAssignment({ ...assignGraded, verified: true });

// Define an object hexColorMap with keys of type string and values of type string
const hexColorMap: Record<string, string> = {
  white: "#ffffff",
  black: "#000000",
  green: "#00ff00",
};

// Define a type LetterGrades with union of A, B, C, D and U
type LetterGrades = "A" | "B" | "C" | "D" | "U";

// Define an object finalGrades with keys of type string and values of type LetterGrades
const finalGrades: Record<string, LetterGrades> = {
  Sarah: "A",
  John: "B",
  Drake: "U",
};

// Define an interface Grades with two properties assign1 and assign2 of type number
interface Grades {
  assign1: number;
  assign2: number;
}

// Define an object GradeCard with keys of type string and values of type Grades
const GradeCard: Record<string, Grades> = {
  Sarah: { assign1: 100, assign2: 100 },
  John: { assign1: 90, assign2: 80 },
};

// Define a type AssignResult which is a Pick of Assignment interface with properties sudentId and title
type AssignResult = Pick<Assignment, "sudentId" | "title">;

// Define an object score of type AssignResult with sudentId and title properties
const score: AssignResult = {
  sudentId: "12",
  title: "Homework",
};

// Define a type AssignResult2 which is an Omit of Assignment interface with properties grade and verified
type AssignResult2 = Omit<Assignment, "grade" | "verified">;

// Define an object score2 of type AssignResult2 with sudentId and title properties
const score2: AssignResult2 = {
  sudentId: "234",
  title: "Final Projecct",
};

// Define a type adjustedGrade which is an Exclude of LetterGrades type with U as the excluded value
type adjustedGrade = Exclude<LetterGrades, "U">;

// Define a type highGrades which is an Extract of LetterGr
type highGrades = Extract<LetterGrades, "A" | "B">;
// NonNullable
type AllPossibleNames = "Dave" | "David" | "Davey" | null | undefined;
type NamesOnly = NonNullable<AllPossibleNames>;

//The above code shows how to use the NonNullable utility type. It creates a new type that removes the null and undefined types from a union type. In this example, the AllPossibleNames type includes the string values "Dave", "David", and "Davey", as well as the null and undefined types. The NamesOnly type uses NonNullable to create a new type that only includes the string values.

// ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

//The above code shows how to use the ReturnType utility type. It creates a new type that represents the return type of a given function. In this example, the createNewAssign function returns an object with a title string and points number. The NewAssign type uses ReturnType to create a new type that matches the return type of createNewAssign. The tsAssign variable uses the NewAssign type to assign the return value of createNewAssign to a variable. The console.log statement logs the value of tsAssign to the console.

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//The above code shows how to use the Parameters utility type. It creates a new type that represents the parameter types of a given function as a tuple. In this example, the AssignParams type is created using Parameters to represent the parameter types of the createNewAssign function. The assignArgs variable is assigned an array of values that match the parameter types of createNewAssign. The tsAssign2 variable uses the createNewAssign function and the spread operator to pass the values in assignArgs as arguments to create a new object. The console.log statement logs the value of tsAssign2 to the console.

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users))

//The above code shows how to use the Awaited utility type. It creates a new type that represents the resolved type of a Promise. In this example, the FetchUsersReturnType type is created using Awaited to represent the resolved type of the Promise returned by the fetchUsers function. The fetchUsers function is an asynchronous function that returns a Promise that resolves to an array of User objects.
