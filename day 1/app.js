//2021 - DAY ONE (PART ONE + PART TWO)

//This code reads input.txt and puts everything in an array.
//NOTE, the array is of type string, that's why I use parseInt in this exercise.
//------------------------------------------------------------
const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let measurements = readFile('input.txt');
//------------------------------------------------------------

//This is the code for part one of the exercise.
//------------------------------------------------------------
let totalMeasurementIncreases = 0;
for (let i = 1; i < measurements.length; i++) {
    let previousNumber = parseInt(measurements[i - 1]);
    let currentNumber = parseInt(measurements[i]);

    if (currentNumber > previousNumber) {
        totalMeasurementIncreases++;
    }
}

console.log("PART 1: " + totalMeasurementIncreases);
//------------------------------------------------------------

//This is the code for part two of the exercise.
//------------------------------------------------------------
let accurateMeasurementIncreases = 0;
for (let i = 3; i < measurements.length; i++) {
    let previousNumber = parseInt(measurements[i - 1])  + parseInt(measurements[i - 2]) + parseInt(measurements[i - 3]);
    let currentNumber = parseInt(measurements[i]) + parseInt(measurements[i - 1]) + parseInt(measurements[i - 2]);

    if (currentNumber > previousNumber) {
        accurateMeasurementIncreases++;
    }
}

console.log("PART 2: " + accurateMeasurementIncreases);
//------------------------------------------------------------