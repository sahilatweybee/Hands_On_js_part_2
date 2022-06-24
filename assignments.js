'use strict';

// Lecture: Functions
function describeCountry(country, population, capitalCity) {
    let description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}
console.log(describeCountry("India", 1400, "Delhi"));

// Lecture: Function Declaation vs.Expressions
function percentageOfWorld1(population) {
    return population * 100 / 7900;
}

var India = percentageOfWorld1(1400);
var Austrailia = percentageOfWorld1(25.7);
var Finland = percentageOfWorld1(5.53);

console.log(`\n ${India} \t ${Austrailia} \t ${Finland}`);

const percentageOfWorld2 = function (population) {
    return population * 100 / 7900;
}

var UK = percentageOfWorld2(67.2);
var USA = percentageOfWorld2(329.5);
var Russia = percentageOfWorld2(141.1);

console.log(`\n ${UK} \t ${USA} \t ${Russia}`);

//Lecture: Arrow Functions
const percentageOfWorld3 = population => population * 100 / 7900;

UK = percentageOfWorld3(67.2);
USA = percentageOfWorld3(329.5);
Russia = percentageOfWorld3(141.1);
India = percentageOfWorld3(1400);
Austrailia = percentageOfWorld3(25.7);
Finland = percentageOfWorld3(5.53);

console.log(`\n${India} \t ${Austrailia} \t ${Finland} \n ${UK} \t ${USA} \t ${Russia} \n `);

// Lecture: Functions Calling Other Functions
function describePopulation(country, population) {
    return `\n${country} has ${population} million people which is about ${percentageOfWorld2(population)}% of the world.`;
}

var Chinese = describePopulation("China", 1441);
var Indian = describePopulation("India", 1400);
var American = describePopulation("USA", 329.5);
console.log(`${Chinese} \n ${Indian} \n ${American}\n`);

// Lecture: Introduction to Arrays
var populations = [1441, 1400, 329.5, 25.7];
console.log(populations.length === 4);

var percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])];

console.log(`\n${percentages}`);

// Lecture: Basic Array Oprerations(Metthods)
var neighbours = [`china`, `mayanmar`, `shrilanka`];
console.log(`\n${neighbours}`);
neighbours.push(`utopia`);
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
!neighbours.includes(`germany`) ? console.log(`Probably not a central European country`) : console.log(`may be a central europian country`);
var value = neighbours.indexOf(`mayanmar`);
neighbours[value] = `burma`;
console.log(neighbours);


// Lecture: Introduction to Objects
var myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 1400.8,
    neighbours: ['China', 'Bangladesh', 'Bhutan', 'Nepal', 'Mayanmar(Burma)', 'Pakistan'],
    describe: function() {
        return `\n${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}`;
    },
    isIsland: function () {
        return this.neighbours ? false : true;
    }
};

// Lecture: Dot vs. Bracket Notation
console.log(`\n${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);
myCountry.population += 2;
console.log(myCountry.population);
let key = 'population';
myCountry[key] -= 2;
console.log(`${myCountry.population} \n`);

// Lecture: Object Methods
console.log(myCountry.describe());
console.log(myCountry.isIsland());

// Lecture: Iteration: the for Loop
for (let i=1; i<=50; i++){
    console.log( `Voter number ${i} is currently voting`);
}

// Lecture: Looping Arrays, Breaking and Countinuing
var percentages2 = [];
for (let i=0; i<=populations.length-1; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(`\n${percentages2}, \n${percentages}\n`);

// Lecture: Looping Backwards and Loops in Loops
var listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i=0; i<=listOfNeighbours.length-1; i++){
    for(let j=0; j<=listOfNeighbours[i].length-1; j++){
        console.log(listOfNeighbours[i][j]);
    }
}

// Lecture: THe While Loop
let i=0;
var percentages3 = [];
while(i<populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(`\n${percentages3}, \n${percentages}\n`);