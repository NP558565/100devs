// Task1
let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.surname
console.log(user)

// Task2
function isEmpty(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object)
    {
        return true
    } else {
        return false
    }
}
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

// Task3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
console.log(sum)

// Task4
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] *= 2
        }
    }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu)
multiplyNumeric(menu)
console.log(menu)


