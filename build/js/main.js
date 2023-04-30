"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return `Hello I am ${this.age}`;
    }
}
const Majid = new Coder("majid", "Rock", 21); //? object of class
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    //? lang is acceessible in its child class but the age is not accessible in its child class on
    getLang() {
        return `My language is ${this.lang}`;
    }
}
const Majid2 = new WebDev("Mac", "majid", "Lofi", 23); //? object of class
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
// console.log(Page.play("strums"));
////////////////////////////////////////
class Peeps {
    static getCount() {
        return this.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Paul = new Peeps("Paul");
const Ringo = new Peeps("Ringo");
// console.log(John.id);
// console.log(Paul.id);
// console.log(Ringo.id);
// console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Param is not array of strings");
    }
}
const MyBands = new Bands();
//setter
MyBands.data = ["The Beatles", "The Who", "The Kinks"];
//getter
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "The Doors"];
console.log(MyBands.data);
