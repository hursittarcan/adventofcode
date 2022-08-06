const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let measurements = readFile('input.txt');

let totalMeasurementIncreases = 0;
for (let i = 0; i < measurements.length; i++) {
    let previousNumber = measurements[i - 1];
    let currentNumber = measurements[i];

    if (currentNumber > previousNumber) {
        totalMeasurementIncreases++;
    }
}
console.log(totalMeasurementIncreases);