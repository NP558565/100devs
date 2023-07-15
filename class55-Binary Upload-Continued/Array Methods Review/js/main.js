// Translate border-left-width to borderLeftWidth
function camelize(camelWord) {
    return camelWord.split('-').map(function (word, index) {

        if (index == 0) {
            return word.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
}

// console.log(camelize("background-color"))


// Filter Range
function filterRange(arr, a, b) {
    let result = arr.filter(num => num >= a && num <= b)
    console.log(result)
}

// filterRange([5, 3, 8, 1], 1, 4)


// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
    console.log(arr)
}

// filterRangeInPlace([5, 3, 8, 1], 1, 4)


// Sort in decreasing order
function numSort(arr) {
    result = arr.sort((a, b) => b - a)
    console.log(result)
}

// numSort([5, 2, 1, -10, 8])


// Copy and sort array
// function copySorted(arr) {
//     return arr.slice().sort()
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);


// Create an extendable calculator
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            num1 = +split[0],
            operator = split[1],
            num2 = +split[2];

        if (!this.methods[operator] | isNaN(num1) || isNaN(num2)) {
            return NaN;
        }

        return this.methods[operator](num1, num2)
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator("6 + 8")

// console.log(calc.calculate("6 + 7"))


// Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => ` ${user.name}`)

// alert( names ); // John, Pete, Mary


// Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[1].id ) // 1
// alert( usersMapped[1].fullName ) // John Smith


// Sort users by age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr2 = [ pete, john, mary ];

// let sortedByAge = arr2.sort((a, b) => a.age - b.age)
// console.log(sortedByAge)

// // now: [john, mary, pete]
// alert(arr2[0].name); // John
// alert(arr2[1].name); // Mary
// alert(arr2[2].name); // Pete


// Shuffle an array
let arr3 = [1, 2, 3];

function shuffle(array) {
    console.log(arr3.sort(() => Math.random() - 0.5))
}

shuffle(arr3);
// arr = [3, 2, 1]

shuffle(arr3);
// arr = [2, 1, 3]

shuffle(arr3);
// arr = [3, 1, 2]


// Get average age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// let getAverageAge = (arr.reduce((a, b) => a + b.age, 0,) / arr.length)

// alert( getAverageAge ); // (25 + 30 + 29) / 3 = 28


// Filter unique array members
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O


// Create keyed object from array
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

console.log(usersById)

/*
// after the call we should have:
 
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/