// Coding Challenge-1
'use strict';
console.log("////////////////////////////////////////////////////\n//////////////////////////////////////////////////////\n")
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    }
}
// For test Data-1
console.log(`For Test 1`);
var avgDolphins = calcAverage(44, 23, 71);
var avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

console.log(`For Test 2`);
var avgDolphins = calcAverage(85, 54, 41);
var avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

console.log("\n");

// Coding Chaallenge-2
var bills = [125, 555, 44];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = (bill * 15) / 100;
        return tip;
    }
    else {
        let tip = (bill * 20) / 100
        return tip;
    }
}
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// Bonus
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`${total}\n`);

// Coding Challenge-3
var marksInfo = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    BMI: 0,
    bmi: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
var johnsInfo = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    BMI: 0,
    bmi: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
console.log(`${marksInfo.bmi()}\t${johnsInfo.bmi()}`);

if (marksInfo.bmi() > johnsInfo.bmi()) {
    console.log(`${marksInfo.name}'s BMI (${marksInfo.bmi()}) is higher than ${johnsInfo.name}'s (${johnsInfo.bmi()})!`);
}
else {
    console.log(`${johnsInfo.name}'s BMI (${johnsInfo.bmi()}) is higher than ${marksInfo.name}'s (${marksInfo.bmi()})!`);
}

// Coding Challenge-4
const calcTip4 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];
  
for (let i = 0; i < bills.length; i++) {
    let tip = calcTip4(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(`BILLS: ${bills},\nTIPS: ${tips},\nTOTALS: ${totals}`);

const calcAverage4 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(`\n${calcAverage4([2, 3, 7])}`);
console.log(`${calcAverage4(totals)}`);
console.log(`${calcAverage4(tips)}`);