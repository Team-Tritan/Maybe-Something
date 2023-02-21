const MaybeSomething = require("./index");

let thing = new MaybeSomething("thing");
let nothing = new MaybeSomething(null);

console.log(thing);
console.log(nothing);
