const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
// function romanToInt(s) {
//   value = 0;
//   for (let i = 0; i < s.length - 1; i += 1) {
//     symbols[s[i]] < symbols[s[i + 1]]
//       ? (value -= symbols[s[i]])
//       : (value += symbols[s[i]]);
//   }
//   return value + symbols[s[s.length - 1]];
// }

//time O(n) space O(1 )
function romanToInt(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = symbols[s[i]];
    let next = i < s.length - 1 ? symbols[s[i + 1]] : 0;

    if (curr < next) {
      res -= curr;
    } else {
      res += curr;
    }
  }
  return res;
}

console.log(romanToInt("X"));
