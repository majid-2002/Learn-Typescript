"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation: (Beginner)
// let year: HTMLElement | null = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();
// if (year) { //? type guard
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }
//? 2nd variation: (with Type Assertion)
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
