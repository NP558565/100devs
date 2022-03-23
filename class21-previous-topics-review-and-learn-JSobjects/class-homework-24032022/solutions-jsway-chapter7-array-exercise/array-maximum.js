//Array maximum
/*Write a program that creates the following array, then calculates and 
shows the array's maximum value.*/

const values = [3, 11, 7, 2, 9, 10];
let max = values[0];

for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}

console.log(max);
