const Stack = require("./stack");

// let str1 = "()()";
let str2 = "()(()()";

// function balancedParenthesis(str1) {
//   let stack = new Stack();

//   let arr = str1.split(""); //can also slove this with for of loop where we do not need to split the str

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
//       stack.push(arr[i]);
//     } else {
//       if (stack.isEmpty()) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return stack.isEmpty();
// }

//the ans we are getting is
// (){{[[]]}} => true
// ([)] => true this ans is wrong so our code is also wrong

function balancedParenthesis(str) {
  let stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (pairs[char] !== undefined) {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (pairs[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

let parenthesis = ["(){{[[]]}}", "([)]"];

parenthesis.forEach((parenthesis) => {
  console.log(parenthesis, balancedParenthesis(parenthesis));
});
