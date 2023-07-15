// Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr2 = [ pete, john, mary ];

let sortedByAge = arr2.sort((a, b) => a.age - b.age)
console.log(sortedByAge)

// now: [john, mary, pete]
alert(arr2[0].name); // John
alert(arr2[1].name); // Mary
alert(arr2[2].name); // Pete