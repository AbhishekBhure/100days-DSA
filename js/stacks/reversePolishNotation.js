const Stack = require("./stack");

function reversePolishNotation(str) {
  let newArr = str.split(" ");
  console.log(newArr);
  let monoStack = new Stack();

  for (let i = 0; i < newArr.length; i++) {
    if (isNum(newArr[i])) {
      monoStack.push(parseFloat(newArr[i]));
    } else if (isOp(newArr[i])) {
      let op1 = monoStack.pop();
      let op2 = monoStack.pop();
      let res = performOperation(op1, op2, newArr[i]);
      monoStack.push(res);
    }
  }
  return monoStack.pop();
}

function isNum(token) {
  return !isNaN(parseFloat(token)) && isFinite(token);
}

function isOp(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function performOperation(op1, op2, operator) {
  console.log(operator);
  switch (operator) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
    default:
      throw new Error("Invalid Operator");
  }
}

let res = reversePolishNotation("3 4 5 * + 8 / 9 +");

console.log(res.toFixed(2));
