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

let India = percentageOfWorld1(1400);
let Austrailia = percentageOfWorld1(25.7);
let Finland = percentageOfWorld1(5.53);

console.log(`\n ${India} \t ${Austrailia} \t ${Finland}`);

const percentageOfWorld2 = function (population) {
    return population * 100 / 7900;
}

let UK = percentageOfWorld2(67.2);
let USA = percentageOfWorld2(329.5);
let Russia = percentageOfWorld2(141.1);

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
function describePopulation (country, population){
    return `\n${country} has ${population} million people which is about ${percentageOfWorld2(population)}% of the world.`;
} 

let Chinese = describePopulation("China", 1441);
let Indian = describePopulation("India", 1400);
let American = describePopulation("USA", 329.5);
console.log(`${Chinese} \n ${Indian} \n ${American}`);