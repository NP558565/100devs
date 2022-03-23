//Sum of values
/*Write a program that creates the following array, then calculates and 
shows the sum of its values (42 in that case).*/

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

// Solution using a forEach method
values.forEach(value => {
  sum += value;
});

// Alternative solution using a for-of loop
  for (const value of values) {
  sum += value;
  } 
  console.log(sum);
