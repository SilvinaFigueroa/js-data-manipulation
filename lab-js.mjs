// Part 1 -------------------------------------------------------------------------

console.log(`Part 1: Math Problems`)
//Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do numbers add to 50? True/False
const isSum50 = (num1 + num2 + num3 + num4) === 50
console.log(`Is the sum 50?", isSum50`)

//Are at least 2 numbers odd? True/False
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2
console.log(`Are there two or more odd numbers?`, areTwoOdd)

//No numbers can be larger than 25
const isOver25 = !(num1 < 25) && !(num2 < 25) && !(num3 < 25) && !(num4 < 25);
console.log(`Are any numbers over 25?`, isOver25)

//Are all numbers unique?
const isUnique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4
console.log(`Are all numbers unique?`, isUnique)

//Did the numbers pass all validation checks?
const isValid = isSum50 && areTwoOdd && !isOver25 && isUnique
console.log(`Do the numbers pass all validation checks?`, isValid)

//Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisible5 = ((num1 % 5) + (num1 % 5) + (num1 % 5) + (num1 % 5) + (num1 % 5)) == 0;
console.log(`Are all numbers divisible by 5?`, isDivisible5);

// Check if the first number is larger than the last. Cache the result in a variable.

const firstBiggerLast = num1 > num4;
console.log(`Is the first number is larger than the last?`, firstBiggerLast);

// Accomplish the following arithmetic chain:

let arithmeticChain = ((num1 - num2) * num3) % num4;
console.log(`Arithmetic chain result:`, arithmeticChain);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.
const areLargerThan25 = num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25;
console.log(`Are any numbers over 25 (not need to use the NOT operator)?`, areLargerThan25)

// Part 2 -------------------------------------------------------------------------

console.log(`Part 2: Practical Math`)

const tripDistance = 1500;
const speed55ph = 30;
const speed60ph = 28;
const speed75ph = 23;
const avgGallon = 3;

const tripBudget = 175;

// How many gallons of fuel will you need for the entire trip?


let trip55phGallon = (tripDistance / speed55ph);
let trip60phGallon = (tripDistance / speed60ph);
let trip75phGallon = (tripDistance / speed75ph);

let costTrip55ph = trip55phGallon * avgGallon;
let costTrip60ph = trip60phGallon * avgGallon;
let costTrip75ph = trip75phGallon * avgGallon;

let tripDurantion55 = tripDistance / 55;
let tripDurantion60 = tripDistance / 60;
let tripDurantion75 = tripDistance / 75;


console.log(`Travelling spending: 
- at 55 miles per hour you will spend $${costTrip55ph.toFixed(2)}, ${trip55phGallon} gallons, and the trip will last ${tripDurantion55.toFixed(2)} hours
- at 60 miles per hour $${costTrip60ph.toFixed(2)} ${trip60phGallon} gallons, and the trip will last ${tripDurantion60} hours
- at 75 miles per hour $${costTrip75ph.toFixed(2)} ${trip75phGallon} gallons, and the trip will last ${tripDurantion75} hours.`);

// Part 3 -------------------------------------------------------------------------
console.log(`Part 3:Future Exploration`)











