// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Note: Remove block comments on each prefred solution to run code

// first solution

function multipliedBy100(number){
    return number * 100;
}
const newNumbersArray = numbers.map(multipliedBy100);
console.log(newNumbersArray);

// second solution

/* const multipliedBy100 = numbers.map(function(number){
    return number * 100;
});
console.log(multipliedBy100); */

// third solution

/* const multipliedBy100 = numbers.map(number => {
    return number * 100;
});
console.log(multipliedBy100); */

// fourth solution

/* const multipliedBy100 = numbers.map(number => number * 100);
console.log(multipliedBy100); */
