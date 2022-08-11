const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let roadmap = readFile('input.txt');

let depth = 0;
let position = 0;

for (let i = 0; i < roadmap.length; i++) {
    let step = roadmap[i].split(" ");

    if (step[0] === "forward") {
        position += parseInt(step[1]);
    }

    if (step[0] === "up") {
        depth -= parseInt(step[1]);
    }
    else if (step[0] === "down") {
        depth += parseInt(step[1]);
    }
}

console.log("PART 1: " + position * depth);