/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

const names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// function findLongNameThatStartsWithA(name) {
//   for(let i = 0;i < name.length;i++){
//     return name.length > 7 && name[i][0] === "A";
//   }
// }
// const longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

const longNameThatStartsWithA = names.find(name => name.length > 7 && name.startsWith("A"));
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
