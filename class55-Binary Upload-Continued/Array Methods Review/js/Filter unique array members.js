// Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O