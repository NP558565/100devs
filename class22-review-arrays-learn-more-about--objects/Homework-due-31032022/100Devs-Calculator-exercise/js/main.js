

class Calculator {

  prevNumber;
  curNumber;
  operand;
  result;

 

  performOperation() {

    console.log(this.prevNumber, this.curNumber, this.operand)

    switch (this.operand) {
      case "^":
        this.result = +this.prevNumber ^ +this.curNumber
        break;
      case "/":
        this.result = +this.prevNumber / +this.curNumber
        break;
      case "*":
        this.result = +this.prevNumber * +this.curNumber
        break;
      case "-":
        this.result = +this.prevNumber - +this.curNumber
        break;
      case "+":
        this.result = +this.prevNumber + +this.curNumber
        break;
    }
  }
}

let calculator = new Calculator();

let calculatorElement = document.querySelector("#calculator")
calculatorElement.addEventListener('click', getKey)


function getKey(e) {

  if (e.target.nodeName === "SPAN") {
    
    const keyPressed = e.target.innerText
    let inputElement = document.querySelector("#input")
    let outputElement = document.querySelector("#output")
    
    if (!isNaN(keyPressed) || keyPressed === ".") {
      inputElement.innerText = inputElement.innerText + keyPressed
      calculator.curNumber = inputElement.innerText
    } else if (keyPressed === "DEL") {
      inputElement.innerText = inputElement.innerText.slice(0, -1)
      calculator.curNumber = inputElement.innerText
    } else if (keyPressed === "AC") {
      inputElement.innerText = "";
      outputElement.innerText = "";
      calculator.curNumber = 0
      calculator.prevNumber = 0
      calculator.operand = "+"
    } else if (keyPressed === "=") {
      calculator.curNumber = inputElement.innerText
      calculator.performOperation()
      inputElement.innerText = calculator.result
      outputElement.innerText = calculator.prevNumber + " " + calculator.operand + " " + calculator.curNumber
    } else {
      calculator.prevNumber = inputElement.innerText
      calculator.operand = keyPressed
      outputElement.innerText = calculator.prevNumber + " " + calculator.operand
      inputElement.innerText = ""
    }

  }

}


