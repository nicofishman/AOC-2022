const text = await Deno.readTextFile("./input.txt");

// split text into arrays separated by a blank line
const groups = text.split("\r").map((each) => each.replace('\n', ''));

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
console.log('PART 1:', sortedElves[0].reduce((a, b) => a + b, 0));

const sum = sortedElves.splice(0, 3).reduce((a, b) => a + b.reduce((a1, b1) => a1 + b1, 0), 0)
console.log('PART 2:', sum);





