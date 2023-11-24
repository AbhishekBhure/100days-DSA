// function Palindrome(str) {
//   let strArr = str.split("");
//   for (let i = 0; i < strArr.length; i++) {
//     for (let j = strArr.length - 1; j > i; j--) {
//       if (strArr[i] == strArr[j]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }

function Palindrome(str) {
  let newStr = str.split("").reverse().join("");
  return str === newStr;
}

console.log(Palindrome("racecar"));
