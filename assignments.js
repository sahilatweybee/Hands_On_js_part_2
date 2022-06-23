'use strict';

// Lecture: Functions
function describeCountry(country, population, capitalCity){
    let description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}
console.log(describeCountry("India", 1400, "Delhi"));

// Lecture: Function Declaation vs.Expressions
function percentageOfWorld1(population){
    return population * 100 / 7900;
}

var India = percentageOfWorld1(1400);
let Austrailia = percentageOfWorld1(25.7);
let Finland = percentageOfWorld1(5.53);

console.log(`\n ${India} \t ${Austrailia} \t ${Finland}`);

const percentageOfWorld2 = function(population){
    return population * 100 / 7900;
}

let UK = percentageOfWorld2(67.2);
let USA = percentageOfWorld2(329.5);
let Russia = percentageOfWorld2(141.1);

console.log(`\n ${UK} \t ${USA} \t ${Russia}`);

//Lecture: Arrow Functions

