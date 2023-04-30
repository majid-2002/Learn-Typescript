class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I am ${this.age}`;
  }
}

const Majid = new Coder("majid", "Rock", 21); //? object of class

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  //? lang is acceessible in its child class but the age is not accessible in its child class on
  public getLang() {
    return `My language is ${this.lang}`;
  }
}

const Majid2 = new WebDev("Mac", "majid", "Lofi", 23); //? object of class

// console.log(Majid2.getLang());
// console.log(Majid2.age);
// console.log(Majid2.lang);

/////////////////////////// Interaces ///////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "Guitar");
// console.log(Page.play("strums"));

////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount() {
    return this.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Paul = new Peeps("Paul");
const Ringo = new Peeps("Ringo");

// console.log(John.id);
// console.log(Paul.id);
// console.log(Ringo.id);
// console.log(Peeps.count);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
    } else throw new Error("Param is not array of strings");
  }
}

const MyBands = new Bands();

//setter
MyBands.data = ["The Beatles", "The Who", "The Kinks"];
//getter
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "The Doors"];
console.log(MyBands.data);
