'use strict';

/*
 
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;

// Functions
function logger() {
  console.log('My name is  Sahil');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function Declarations vs. Expressions
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
 
// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, ' Sahil')); console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
 
// Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, ' Sahil'));
console.log(yearsUntilRetirement(1950, 'Raj'));
*/

/*
 
// Introduction to Arrays
const friend1 = 'Dev';
const friend2 = Jay';
const friend3 = 'Raj';

const friends = ['Raj', 'Jay', 'Dev'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = ' Sahil';
const  Sahil = [firstName, 'Parsaniya', 2037 - 1991, 'teacher', friends];
console.log( Sahil);
console.log( Sahil.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


 
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

/*
// Introduction to Objects
const  SahilArray = [
  ' Sahil',
  'Parsaniya',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const  sahil = {
  firstName: ' Sahil',
  lastName: 'Parsaniya',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


 
// Dot vs. Bracket Notation
const  Sahil = {
  firstName: ' Sahil',
  lastName: 'Parsaniya',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log( Sahil);

console.log( Sahil.lastName);
console.log( Sahil['lastName']);

const nameKey = 'Name';
console.log( Sahil['first' + nameKey]);
console.log( Sahil['last' + nameKey]);

// console.log( Sahil.'last' + nameKey)

const interestedIn = prompt('What do you want to know about  Sahil? Choose between firstName, lastName, age, job, and friends');

if ( Sahil[interestedIn]) {
  console.log( Sahil[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

Sahil.location = 'India';
Sahil['acc'] = '@ SahilParsaniya';
console.log( Sahil);

// Object Methods

const  Sahil = {
  firstName: ' Sahil',
  lastName: 'Parsaniya',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  }

  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYear;
  }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${ Sahil.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log( Sahil.calcAge());

console.log( Sahil.age);
console.log( Sahil.age);
console.log( Sahil.age);

// Challenge
// " Sahil is 20-year old, and he has a driver's license"
console.log( Sahil.getSummary());
*/

/*
const Devid = {
  fullName: 'Devid Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

Devid.calcBMI();
john.calcBMI();

console.log(Devid.bmi, john.bmi);

if (Devid.bmi > john.bmi) {
  console.log(`${Devid.fullName}'s BMI (${Devid.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > Devid.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${Devid.fullName}'s BMI (${Devid.bmi})`)
}


 
// Iteration: The for Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2' );
// console.log('Lifting weights repetition 3' );
// console.log('Lifting weights repetition 4' );
// console.log('Lifting weights repetition 5' );
// console.log('Lifting weights repetition 6' );
// console.log('Lifting weights repetition 7' );
// console.log('Lifting weights repetition 8' );
// console.log('Lifting weights repetition 9' );
// console.log('Lifting weights repetition 10' );

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}` );
}


 
// Looping Arrays, Breaking and Continuing
const  Sahil = [
  ' Sahil',
  'Parsaniya',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log( Sahil[0])
// console.log( Sahil[1])
// ...
// console.log( Sahil[4])
//  Sahil[5] does NOT exist

for (let i = 0; i <  Sahil.length; i++) {
  // Reading from  Sahil array
  console.log( Sahil[i], typeof  Sahil[i]);

  // Filling types array
  // types[i] = typeof  Sahil[i];
  types.push(typeof  Sahil[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i <  Sahil.length; i++) {
  if (typeof  Sahil[i] !== 'string') continue;

  console.log( Sahil[i], typeof  Sahil[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i <  Sahil.length; i++) {
  if (typeof  Sahil[i] === 'number') break;

  console.log( Sahil[i], typeof  Sahil[i]);
}


 
// Looping Backwards and Loops in Loops
const  Sahil = [
  ' Sahil',
  'Parsaniya',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i =  Sahil.length - 1; i >= 0; i--) {
  console.log(i,  Sahil[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
  }
}
*/

 
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
