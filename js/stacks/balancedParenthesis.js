const Stack = require("./stack");

// let str1 = "()()";
let str2 = "()(()()";

function balancedParenthesis(str1) {
  let stack = new Stack();

  let arr = str1.split(""); //can also slove this with for of loop where we do not need to split the str

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log(balancedParenthesis("(){{[[]}}"));
