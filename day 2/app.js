const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let roadmap = readFile('input.txt');

let aim = 0;
let depth = 0;
let depthWithAim = 0;
let position = 0;
let positionWithAim = 0;

for (let i = 0; i < roadmap.length; i++) {
    let step = roadmap[i].split(" ");

    if (step[0] === "forward") {
        position += parseInt(step[1]);
        positionWithAim += parseInt(step[1]);
        depthWithAim += parseInt(step[1]) * aim;
    }

    if (step[0] === "up") {
        depth -= parseInt(step[1]);
        aim -= parseInt(step[1]);
    }
    else if (step[0] === "down") {
        depth += parseInt(step[1]);
        aim += parseInt(step[1]);
    }
}

console.log("PART 1: " + position * depth);
console.log("PART 2: " + positionWithAim * depthWithAim);