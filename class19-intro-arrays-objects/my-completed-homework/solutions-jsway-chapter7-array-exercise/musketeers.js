//Musketeers

/*Write a program that:
Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.*/

const musketeers = ["Athos", "Porthos", "Aramis"];

console.log("Here are the three musketeers:");
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");
console.log("Now there are four of them:");
musketeers.forEach(musketeer => {
  console.log(musketeer);
});

musketeers.splice(2, 1);
console.log("Poor Aramis has died!");
for (const musketeer of musketeers) {
  console.log(musketeer);
}
