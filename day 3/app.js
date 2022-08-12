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

function swap(stringToSwap) {
    let swappedString = "";
    for (let i = 0; i < stringToSwap.length; i++) {
        if (stringToSwap[i] === '1') {
            swappedString += "0";
        }
        else {
            swappedString += "1"
        }
    }
    return swappedString;
}

let values = "";

for (let i = 0; i < report[0].length; i++) {
    for (let j = 0; j < report.length; j++) {
        values += report[j][i];
    }
    values += ","
}
let str = "";

let valueArray = values.split(',');
valueArray.forEach(value => {
    let bitValues = [];
    for (let i = 0; i < value.length - 1; i++) {
        bitValues.push(value[i]);
    }
    str += max(bitValues);
})

let number = parseInt(str.replace("undefined", ""), 2) * parseInt(swap(str.replace("undefined", "")), 2);
console.log(number)
//PART ONE DONE!