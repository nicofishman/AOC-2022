const text = await Deno.readTextFile("./input.txt");

// split text into arrays separated by a blank line
const groups = text.split("\n").map((each) => each.replace('\n', ''));

const elves: number[][] = [[]]

for (let i = 0; i < groups.length; i++) {
    if (groups[i] === '') {
        elves.push([])
        continue
    } else {
        elves[elves.length - 1].push(parseInt(groups[i]))
    }
}
const sortedElves = elves.sort((a, b) => b.reduce((a1, b1) => a1 + b1, 0) - a.reduce((a2, b2) => a2 + b2, 0))

let max = 0;
for (let i = 0; i < elves.length; i++) {
    const sum = elves[i].reduce((a, b) => a + b, 0)
    if (sum > max) {
        max = sum
    }
}

const sum = sortedElves.splice(0, 3).reduce((a, b) => a + b.reduce((a1, b1) => a1 + b1, 0), 0)
console.log(sum);





