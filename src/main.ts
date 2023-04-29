type One = string;
type Two = string | number;
type Three = 'hai'

// convert to more or less specific
let a: One = "world";
let b = a as Two; // less specific
let c = a as Three; //more specific


let d = <One>"hai";
let e = <string | number>"hello";


(10 as unknown) as string;



// The DOM
const img = document.getElementById("img")! as HTMLImageElement

img.src