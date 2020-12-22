/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

const pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

const checkNull = (arr) => arr === null;
console.log(pairsByIndex.some(checkNull));

if (pairsByIndex.some(checkNull) === true){
  process.exit(1);
}else{
  return [student, mentor];
};

  // If there is a null value in the array exit the program with the error code
  // https://nodejs.org/api/process.html#process_process_exit_code
  // process.exit(1);

const students = ["Islam", "Lesley", "Harun", "Rukmini"];
const mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

const pairs = pairsByIndex.map(function (indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
