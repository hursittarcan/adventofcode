const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let report = readFile('input.txt');

function max(arr){
    return arr.sort((a,b) =>
        arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

let bitValue = "";

const splitNumberOne = [];
const splitNumberTwo = [];
const splitNumberThree = [];
const splitNumberFour = [];
const splitNumberFive = [];

for (let i = 0; i < report.length; i++) {
    splitNumberOne.push(report[i][0]);
    splitNumberTwo.push(report[i][1]);
    splitNumberThree.push(report[i][2]);
    splitNumberFour.push(report[i][3]);
    splitNumberFive.push(report[i][4]);


}
bitValue += max(splitNumberOne) + max(splitNumberTwo) + max(splitNumberThree) + max(splitNumberFour) + max(splitNumberFive);
console.log(bitValue)