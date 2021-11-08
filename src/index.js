import getClasses from "./getClasses";

console.log("run from index");
getClasses();

const obj = {a: "a", b: "b"};
const newObj = {...obj, c: "c"}

console.log(newObj); 

