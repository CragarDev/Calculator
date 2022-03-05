console.log();
console.log("Hello Craig, How are we today?");
console.log();
// ? -- Calculator

// notes -- psudo code ---
/*
1. build a functional calculator
2. the user clicks on numbers...
   then clicks an operator...
   then clicks more numbers...
   then clicks the equals buttons...
   the output will show the computation
3. If the user hasn't clicked any numbers...
   - clicks the operator or equals button - nothing happens (output stays at 0)
4. when the user clicks a numbered button...
   the output will show those numbers build on as they click
5. if the user clicks the equal button after entering numbers, without using an operator...
   - nothing happens (the output stays the same)
6. the user should next click on one of the 

*/

//
// variables
const outputDisplay = document.querySelector("#display");
console.log(outputDisplay.innerText);
let beforeOp = "";
let afterOp = "";
let opVal = "";
let opSet = false;
let reOpSet = false;
let calculated = false;
let calcMemory = 0;
const operators = ["+", "-", "*", "/"];

// function to clear display back to zero
function clr() {
  outputDisplay.innerText = "0";
  console.log(outputDisplay.innerText);
  beforeOp = "";
  afterOp = "";
  opVal = "";
  opSet = false;
  calculated = false;
  calcMemory = 0;
}

// tests whether the calculation has run
function calculateTest() {
  if (calculated) {
    clr();
    calculated = false;
  }
  return;
}

// caclulation function
function calculation() {
  let calculation = 0;
  let num1 = parseInt(beforeOp);
  let num2 = parseInt(afterOp);
  console.log(num1, num2);
  if (opVal == "+") {
    calculation = parseInt(beforeOp) + parseInt(afterOp);
  } else if (opVal == "-") {
    calculation = parseInt(beforeOp) - parseInt(afterOp);
  } else if (opVal == "*") {
    calculation = parseInt(beforeOp) * parseInt(afterOp);
  } else if (opVal == "/") {
    calculation = parseInt(beforeOp) / parseInt(afterOp);
  } else {
    calculation = "0";
  }
  console.log(calculation);
  outputDisplay.innerText = calculation;
  beforeOp = outputDisplay.innerText;
  afterOp = "";
  calculated = true;
  calcMemory = calculation;
  opVal = "";
  return;
}

// clicking the number buttons
function press(e) {
  // calculateTest();
  if (beforeOp == 0) {
    outputDisplay.innerText = "";
    outputDisplay.innerText += e;
    beforeOp = outputDisplay.innerText;
  } else if (opSet) {
    outputDisplay.innerText += e;
    afterOp += String(e);
  } else {
    outputDisplay.innerText += e;
    beforeOp = outputDisplay.innerText;
  }
  console.log(beforeOp);
  console.log(opVal);
  console.log(afterOp);
  return;
}

// clicking on the operator buttons
function setOP(e) {
  if (calculated) {
    beforeOp = calcMemory;
  }
  if (afterOp != "") {
    calculation();
    setOP(e);
  }
  if (beforeOp == 0) {
    return;
  } else if (opSet) {
    if (e == opVal) {
      return;
    } else {
      opVal = e;
      outputDisplay.innerText.slice(-1);
      outputDisplay.innerText += e;
    }
  } else {
    opVal = e;
    opSet = true;
    outputDisplay.innerText += e;
  }
}

// clicking on the C - clear display and any other variables

console.log();
console.log("end of file");
console.log();
