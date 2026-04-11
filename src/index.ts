console.log('Happy developing ✨')

function printName(x: {first: string | number, last?: string}) {
    console.log(`${x.first} a ${x.last} `)
}

const x = {
    first: 1,
    // last: "Hudak"
}

// printName(x);

function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id)
    }
}

// printId("pes")

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)){
        console.log("Hello, " + x.join(" and "))
    } else {
        console.log("hello " + x)
    }

}

// welcomePeople(["Peto", "Tomas", "Rado"])
// welcomePeople("Matus")

// Type Aliases
type Person = {
    first: string,
    last?: string,
}

// function printName(x: Person) {
//     console.log(`${x.first} a ${x.last} `)
// }
// printName({first: "Matus", last: "Hudak"})

// Union and Intersection Types
type Animal = { name: string};
type Hund = Animal & { sound: boolean};
const hund: Hund = {sound: true, name: "Hafo"};
// console.log(hund)

const map = new Map<number, number>()
const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
    map.set(i, i+ 1)
}
// console.log(map)

let firstNumber: number;
// let existTarget: boolen = false;
// TODO
//  here
//  It’s not much use to have a variable that can only have one value!

// TODO
//  arr.push(1)
//  arr.pop()
//  arr.shift()
//  arr.unshift(1)
//  https://www.w3schools.com/js/js_arrays.asp
