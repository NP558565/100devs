/*Using "this" in object literal, Here the function makeUser returns an object.
What is the result of accessing its ref? Why?*/
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}
let user = makeUser();
alert( user.ref().name ); // John
=====================================================================================
//
/*Create an object calculator with three methods:
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
=====================================================================================
//Chaining
/*There’s a ladder object that allows to go up and down:
Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0*/
ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0